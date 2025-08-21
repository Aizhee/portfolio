"use client";

import Image from 'next/image';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaRobot, FaPython, FaJs, FaJava, FaCode, FaHtml5, FaReact, FaSass, FaFlask, FaDatabase, FaBrain, FaGit } from 'react-icons/fa'; // Import icons
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

const awards = [
	{
		image: '/certificates/otis.png',
		description: '[OTis Philippines Inc.] Certificate of Participation - AppCon2024',
	},
];

const certificates = [
	{
		image: '/certificates/eda.png',
		description: '[IBM] Exploratory Data Analysis for Machine Learning - Jul 2025',
	},
];

const workExperience = [
	{
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAMAAAC6CgRnAAAAhFBMVEX////19fXy1NXacnjnqazFxcX78vLJAADMEiTrt7qlpaXNIC7LABvilJh/f3/WXmWxsbH57O3svsDTTlbVWWDvyMpXV1fceH7MFyf35eYAAADLCR/koKPnq67KAA3KABPRO0X74OEIDQ12dnbOKzfL0NDgio9NTU2YmJjp6ensvL7g4OB4YY9/AAAAy0lEQVR4AcTPRWLDMBBA0W8cq6MwmbGc+9+vVlFtk3WemDXcRIATRjH/JQCpZGL47w4IRe2C/5YAK8lS/kvWABu2u/2n3YFPwRGck80/SQGfSnByW+kst1bw1sK6rg9xU8+L+a6Jjb92aisxEHaqVY2vpM+1HcCd6w54ghFRFSDK5jbFk0xDp/kOyFX1Ht/00FitHiEV1eyE430lU2vgYFVtg2e9xn2lgIX7SojnCeQj3F3rWs/zC2ljzCtgHH6cE64Jri9xfhs9Ux8AMMUM0JgPEHkAAAAASUVORK5CYII=',
		title: 'Data Science Intern',
		company: 'Open iT Asia Inc. - Philippines Branch',
		duration: 'Jun 2025 - Aug 2025',
	},
];

const education = [
	{
		image: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAw1BMVEVHcEwILBYFMRIEMRcANRQAAAAAFAAAKwA4V0BacWUJMRkKNRsAEgBrfXHL0s7z9vft8O7l6ebT2tbEzMcLNhsLOh1DXE7c4t+dqqGnsqu/xb62wLwAJACBk4ezurOTpJr///8VUh0CTSsAT1ABTkC6m0rmvEdTay1lfI/oj0mKizIgTYg3VI91bXJMXoV4hHHPTkntTFPiS06Mm5dfZ3/OuGSKSkCYg22xmIalTUfdoUTDc3LqY1dKZJbjckyDkLDjiYvx8hIoAAAAFXRSTlMAHZRc/xW0////R3zW/////////8j9zgW+AAABvUlEQVR4AYxSBWLjMAArc41rYphTl8nhlPH/rzp3xeMpYJBRUu4d+UIhn/sLiiWL4h+pcqVaq9dr1Ur5F6LRLLTaACKIMaHtVqHZeHEfnarjIsbbAkiGAXaqnY/nvM6nQsDjgFIBXO51ofrsPOY2q0pLzoCrLQh1SRupavNOFhxNpYf1HS4FGjuFO9lytetBrTVkStoSka7Erfsd2m4d2HlYlXq9/qBra4TT9u1GFQBEV9WdwbA/Gk96w+GUSo+BypcuVVQD/eFw2O/XZrP5cGAxdD1ctVrlSzWX8IXxAz8cCzmO4ihOEpLiWimfK5TqOOXGZNlosYRwGSWrJI4pJfVS4UoiJQPj+4FZb9ajeLvaxpFIwZW0y1o9+dRODcxol8SJk+w9EBK77PVAbhfVlTFBli2Sw+yQxHxNqT3Q7SqCpepo/PXaJLPdLI7YRipauYuAGMmCL/J0Gp8OzHep277b2kKMgcUxyILFdeYhElCR1lN4SBWYno9mYW9x2QMYoqfw1jKCNUwtfbnsN1b6m2VPszVKtSbSA1pzop9m32OCtaaukEho/R6TZ8BcjTAk4Bmw70Tzx3AkarzZAQD+YDge/dnTMAAAAABJRU5ErkJggg==',
		degree: 'Bachelor of Science in Computer Engineering',
		school: 'Southern Luzon State University - Main Campus',
		year: '2022-2026',
	},
	{
		image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3LTU3Nzc3Nys3Nzc3Nzc3Nzc3Nzc3N//AABEIABwAHAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAGBwIDBQT/xAAqEAACAgEDAgUDBQAAAAAAAAABAgMEEQUSIQAxBhMUImEjQVFCYnGC8P/EABUBAQEAAAAAAAAAAAAAAAAAAAMC/8QAHhEAAgICAgMAAAAAAAAAAAAAAQIAERIhUWEDIkH/2gAMAwEAAhEDEQA/AGprmsWYLq6Zp0GbDwGV7DcpXXkKdvd2JBwvGdp5AHQ89ar50Va9qty1dhOQGszySKxGeUgwFPOewOP56hSs+fSuX6sjGS7qEmyWSQblJn9OmBngKoyMjAPznod8KDS/D2pNPd1KukjZLo0ok+oHdWzycHIRg3fBPfJPT4lUbEEkcCyTBLbFwvjsX9Lis3dLsvqUZcBqlmwze4ckKze6NsY9r8E47cnoup2obtWOzWcPFIuVI/3f46E5dT0y5LUs1bUEkkzpXdQ2DNG3C8EgnaxVgR293IyeuXS9br+H7GpQmrZlWzaFpfToWRd8UeQPxlgzf2z9+jXLyLZUg9y7A+6k71JoLmo6ZbVIIrUzWdPkiUHfnDsNuR70l+oQe4JI7HGXp1r00bw3tJCMZ5HDCAyxMrsWBVwue5xtOGGBx0wtR02lqcSR360cyxuJIyw5jcdmU91PyOel94uuT+HaJljf10nqRXDXFBIQvn9G3Jz9zk/nPSo2XrJYVuXmeu8yT2D6CpXXzXMkHllmwQHZD7lQZJ5wcgYGASSvwzUkjqT2py269MLCxuuDEmxEVT+7agJ+SeqtL8O0VYW5t1jzFRlhlVPLjIwcgBRk9uWJIxxjrf6N2B0JSrzP/9k=',
		degree: 'Senior High School -  Science Technology Engineering and Mathematics (STEM)',
		school: 'Luis Palad Integrated High School',
		year: '2022',
	},
];

const skills = [
	{ icon: <FaPython />, name: 'Python' },
	{ icon: <FaJs />, name: 'JavaScript' },
	{ icon: <FaJava />, name: 'Java' },
	{ icon: <FaCode />, name: 'Assembly' },
	{ icon: <FaCode />, name: 'Kotlin' },
	{ icon: <FaCode />, name: 'Rust' },
	{ icon: <FaCode />, name: 'C++' },
	{ icon: <FaJs />, name: 'TypeScript' }, 
	{ icon: <FaHtml5 />, name: 'HTML/CSS' },
	{ icon: <FaReact />, name: 'React' },
	{ icon: <FaSass />, name: 'Tailwind CSS' }, // FaSass for Tailwind (closest available)
	{ icon: <FaCode />, name: 'Flutter' },
	{ icon: <FaCode />, name: 'GDscript' },
	{ icon: <FaFlask />, name: 'Flask' },
	{ icon: <FaDatabase />, name: 'SQL' },
	{ icon: <FaGit />, name: 'Git' },
	{ icon: <FaCode />, name: 'ICP Blockchain' },
	{ icon: <FaCode />, name: 'Docker' },
	{ icon: <FaBrain />, name: 'Scikit-learn' },
	{ icon: <FaRobot />, name: 'LangChain' },
	{ icon: <FaCode />, name: 'Torch' },
	{ icon: <FaCode />, name: 'OpenCV' },
	{ icon: <FaCode />, name: 'TensorFlow' },
	{ icon: <FaCode />, name: 'Keras' },
	{ icon: <FaCode />, name: 'Plotly' },
];

export default function Home() {
	const { theme, setTheme } = useTheme();
	const [animatedText, setAnimatedText] = useState('');


	// Toggle dark mode and persist to localStorage
	const toggleDarkMode = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		try {
			// persist canonical theme key only to avoid legacy key conflicts
			localStorage.setItem('theme', next);
		} catch {}
		document.documentElement.classList.add('transition-colors', 'duration-500');
	};

	// Animate header text
	useEffect(() => {
		const fullText = 'Aizhee';
		let index = 0;
		const interval = setInterval(() => {
			if (index < fullText.length) {
				setAnimatedText(fullText.slice(0, index + 1)); // Ensure no undefined
				index++;
			} else {
				clearInterval(interval);
			}
		}, 100); // Adjust typing speed here

		return () => {
			clearInterval(interval);
			setAnimatedText(fullText); // Ensure the text is fully set on cleanup
		};
	}, []);

	return (
		<div>
			<main className="relative min-h-screen px-6 py-12 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden flex flex-col items-center justify-center">
				<div className="z-10 relative w-full max-w-6xl px-4">
					{/* Header */}
					<header className="relative z-10 flex justify-between items-center mb-12">
						<h1 className="text-2xl sm:text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							<Link href="/" className="hover:underline">
								{animatedText}
							</Link>
							<span
								className="blinking-cursor font-mono text-emerald-500 dark:text-emerald-400"
								aria-hidden="false"
							>
								|
							</span>
						</h1>
						<button
							onClick={toggleDarkMode}
							className="flex items-center gap-2 bg-white/80 dark:bg-gray-800/80 px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 shadow-lg backdrop-blur-md hover:bg-emerald-100 dark:hover:bg-emerald-900/50 hover:scale-105 transition-all duration-300"
						>
							{/* Keep DOM identical by rendering both icons/labels and using `dark:` to control visibility */}
							<span className="text-lg">
								<span className="hidden dark:inline text-yellow-500"><FaSun /></span>
								<span className="inline dark:hidden text-blue-500"><FaMoon /></span>
							</span>
							<span className="text-sm font-medium hidden sm:inline">
								<span className="hidden dark:inline">Light Mode</span>
								<span className="inline dark:hidden">Dark Mode</span>
							</span>
						</button>
					</header>

					{/* Profile Card */}
					<div className="flex flex-col items-center bg-white/70 dark:bg-gray-800/70 border border-white/30 dark:border-gray-700/50 p-6 sm:p-10 rounded-2xl shadow-2xl w-full">
						<Image
							src="https://avatars.githubusercontent.com/u/108914551?v=4"
							alt="Aizhar Jamilano"
							width={128}
							height={128}
							className="rounded-full mb-4 border-4 border-white"
						/>
						<h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent inline-flex items-center">
							<span
								className={`animate-reverse-typing text-gray-900 dark:text-gray-100`}
								style={{
									display: 'inline-block',
									whiteSpace: 'nowrap',
									overflow: 'hidden',
									width: 'auto',
								}}
							>
								Hi, I&apos;m{' '}
							</span>
							<span style={{ display: 'inline-block', marginLeft: '0.5rem' }}>Aizhar Jamilano</span>
						</h1>
						<a
							href="mailto:aizharjamilano@gmail.com"
							className="text-gray-700 dark:text-gray-300 mt-2 text-center no-underline hover:no-underline focus:no-underline"
							style={{ color: 'inherit' }}
						>
							aizharjamilano@gmail.com
						</a>
						<div className="flex flex-wrap gap-2 mt-4 justify-center">
							<a
								href="/cv/Aizhar-Jamilano-Resume.pdf"
								download
								className="px-3 py-1 bg-mint-500 text-gray-900 dark:text-gray-100 font-medium rounded-full shadow-md hover:bg-mint-400 hover:scale-105 transition-all duration-300 text-sm"
							>
								Download CV
							</a>
							<a
								href="/art"
								className="px-3 py-1 bg-mint-500 text-gray-900 dark:text-gray-100 font-medium rounded-full shadow-md hover:bg-mint-400 hover:scale-105 transition-all duration-300 text-sm"
							>
								Art
							</a>
							<a
								href="/portfolio"
								className="px-3 py-1 bg-mint-500 text-gray-900 dark:text-gray-100 font-medium rounded-full shadow-md hover:bg-mint-400 hover:scale-105 transition-all duration-300 text-sm"
							>
								Portfolio
							</a>
						</div>
						<div className="flex flex-wrap gap-4 mt-4 justify-center">
							<a
								href="https://github.com/Aizhee"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaGithub className="text-2xl text-gray-700 dark:text-gray-300 hover:text-mint-500 dark:hover:text-emerald-400 transition-colors duration-300" />
							</a>
							<a
								href="https://linkedin.com/in/aizharjamilano"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaLinkedin className="text-2xl text-gray-700 dark:text-gray-300 hover:text-mint-500 dark:hover:text-emerald-400 transition-colors duration-300" />
							</a>
							<a
								href="https://huggingface.co/Aizhee"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FaRobot className="text-2xl text-gray-700 dark:text-gray-300 hover:text-mint-500 dark:hover:text-emerald-400 transition-colors duration-300" />
							</a>
						</div>
					</div>

					{/* About Me Section */}
					<section className="mt-12 max-w-6xl text-center px-4 sm:px-6">
						<h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							About Me
						</h2>
						<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
							I am a passionate computer engineer with a strong foundation in web development, data science, and IoT. From designing creative layouts and visual scopes for my school organization to building a complete machine learning pipeline from scratch during my internship, I enjoy working across the full spectrum of development. I specialize in creating full-stack applications that not only deliver smooth user experiences but also integrate powerful, data-driven features. My work often involves transforming complex data into actionable insights through machine learning, analytics, and intuitive visualizations. With a strong eye for both design and functionality, I strive to build systems that are as impactful as they are beautifully crafted.
						</p>
					</section>

					{/* Education Section */}
					<section className="mt-12 max-w-6xl text-center px-4 sm:px-6">
						<h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							Education
						</h2>
						{education.map((edu, index) => (
							<div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
								<Image
									src={edu.image}
									alt="Education Logo"
									width={40}
									height={40}
									className="mr-4 rounded-full ml-[5%]"
								/>
								<div className="text-left mr-[5%]">
									<p className="text-gray-900 dark:text-gray-100 font-semibold">
										{edu.degree}
									</p>
									<p className="text-gray-700 dark:text-gray-300">
										{edu.school}
									</p>
									<p className="text-gray-500 dark:text-gray-400">
										{edu.year}
									</p>
								</div>
							</div>
						))}
					</section>

					{/* Work Experience Section */}
					<section className="mt-12 max-w-6xl text-center px-4 sm:px-6">
						<h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							Work Experience
						</h2>
						{workExperience.map((work, index) => (
							<div key={index} className="flex items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
								<Image
									src={work.image}
									alt="Work Logo"
									width={40}
									height={40}
									className="mr-4 rounded-full ml-[5%]"
								/>
								<div className="text-left mr-[5%]">
									<p className="text-gray-900 dark:text-gray-100 font-semibold">
										{work.title}
									</p>
									<p className="text-gray-700 dark:text-gray-300">
										{work.company}
									</p>
									<p className="text-gray-500 dark:text-gray-400">
										{work.duration}
									</p>
								</div>
							</div>
						))}
					</section>

					{/* Awards Section */}
					<section className="mt-12 max-w-6xl text-center px-4 sm:px-6">
						<h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							Awards
						</h2>
						{awards.map((award, index) => (
							// use `group` so hovering the card expands the image area
							<div key={index} className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
								<div className="relative w-full max-h-40 md:max-h-64 overflow-hidden rounded-lg mb-4 transition-[max-height] duration-500 group-hover:max-h-[600px]">
									<Image
										src={award.image}
										alt="Award Image"
										width={1000}
										height={200}
										className="rounded-lg object-cover group-hover:object-contain w-full h-full"
										style={{ display: 'block' }}
									/>
								</div>
								<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
									{award.description}
								</p>
							</div>
						))}
					</section>

					{/* Certificates Section */}
					<section className="mt-12 max-w-6xl text-center px-4 sm:px-6">
						<h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							Certifications
						</h2>
						{certificates.map((certificate, index) => (
							<div key={index} className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md mb-4">
								<div className="relative w-full max-h-40 md:max-h-64 overflow-hidden rounded-lg mb-4 transition-[max-height] duration-500 group-hover:max-h-[600px]">
									<Image
										src={certificate.image}
										alt="Certificate Image"
										width={1000}
										height={200}
										className="rounded-lg object-cover group-hover:object-contain w-full h-full"
										style={{ display: 'block' }}
									/>
								</div>
								<p className="text-gray-700 dark:text-gray-300 leading-relaxed">
									{certificate.description}
								</p>
							</div>
						))}
					</section>

					{/* Skills Section */}
					<section className="mt-12 max-w-6xl text-center px-4 sm:px-6">
						<h2 className="text-lg sm:text-xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							Skills & Tech Stack
						</h2>
						<div className="text-left flex flex-wrap gap-2">
							{/* Programming Languages */}
							{skills.map((skill, index) => (
								<span
									key={index}
									className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 font-medium rounded-full shadow-md text-sm flex items-center gap-2"
								>
									{skill.icon} {skill.name}
								</span>
							))}
						</div>
					</section>
				</div>

				{/* Animated Gradient Blobs */}
				<div className="absolute inset-0 z-0">
					{/* Primary blob */}
					<div className="absolute top-20 left-20 w-[500px] h-[400px] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 rounded-full opacity-30 dark:opacity-20 blur-3xl animate-lava dynamic-blob"></div>

					{/* Secondary blob */}
					<div
						className="absolute top-40 right-20 w-[450px] h-[350px] bg-gradient-to-br from-mint-400 via-green-400 to-emerald-400 rounded-full opacity-25 dark:opacity-15 blur-2xl animate-lava dynamic-blob"
						style={{ animationDuration: '10s' }}
					></div>

					{/* Tertiary blob */}
					<div
						className="absolute bottom-20 left-1/3 w-[400px] h-[300px] bg-gradient-to-br from-cyan-300 via-teal-300 to-blue-400 rounded-full opacity-20 dark:opacity-10 blur-3xl animate-lava dynamic-blob"
						style={{ animationDuration: '12s' }}
					></div>

					{/* Floating blob */}
					<div
						className="absolute bottom-40 right-1/4 w-[350px] h-[280px] bg-gradient-to-br from-green-300 via-emerald-300 to-teal-400 rounded-full opacity-25 dark:opacity-15 blur-2xl animate-lava dynamic-blob"
						style={{ animationDuration: '9s' }}
					></div>

					{/* Moving blob */}
					<div
						className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[250px] bg-gradient-to-br from-teal-400 via-cyan-400 to-blue-400 rounded-full opacity-15 dark:opacity-8 blur-3xl animate-lava dynamic-blob"
						style={{ animationDuration: '15s' }}
					></div>
				</div>

				<style jsx>{`
					@keyframes lavaLamp {
						0% {
							transform: translate(0, 0) scale(1);
						}
						25% {
							transform: translate(20px, -30px) scale(1.1);
						}
						50% {
							transform: translate(-20px, 30px) scale(0.9);
						}
						75% {
							transform: translate(-30px, -20px) scale(1.05);
						}
						100% {
							transform: translate(0, 0) scale(1);
						}
					}

					.animate-lava {
						animation: lavaLamp 8s ease-in-out infinite;
					}

					.blinking-cursor {
						display: inline-block;
						width: 1ch;
						animation: blink 1s step-end infinite;
					}

					@keyframes blink {
						50% {
							opacity: 0;
						}
					}

					@keyframes fadeIn {
						0% {
							opacity: 0;
						}
						100% {
							opacity: 1;
						}
					}

					.animate-fade-in {
						animation: fadeIn 1s ease-out forwards;
					}

					@keyframes reverseTyping {
						0% {
							width: 0;
						}
						100% {
							width: 5.3ch;
						}
					}

					.animate-reverse-typing {
						display: inline-block;
						overflow: hidden;
						white-space: nowrap;
						animation: reverseTyping 0.3s steps(20, end) forwards;
					}
				`}</style>
			</main>
		</div>
	);
}