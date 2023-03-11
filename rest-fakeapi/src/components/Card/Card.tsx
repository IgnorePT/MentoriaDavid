
const Card = ({ product, onCardClick }) => {

    return (
        <div
            onClick={() => onCardClick ? onCardClick(product) : null}
            key={product.id}
            className="card"
        >
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>{product.price}€</h5>
        </div>
    )
}

export default Card
