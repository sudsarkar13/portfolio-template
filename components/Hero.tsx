/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Particle from "./Particle";
import TextEffect from "./TextEffect";
import Image from "next/image";
// import Error404 from "./errors/Error404";
// import Error503 from "./errors/Error503";

const Hero = () => {
	return (
		<div className="h-[90vh] bg-[url('/images/banner.jpg')] bg-cover bg-center ">
			<Particle />
			<div className='w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
				<div>
					<h1 className='text-[35px] md:text-[50px] text-white font-extrabold'>
						HI, I'M <span className='text-yellow-400'>SUDEEPTA!</span>
					</h1>
					<TextEffect />
				</div>
				<div className="w-[470px] hidden bg-yellow-500 relative lg:flex items-center rounded-full h-[500px]">
					<Image src='/images/Sudeepta.png' alt='Sudeepta' layout="fill" className="object-cover rounded-full"/>
				</div>
			</div>
		</div>
	);
};

export default Hero;
