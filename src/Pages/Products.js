import React from "react";
import ProductData from "../data/data.json";
import ProductCard from "../Components/ProductCard";
import CardColumns from 'react-bootstrap/CardColumns'

export default function Products() {
	return (
		<div>
			<h1>Mamma Mia!</h1>
			<h2>Questa è una pizza terribilmente deliziosa!</h2>
			<CardColumns>
				{ProductData.pizza.map((product, index) => {
					return <ProductCard id={index} />;
				})}
			</CardColumns>
		</div>
	);
}