import React from 'react';

const Category = ({ item }) => {
	return (
		<div className="flex-1 m-2 shadow-lg rounded-md overflow-hidden relative">
			<img src={item.src} alt="category_image" className="w-[100%]" />
			<div className="flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col text-[30px]">
				<h2 className="text-white font-medium">{item.title}</h2>
				<button className="btn text-base">See more</button>
			</div>
		</div>
	);
};

export default Category;
