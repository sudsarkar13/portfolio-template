import React from "react";

const Nav = () => {
	return (
		<div className='w-[100%] top-0 h-[9vh] bg-[#141C27] shadow-md'>
			<div className='flex items-center justify-between w-[92%] mx-auto h-[100%]'>
				<h1 className='flex-[0.8] cursor-pointer text-[25px] text-white font-bold'>
					Port<span className="text-yellow-400">folio.</span>
				</h1>
<div className='nav-link uppercase'>Home</div>
				<div className='nav-link uppercase'>About</div>
				<div className='nav-link uppercase'>Services</div>
				<div className='nav-link uppercase'>Projects</div>
				<div className='nav-link uppercase'>Blog</div>
				<div className='nav-link uppercase'>Contact</div>
			</div>
		</div>
	);
};

export default Nav;
