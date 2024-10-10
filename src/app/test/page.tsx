'use client'; // Indiquer que ce composant est un composant client

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// Import des fichiers SVG
import ProfileIcon from '@/assets/header/ProfileIcon.svg';
import CvIcon from '@/assets/header/CvIcon.svg';
import GithubIcon from '@/assets/header/MdiGithub.svg';
import PhoneIcon from '@/assets/header/MaterialSymbolsCallOutline.svg';
import MailIcon from '@/assets/header/FluentMailRead24Regular.svg';

const Header = () => {
	const [isHovered, setIsHovered] = useState(false); // État pour gérer le survol

	return (
		<>
			<header className="bg-[#131214] border-[#0c0b0c] border-0 rounded-full w-min mx-auto px-3 py-2 flex items-center justify-between">
				<div className="flex items-center space-x-2">
					{/* Profile Icon Button */}
					<button
						data-sticky
						className="group cursor-none relative w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-b from-[#212023] to-[#19181a] transition duration-300 ease-in-out hover:bg-gradient-to-b"
					>
						<ProfileIcon className="text-[#7d7d7d] rounded-full p-2 w-9 h-9" />
						{/* Tooltip */}
						<div className="absolute flex flex-col items-center top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
							<div className="bg-[#e9e9e9] text-black text-sm py-1 px-2 rounded-md">
								Profile
							</div>
						</div>
					</button>

					{/* Mail Icon Button */}
					<Link
						href="mailto:contact@sweizeur.fr"
						data-sticky
						className="group cursor-none relative w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-b from-[#212023] to-[#19181a] transition duration-300 ease-in-out hover:bg-gradient-to-b"
					>
						<MailIcon className="text-[#7d7d7d] rounded-full p-2 w-9 h-9" />
						{/* Tooltip */}
						<div className="absolute flex flex-col items-center top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
							<div className="bg-[#e9e9e9] text-black text-sm py-1 px-2 rounded-md">
								Email
							</div>
						</div>
					</Link>

					{/* Phone Icon Button */}
					<Link
						href="tel:+330628525101"
						data-sticky
						className="group cursor-none relative w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-b from-[#212023] to-[#19181a] transition duration-300 ease-in-out hover:bg-gradient-to-b"
					>
						<PhoneIcon className="text-[#7d7d7d] rounded-full p-2 w-9 h-9" />
						{/* Tooltip */}
						<div className="absolute flex flex-col items-center top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
							<div className="bg-[#e9e9e9] text-black text-sm py-1 px-2 rounded-md">
								Phone
							</div>
						</div>
					</Link>

					{/* GitHub Icon Button */}
					<Link
						data-sticky
						href="https://github.com/Sweizeur"
						className="group cursor-none relative w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-b from-[#212023] to-[#19181a] transition duration-300 ease-in-out hover:bg-gradient-to-b"
					>
						<GithubIcon className="text-[#7d7d7d] rounded-full p-2 w-9 h-9" />
						{/* Tooltip */}
						<div className="absolute flex flex-col items-center top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
							<div className="bg-[#e9e9e9] text-black text-sm py-1 px-2 rounded-md">
								GitHub
							</div>
						</div>
					</Link>

					{/* CV Icon Button */}
					<Link
						data-sticky
						href="https://www.canva.com/design/DAGPPN4wBj4/7kVTpaLJAtKHTFQobDLHqA/view?utm_content=DAGPPN4wBj4&utm_campaign=designshare&utm_medium=embeds&utm_source=link&continue_in_browser=true"
						target="_blank"
						rel="noopener noreferrer"
						className="group cursor-none w-10 h-10 rounded-full flex justify-center items-center bg-gradient-to-b from-[#212023] to-[#19181a] relative text-center font-sans transition-all duration-300 ease-in-out group hover:bg-gradient-to-b hover:from-[#513094] hover:to-[#2e1c98]"
					>
						<div className="absolute inset-0 flex items-center justify-center overflow-hidden">
							{/* Icône CV */}
							<span className="absolute top-0 w-full h-full flex items-center justify-center transition-all duration-500 ease-in-out">
								<CvIcon className="text-[#7d7d7d] rounded-full p-2 w-9 h-9" />
							</span>
						</div>
						{/* Tooltip */}
						<div className="absolute flex flex-col items-center top-[calc(100%+8px)] left-1/2 transform -translate-x-1/2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-300 ease-in-out">
							<div className="bg-[#e9e9e9] text-black text-sm py-1 px-2 rounded-md">
								Cv
							</div>
						</div>
					</Link>
				</div>

				{/* Délimitation au centre */}
				<span className="text-[#252525] text-3xl px-3">|</span>

				{/* Bouton plus grand avec un texte et un SVG à droite */}
				<button
					className="cursor-none flex items-center bg-gradient-to-r from-violet-600 to-indigo-600 p-2 rounded-full text-white border-transparent transition duration-300 ease-in-out"
					onMouseEnter={() => setIsHovered(true)} // État survolé
					onMouseLeave={() => setIsHovered(false)} // État quitté
				>
					<span className="mr-2">Collaborer</span>
					{/* Container pour gérer l'animation */}
					<div data-sticky>
						<span className="relative flex items-center justify-center w-5 h-5">
							<span
								className={`absolute transition-all duration-300 transform ${
									isHovered
										? 'opacity-0 scale-0'
										: 'opacity-100 scale-100'
								}`}
							>
								👋
							</span>
							<svg
								className={`absolute transition-all duration-300 transform ${
									isHovered
										? 'opacity-100 scale-100'
										: 'opacity-0 scale-0'
								}`}
								stroke="currentColor"
								fill="currentColor"
								strokeWidth="0"
								viewBox="0 0 448 512"
								height="1em"
								width="1em"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
							</svg>
						</span>
					</div>
				</button>
			</header>
		</>
	);
};

const Profile = () => {
	return (
		<section className="flex w-full h-2/5"> {/* Change h-full à h-screen */}
			<div className="w-3/5 bg-[#131214] p-6 flex flex-col justify-center gap-6">
				<h1 className="text-sm text-white">Hey there!</h1>
				<h2 className="text-4xl leading-10 font-bold text-white w-3/5">Développeur backend en cybersécurité et full-stack, expert en Python et JavaScript.</h2>
				<p className="text-xs text-white">Available for freelance work</p>
			</div>
			<div className="w-2/5 flex justify-center items-center bg-[#919191]">
				<img
					src="/path/to/your/image.jpg" // Remplace par le chemin de ton image
					alt="Profile"
					className="max-w-full h-auto rounded-lg shadow-lg"
				/>
			</div>
		</section>
	);
};



export default function Home() {
	return (
		<div className="relative h-screen w-screen overflow-x-hidden">
			<Header />
			<Profile />
		</div>
	);
}
