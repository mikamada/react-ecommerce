import React from 'react';
import { ApiTopPropduct } from '../componentsApi/topProductApi';
import Product from './Product';

const Products = () => {
	return (
		<div className="flex flex-wrap p-5 justify-center text-center">
			{ApiTopPropduct.map((product, index) => {
				return <Product item={product} key={index} />;
			})}
		</div>
	);
};

export default Products;
