import {
	FavoriteBorderOutlined,
	Search,
	SearchOutlined,
	ShoppingCartOutlined,
} from '@mui/icons-material';
import React from 'react';

const Product = ({ item }) => {
	const iconStyle =
		'h-[40px] w-[40px] rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#094af3] hover:text-white hover:scale[1.1] ease-in duration-100 cusron-pointer';

	return (
		<div className="flex flex-1 items-center justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative">
			<img src={item.src} alt="image_product" />
			<div className="flex items-center justify-center w-[100%] h-[100%] absolute opacity-0 hover:opacity-[0.75] hover:bg-[rgba(0,0,0,0.2)] ease-in duration-100">
				<div className={iconStyle}>
					<ShoppingCartOutlined />
				</div>
				<div className={iconStyle}>
					<FavoriteBorderOutlined />
				</div>
				<div className={iconStyle}>
					<SearchOutlined />
				</div>
			</div>
		</div>
	);
};

export default Product;
