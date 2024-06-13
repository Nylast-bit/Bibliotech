import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import './index.css';
import Sidebar from '../Sidebar';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY!);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [isProcessing, setIsProcessing] = useState(false);
    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsProcessing(true);

        try {
            const { data: clientSecret } = await axios.post(
                `${process.env.VITE_API_URL}/create-payment-intent`,
                { amount: 1000 } // Amount in cents
            );

            const cardElement = elements.getElement(CardElement);
            if (!cardElement) {
                console.error("CardElement not found");
                setErrorMessage("Card details not found. Please try again.");
                setIsProcessing(false);
                return;
            }

            const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: cardElement,
                    billing_details: {
                        email,
                    },
                },
            });

            if (stripeError) {
                console.error("Error from Stripe: ", stripeError.message);
                setErrorMessage(stripeError.message || "An unknown error occurred.");
            } else {
                console.log('Payment successful', paymentIntent);
            }
        } catch (backendError) {
            console.error("Error from backend: ", backendError);
            setErrorMessage("Failed to process payment. Please try again.");
        }

        setIsProcessing(false);
    };

    return (
        <div id="divInferior">
            <Sidebar />
            <div id="divInferiorDerecho">
                <form onSubmit={handleSubmit} className="card">
                    <h1>Detalles de Pago</h1>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <CardElement className="StripeElement" />
                    {errorMessage && <div className="error">{errorMessage}</div>}
                    <button type="submit" disabled={!stripe || isProcessing}>
                        {isProcessing ? 'Procesando...' : 'Pagar'}
                    </button>
                </form>
            </div>
        </div>
    );
};

const Payments = () => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
    );
};

export default Payments;
