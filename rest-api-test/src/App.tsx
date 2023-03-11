import { useEffect, useState } from "react";
import "./App.css";

const apiResponse = [
	{
		id: 1,
		name: "Card 1",
		image: "",
		description: "Lalalala",
		price: 200,
	},
	{
		id: 2,
		name: "Card 2",
		image: "",
		description: "Lalalala",
		price: 200,
	},
	{
		id: 3,
		name: "Card 3",
		image: "",
		description: "Lalalala",
		price: 200,
	},
	{
		id: 4,
		name: "Card 4",
		image: "",
		description: "Lalalala",
		price: 200,
	},
];

const App = () => {
	//Aqui vai a Logica
  //Estado para a listagem de produtos (API)
	const [products, setProducts] = useState([]);

  //Estado para mostrar ou esconder o Modal
	const [showCardModal, setShowCardModal] = useState(false);

  //Estado para o produto selecionado
  const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		//fazer fetch a api
		setProducts(apiResponse);
	}, []);

	const productExample = {
		id: 12,
		name: "Card Example",
		image: "",
		description: "Lalalala",
		price: 200,
	};

	// const products2 = products.map((product) => {
	// 	return { ...product, price: product.price * 1.23 };
	// });

	const handleCardClick = (product) => {
    //Passamos o produto para o selecionado
    setSelectedProduct(product)
		// Passe abra o modal e passe essa informação para o modal
		setShowCardModal(true);
	};

	const closeModal = () => {
		setShowCardModal(false);
	};

	// Return -> O que vai ser renderizado
	return (
		<div className="App">
			<h1>Header</h1>

			<div className="main-slider">Slider</div>

			<div className="cards-slider">
				{/* Listagem de produtos == Array */}
				{products.map((product) => {
					return (
						<div
							onClick={() => handleCardClick(product)}
							key={product.id}
							className="card"
						>
							{product.name}
						</div>
					);
				})}
				{/* Dados de produto em objeto */}
				{/* <div className="card">{productExample.name}</div> */}
			</div>

			{showCardModal && (
				<div className="modal overlay">
					<div className="modal-content">
						<span className="close-modal" onClick={closeModal}>
							fechar
						</span>
						Informação do produto
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <h4>{selectedProduct.price}</h4>
					</div>
				</div>
			)}
		</div>
	);
};

export default App;