import PhoneIcon from '../assets/phone.svg';
import MailIcon from '../assets/mail.svg';
import PythonIcon from '../assets/soft/python.svg';
import React, { useEffect, useRef } from 'react';

const Carousel = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const container = containerRef.current;
		if (container) {
			let currentIndex = 0;
			let imageWidth = container.children[0].clientWidth;
			
			const updateCarousel = () => {
				const totalImages = container.children.length;
				// Faire défiler les images
				currentIndex++;
				if (currentIndex >= totalImages / 2) {
					// Recommencer à zéro sans animation quand les premières images sont doublées
					currentIndex = 0;
					container.style.transition = 'none';
					container.style.transform = `translateX(0)`;

					// Supprimer les anciennes images
					const toRemove = Array.from(container.children).slice(0, totalImages / 2);
					toRemove.forEach(image => container.removeChild(image));
				} else {
					container.style.transition = 'transform 0.5s linear';
					container.style.transform = `translateX(-${
						currentIndex * imageWidth
					}px)`;
				}

				// Si on atteint la fin des images, dupliquer le premier lot
				if (currentIndex === 0) {
					const firstBatch = Array.from(container.children).slice(0, totalImages / 2);
					firstBatch.forEach(image => {
						const clone = image.cloneNode(true);
						container.appendChild(clone);
					});
				}
			};

			// Déclenchement du scroll toutes les 200ms
			const interval = setInterval(updateCarousel, 200);

			// Nettoyer l'intervalle lorsque le composant est démonté
			return () => clearInterval(interval);
		}
	}, []);

	return (
		<div className="w-full overflow-hidden">
			<div
				ref={containerRef}
				className="flex"
				style={{ whiteSpace: 'nowrap' }}
			>
				<PythonIcon alt="Icon 1" className="w-16 h-16" />
				<PythonIcon alt="Icon 2" className="w-16 h-16" />
				<PythonIcon alt="Icon 3" className="w-16 h-16" />
				<PythonIcon alt="Icon 4" className="w-16 h-16" />
				<PythonIcon alt="Icon 5" className="w-16 h-16" />
				<PythonIcon alt="Icon 6" className="w-16 h-16" />
				<PythonIcon alt="Icon 7" className="w-16 h-16" />
				<PythonIcon alt="Icon 8" className="w-16 h-16" />
			</div>
		</div>
	);
};

const ProfileCard = ({ width, height, dark }) => {
	return (
		<div
			className={`w-full h-full rounded-[30px] p-6 flex flex-col items-center transition-transform duration-300 hover:transform hover:scale-105
                ${
					dark
						? 'bg-[#8f8f8f] shadow-[20px_20px_60px_#787878,-20px_-20px_60px_#a3a3a3]'
						: 'bg-[#e0e0e0] shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]'
				}`}
			style={{ width, height }}
		>
			{/* Nom et titre */}
			<h2 className="text-xl text-gray-600 font-semibold mb-1">
				Ong Anthony
			</h2>
			<p className="text-gray-500 mb-4">Développeur Fullstack</p>

			{/* Actions */}
			<div className="flex space-x-4 mb-6 justify-center sm:justify-start">
				<a
					href="tel:+330628525101"
					className="relative p-2 bg-[#e8e8e8] rounded-full shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff] transition duration-300 flex hover:transform hover:scale-110"
				>
					<PhoneIcon className="h-6 w-6 sm:h-8 sm:w-8" />
				</a>
				<a
					href="mailto:contact@sweizeur.fr"
					className="relative p-2 bg-[#e8e8e8] rounded-full shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff] transition duration-300 flex hover:transform hover:scale-110"
				>
					<MailIcon className="h-6 w-6 sm:h-8 sm:w-8" />
				</a>
				<a
					href="mailto:contact@sweizeur.fr"
					className="relative p-2 bg-[#e8e8e8] rounded-full shadow-[3px_3px_5px_#c5c5c5,-3px_-3px_5px_#ffffff] transition duration-300 flex hover:transform hover:scale-110"
				>
					<MailIcon className="h-6 w-6 sm:h-8 sm:w-8" />
				</a>
			</div>

			{/* Compétences */}
			<p className="text-gray-500 mb-2 text-left w-full">Skills</p>
			<div className="grid grid-cols-2 gap-3 mb-6">
				<span className="bg-purple-100 p-2 rounded-lg text-center shadow-md text-gray-600">
					UI Design
				</span>
				<span className="bg-purple-100 p-2 rounded-lg text-center shadow-md text-gray-600">
					Branding
				</span>
				<span className="bg-purple-100 p-2 rounded-lg text-center shadow-md text-gray-600">
					Mobile App
				</span>
				<span className="bg-purple-100 p-2 rounded-lg text-center shadow-md text-gray-600">
					Illustrations
				</span>
				<span className="bg-purple-100 p-2 rounded-lg text-center shadow-md text-gray-600">
					Graphic Design
				</span>
				<span className="bg-purple-100 p-2 rounded-lg text-center shadow-md text-gray-600">
					UX
				</span>
			</div>

			{/* Logiciels */}
			<Carousel />
		</div>
	);
};

export default ProfileCard;
