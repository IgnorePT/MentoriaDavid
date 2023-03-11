
const ProductModal = ({ product, closeModal }) => {
    return (<div className="modal overlay">
        <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
                fechar
            </span>
            Informação do produto
            <img width={200} src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h4>{product.price}</h4>
        </div>
    </div>)
}

export default ProductModal;