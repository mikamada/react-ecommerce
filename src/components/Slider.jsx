import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import '../components/slider.css';

import { ApiSlides } from '../componentsApi/sliderApi';

const Slider = () => {
	// Hooks
	const [slides] = useState(ApiSlides);
	const [acticeSlide, setActiveSlide] = useState(0);

	// Style
	const arrowStyle =
		'leftarrow rounded-full bg-grey shadow-sm hover:cursor-pointer';

	const nextSlide = () => {
		if (acticeSlide === slides.length - 1) {
			setActiveSlide(0);
		} else {
			setActiveSlide(acticeSlide + 1);
		}
	};

	const prevSlide = () => {
		if (acticeSlide === 0) {
			setActiveSlide(slides.length - 1);
		} else {
			setActiveSlide(acticeSlide - 1);
		}
	};

	useEffect(() => {
		console.log('active:', acticeSlide);
	}, [acticeSlide]);

	return (
		<div className="parentDiv h-[540px] bg-white flex items-center justify-between">
			{/* leftarrow div */}
			<div className={arrowStyle} onClick={prevSlide}>
				<ArrowLeftOutlined
					style={{
						fontSize: '50px',
					}}
				/>
			</div>
			{/* slide div */}
			{slides.map((slide, index) => {
				if (index === acticeSlide) {
					return (
						<div
							className={
								`wrapper flex w-[100% h-[500px] justify-center items-center shadow-2xl rounded-lg border-[#c0c0c0] border-10px overflow-hidden relative` +
								slide.background
							}
						>
							<div className="slide flex items-center justify-center h-[100%]">
								<div className="forImage flex flex-1 justify-center items-center h-[100%]">
									<img className="h-[100%] object-cover" src={slide.src} />
								</div>
								<div className="des flex flex-col flex-1 place-items-start justify-center ml-12">
									<h2 className="text-[50px]">{slide.content.h2}</h2>
									<p className="text-[30px]">{slide.content.p}</p>
									<button className="btn">Shop Now</button>
								</div>
							</div>
						</div>
					);
				}
			})}
			{/* rightarrow div */}
			<div className={arrowStyle} onClick={nextSlide}>
				<ArrowRightOutlined
					style={{
						fontSize: '50px',
					}}
				/>
			</div>
		</div>
	);
};

export default Slider;
