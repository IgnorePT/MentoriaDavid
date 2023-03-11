import Card from "../Card/Card";

const ProductCardSlider = ({products, onCardClick}) => {

    return (
        <div className="cards-slider">
            {products.map((product) => {
                return (
                    <Card onCardClick={onCardClick} product={product} />
                );
            })}
        </div>
    )
}

export default ProductCardSlider
