import './index.css'

type Props = {
    img: any,
    title: any
}

const BookItem: React.FC<Props> = ({ img, title }) => {
    return (
        <div className="Libros">
            <div className="Images" style={{ backgroundImage: `url(${img})` }} />
            <h1 className="h1LibroNombre">{title}</h1>
        </div>
    )
};

export default BookItem
