import React from "react";

const Nav = () => {
	return (
		<div className='w-[100%] top-0 h-[10vh] bg-[#141C27] shadow-md'>
			<div className="flex items-center justify-between w-[92%] mx-auto h-[100%]">
				<h1 className="flex-[0.8] cursor-pointer text-[25px] text-white font-bold">Portfolio.</h1>
				<div className="nav-link">Home</div>
				<div className="nav-link">About</div>
				<div className="nav-link">Services</div>
				<div className="nav-link">Projects</div>
				<div className="nav-link">Blog</div>
				<div className="nav-link">Contact</div>
			</div>
		</div>
	);
};

export default Nav;
