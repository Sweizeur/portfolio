import React, { useState } from 'react';

// Composant de carte
const Card = ({ width, height, dark }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<div
			className={`w-full h-full rounded-[30px]  p-6 flex flex-col items-center transition-transform duration-300 hover:transform hover:scale-105
				${
				dark ? 'bg-[#8f8f8f] shadow-[20px_20px_60px_#787878,-20px_-20px_60px_#a3a3a3]' : 'bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
			}`}
			style={{ width, height }}
		>
			{/* Contenu de la carte (ajoute ici si besoin) */}
		</div>
	);
};

export default Card;
