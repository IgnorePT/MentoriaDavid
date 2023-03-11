import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import ProductCardSlider from "./components/ProductCardSlider/ProductCardSlider";
import ProductModal from "./components/ProductModal/ProductModal";
import { mapProductData } from "./helpers/products";

const App = () => {
	const apiUrl = "https://fakestoreapi.com/products";

	//Aqui vai a Logica
	//Estado para a listagem de produtos (API)
	const [products, setProducts] = useState([]);
	const [products2, setProducts2] = useState([]);


	//Estado para mostrar ou esconder o Modal
	const [showCardModal, setShowCardModal] = useState(false);

	//Estado para o produto selecionado
	const [selectedProduct, setSelectedProduct] = useState(null);

	useEffect(() => {
		//fazer fetch a api
		//API 1
		fetch(apiUrl)
			.then(res => res.json())
			.then(json => {
				setProducts(mapProductData(json, "default"));
			})

		//API 2
		fetch("https://api.escuelajs.co/api/v1/products")
			.then(res => res.json())
			.then(json => {
				setProducts2(mapProductData(json, "new"));
			})
	}, []);

	const handleCardClick = (product: any) => {
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

			{/* Dados de API 1 */}
			<ProductCardSlider products={products} onCardClick={handleCardClick} />

			{/* Dados de API 2 */}
			<ProductCardSlider products={products2} onCardClick={handleCardClick} />

			{/* Modal de Produto */}
			{showCardModal && (
				<ProductModal closeModal={closeModal} product={selectedProduct} />
			)}
		</div>
	);
};

export default App;
