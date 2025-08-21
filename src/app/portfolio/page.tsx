'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { FaSun, FaMoon } from 'react-icons/fa'; 
import Link from 'next/link';

const projects = [
	{
		title: 'Buoy',
		description: 'An AI-powered phishing website detection app.',
		image: '/projects/buoy.png',
		link: 'https://buoy.theturingmachines.asia/',
		technologies: ['AI/ML', 'Web', 'Python', 'Flutter'],
		category: 'Applications',
	},
	{
		title: 'Buoy-Agent',
		description: 'Decentralized AI-powered cybersecurity agent for real-time phishing detection.',
		image: '/projects/buoyagent.png',
		link: 'https://github.com/SLSU-Turing-Machines/Buoy-Agent',
		technologies: ['AI/ML', 'Python', 'ICP'],
		category: 'Machine Learning',
	},
	{
		title: 'Start App',
		description: 'PSCX Entry.',
		image: '/projects/strtpp.png',
		link: '',
		technologies: ['AI/ML', 'Web', 'React'],
		category: 'Applications',
	},
	{
		title: 'GFLH',
		description: 'Student learning app for BSCpE GF.',
		image: '/projects/gflh.png',
		link: 'https://sites.google.com/view/gflh/android-app?authuser=0',
		technologies: ['Android', 'Java', 'Kotlin'],
		category: 'Applications',
	},
	{
		title: 'CleanVerb VST',
		description: 'A clean, simple reverb VST plugin.',
		image: 'https://github.com/Aizhee/CleanVerb/raw/main/GitImages/CleanVerb.png',
		link: 'https://ko-fi.com/s/2fc73dd2f4',
		technologies: ['C++', 'VST', 'JUCE Framework'],
		category: 'Applications',
	},
    {
        title: 'Drunk Divers',
        description: 'An Iron-Lung inspired Horror game made for my Software Development class.',
        image: '/projects/drunkdivers.png',
        link: 'https://github.com/Aizhee/DrunkDivers',
        technologies: ['Game Development', 'Godot'],
        category: 'Applications',
    },
	{
		title: 'Quezon Map Solar Feasibility',
		description: 'GIS-based solar feasibility analysis.',
		image: '/projects/gis.png',
		link: 'https://aizhee.github.io/Cognate-Lab-Finals/quezon_map_solar_feasability',
		technologies: ['GIS', 'Web', 'Python', 'AI/ML'],
		category: 'Machine Learning',
	},
    {
        title: 'Word2Vec + Transformer Pipeline',
        description: 'A complete machine learning pipeline using Word2Vec and Transformer model with built-in umap projection and inference done during my internship. (this project is private)',
        image: '/projects/feature.png',
        link: 'https://github.com/Open-iT-Data-Science-Interns/Feature2Vec',
        technologies: ['Web', 'AI/ML', 'Torch', 'Python'],
        category: 'Machine Learning',
    },
	{
		title: 'Magic 8-Ball',
		description: 'Fun random 8-ball messages in VSCode.',
		image: 'https://camo.githubusercontent.com/b8b686a6ba8db2987ec83f604bc5d1b3c5c9088341cd62b792a48e7c36e26a52/68747470733a2f2f73392e67696679752e636f6d2f696d616765732f53564732612e706e67',
		link: 'https://github.com/Aizhee/Magic-8-Ball-Extension',
		technologies: ['TypeScript'],
		category: 'VSCode Extensions',
	},
	{
		title: '3D HTML Viewer',
		description: 'View HTML content in 3D perspective.',
		image: 'https://github.com/Aizhee/3d-html-viewer/raw/main/res/img/product1.png',
		link: 'https://github.com/Aizhee/3d-html-viewer',
		technologies: ['Web', 'JavaScript', 'TypeScript'],
		category: 'VSCode Extensions',
	},
	{
		title: 'Online Tech',
		description: 'Compiled web course projects',
		image: '/projects/olt.png',
		link: 'https://aizhee.github.io/online-tech/',
		technologies: ['Web'],
		category: 'Web',
	},
	{
		title: 'PCB Design',
		description: 'Compilation of EasyEDA layouts.',
		image: '/projects/pcb.png',
		link: 'https://oshwlab.com/manedub2015/works',
		technologies: ['IoT', 'PCB Design'],
		category: 'IoT/PCB Design',
	},
	{
		title: 'ATTiny85 Dice',
		description: 'A simple, compact electronic dice.',
		image: '/projects/attiny.png',
		link: 'https://www.tinkercad.com/things/5ISAv2JhBVr-attiny-dice-5v-7segment?sharecode=B4qy5ydiOO6Db3yC5s4FSR7pOVBl8dHRriLSZ_lIcbA',
		technologies: ['IoT', 'PCB Design'],
		category: 'IoT/PCB Design',
	},
	{
		title: 'CO2 Sink',
		description: 'An algae-based CO2 Carbon Capture Device.',
		image: '/projects/co2.png',
		link: 'https://docs.google.com/document/d/1Sa3ob7fsTJs8vyEkfC-e8NGTSmcyRUom/edit#heading=h.gjdgxs',
		technologies: ['IoT', 'PCB Design'],
		category: 'IoT/PCB Design',
	},
	{
		title: 'DiscordHooks',
		description: 'Kotlin-Java library for sending Discord messages.',
		image: '/projects/dchook.png',
		link: 'https://github.com/Aizhee/DiscordHooks',
		technologies: ['Java', 'Kotlin'],
		category: 'Libraries',
	},
    {
        title: 'AutoLEMPW',
        description: 'A package script for instaling LEMP stack and WordPress on linux.',
        image: '/projects/lemp.png',
        link: 'https://github.com/Aizhee/AutoLEMPW/',
        technologies: ['Shell Script', 'WordPress', 'Linux'],
        category: 'Libraries',
    },
	{
		title: 'Iframe Server',
		description: 'Lite live-server version with JS injection for iframes.',
		image: '/projects/ifrm.png',
		link: 'https://github.com/Aizhee/iframe-server',
		technologies: ['Node.js', 'JavaScript'],
		category: 'Libraries',
	},
	{
		title: 'Time-moji',
		description: 'JS library that returns emoji based on time.',
		image: '/projects/timji.png',
		link: 'https://github.com/Aizhee/Time-moji',
		technologies: ['JavaScript'],
		category: 'Libraries',
	},
	{
		title: 'GitHub to jsDelivr',
		description: 'Generate CDN links using jsDelivr.',
		image: '/projects/jsdlv.png',
		link: 'https://aizhee.github.io/Github-to-jsDelivr-Generator/',
		technologies: ['Web', 'JavaScript'],
		category: 'Utility Websites',
	},
	{
		title: 'Assembly Generator',
		description: 'Tools/scripts for assembly code generation.',
		image: '/projects/asmgen.png',
		link: 'https://aizhee.github.io/Assembly-Generator/',
		technologies: ['Web', 'JavaScript'],
		category: 'Utility Websites',
	},
	{
		title: 'Networks Generator',
		description: 'Generates commands for router configuration (Cisco).',
		image: '/projects/ntwrk.png',
		link: 'https://aizhee.github.io/Networks-Generator/',
		technologies: ['Web', 'JavaScript'],
		category: 'Utility Websites',
	},
	{
		title: 'Commit-Line',
		description: 'Embeddable commit history tree generator.',
		image: 'https://camo.githubusercontent.com/3b797c49000e1b98cd445b4edd3c706705a0eb38f195010a1be0b2132089971d/68747470733a2f2f7331322e67696679752e636f6d2f696d616765732f53564435792e706e67',
		link: 'https://github.com/Aizhee/Commit-Line',
		technologies: ['Web','JavaScript'],
		category: 'Utility Websites',
	},
	{
		title: 'Java-stuff',
		description: 'Various Java projects and experiments.',
		image: '/projects/jva.png',
		link: 'https://github.com/Aizhee/java-stuff',
		technologies: ['Java'],
		category: 'General Programming',
	},
];

export default function Portfolio() {
	const { theme, setTheme } = useTheme();
	// Remove initial useEffect; layout's pre-hydration script sets theme before React hydrates.

    // Toggle dark mode and persist to localStorage
	const toggleDarkMode = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		try {
			// persist canonical theme key only
			localStorage.setItem('theme', next);
		} catch {}
		document.documentElement.classList.add('transition-colors', 'duration-500');
	};

    const [searchTerm, setSearchTerm] = useState('');
    const [selectedFilters, setSelectedFilters] = useState<string[]>(['All']);
	const [animatedText, setAnimatedText] = useState('');

	useEffect(() => {
		const fullText = 'Aizhee/Portfolio';
		let index = 0;
		const interval = setInterval(() => {
			if (index < fullText.length) {
				setAnimatedText(fullText.slice(0, index + 1));
				index++;
			} else {
				clearInterval(interval);
			}
		}, 100);

		return () => clearInterval(interval);
	}, []);

	// Group projects by category
	const groupedProjects = projects.reduce<Record<string, typeof projects>>((acc, project) => {
		if (!acc[project.category]) {
			acc[project.category] = [];
		}
		acc[project.category].push(project);
		return acc;
	}, {});

	// Get unique categories and technologies for chips
	const uniqueFilters = ['All', ...new Set(projects.flatMap((project) => [project.category, ...project.technologies]))];

	// Update chip selection logic
	const toggleFilter = (filter: string) => {
		setSelectedFilters((prevFilters) => {
			if (filter === 'All') {
				return prevFilters.includes('All') ? [] : ['All'];
			}

			const newFilters = prevFilters.includes(filter)
				? prevFilters.filter((f) => f !== filter)
				: [...prevFilters.filter((f) => f !== 'All'), filter];

			return newFilters.length === 0 ? ['All'] : newFilters;
		});
	};

	// Filter projects based on selected chip and search term
	const filteredGroupedProjects = Object.entries(groupedProjects).reduce(
		(acc, [category, projects]) => {
			const filteredProjects = projects.filter(
				(project) =>
					(selectedFilters.includes('All') ||
						selectedFilters.some((filter) =>
							project.category === filter || project.technologies.includes(filter)
						)) &&
					(project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
						project.description.toLowerCase().includes(searchTerm.toLowerCase()))
			);
			if (filteredProjects.length > 0) {
				acc[category] = filteredProjects;
			}
			return acc;
		},
		{} as Record<string, typeof projects>
	);

	// Ensure dynamic blobs effect runs only on the client
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const blobs = Array.from(document.querySelectorAll('.dynamic-blob')) as HTMLElement[];

			const handleScroll = () => {
				const scrollY = window.scrollY;
				blobs.forEach((blob, index) => {
					const speed = (index + 1) * 0.1;
					blob.style.transform = `translateY(${scrollY * speed}px)`;
				});
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
			};
		}
	}, []);

	return (
		<div>
			<main className="relative min-h-screen px-6 py-12 bg-gray-50 dark:bg-zinc-950 text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-hidden">
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

				{/* Content */}
				<div className="relative z-10">
					{/* Header */}
					<header className="max-w-6xl mx-auto flex justify-between items-center mb-12">
						<h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
							<Link href="/" className="hover:underline">{animatedText}</Link>
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
							{/* Render both icons/labels and let Tailwind's `dark:` utilities control visibility.
								This keeps the DOM identical between server and client and avoids hydration mismatches. */}
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
					<section className="max-w-6xl mx-auto flex flex-col sm:flex-row gap-8 items-center sm:items-start mb-16 p-8 rounded-2xl bg-white/70 dark:bg-gray-800/70 border border-white/30 dark:border-gray-700/50 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02]">
						
							<Image
								src="https://avatars.githubusercontent.com/u/108914551?v=4"
								alt="My Profile Photo"
								width={128}
								height={128}
								className="profile-img rounded-full border-4 border-white"
								priority
							/>

						<div className="text-center sm:text-left">
							<h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
								Aizhar Jamilano (Aizhee)
							</h2>
							<p className="mt-3 text-gray-700 dark:text-gray-300 max-w-md text-base sm:text-lg leading-relaxed">
								Here’s a showcase of what I’ve built or contributed to over the years.
							</p>
							<div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
                <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-full text-xs sm:text-sm font-medium">
                  Web Development
                </span>
                <span className="px-3 py-1 bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 rounded-full text-xs sm:text-sm font-medium">
                  Data Science / Machine Learning
                </span>
                <span className="px-3 py-1 bg-cyan-100 dark:bg-cyan-900/50 text-cyan-700 dark:text-cyan-300 rounded-full text-xs sm:text-sm font-medium">
                  IoT
                </span>
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded-full text-xs sm:text-sm font-medium">
                  Networks
                </span>
                <span className="px-3 py-1 bg-indigo-200 dark:bg-indigo-800/50 text-indigo-800 dark:text-indigo-200 rounded-full text-xs sm:text-sm font-medium">
                  App Development
                </span>
							</div>
							<a href="https://github.com/Aizhee" target="_blank" rel="noopener noreferrer">
								<div className="flex justify-center sm:justify-start mt-6">
									<Image
										src="https://ghchart.rshah.org/0d2b26/Aizhee"
										alt="GitHub Contributions Chart"
										width={800}
									height={200}
									className="rounded-lg w-full sm:w-auto"
									unoptimized
								/>
							</div>
							</a>
						</div>
					</section>

					
					<div className="mb-8 space-y-4 max-w-6xl mx-auto">
						
            {/* Search Bar */}
						<div className="relative mt-4">
							<input
								type="text"
								placeholder="Search projects..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full px-4 py-3 pl-12 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
							/>
							<div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
								<svg
									className="w-5 h-5"
									fill="none"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
								</svg>
							</div>
						</div>

            {/* Filter Chips */}
            <div className="w-[100%] sm:w-full sm:max-w-6xl overflow-x-auto sm:overflow-visible pr-4 sm:pr-0">
              <div className="flex flex-nowrap gap-2 py-2 sm:flex-wrap">
                {uniqueFilters.map((filter) => (
                  <button
                    key={filter}
                    onClick={() => toggleFilter(filter)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 whitespace-nowrap ${
                      selectedFilters.includes(filter)
                        ? 'bg-emerald-500 text-white border-emerald-500'
                        : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-emerald-100 dark:hover:bg-emerald-900/50'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

					</div>

					{/* Projects by Category */}
					{Object.entries(filteredGroupedProjects).map(([category, projects]) => (
						<section key={category} className="max-w-6xl mx-auto mt-20">
							<h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
								{category}
							</h2>
							<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
								{projects.map((project, idx) => (
									<a
										key={idx}
										href={project.link}
										target="_blank"
										rel="noopener noreferrer"
										className="group bg-white/80 dark:bg-gray-800/80 border border-white/40 dark:border-gray-700/60 rounded-2xl overflow-hidden backdrop-blur-xl hover:scale-[1.05] transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-2"
									>
										<div className="relative overflow-hidden">
											<Image
												src={project.image}
												alt={project.title}
												width={500}
												height={300}
												className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
										</div>
										<div className="p-6">
											<h4 className="text-xl font-semibold mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300">
												{project.title}
											</h4>
											<p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
												{project.description}
											</p>
											<div className="flex flex-wrap gap-2 mb-4">
												{project.technologies.map((tech, techIdx) => (
													<span
														key={techIdx}
														className="px-2 py-1 bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 rounded-md text-xs font-medium"
													>
														{tech}
													</span>
												))}
											</div>
											<div className="text-emerald-600 dark:text-emerald-400 font-medium group-hover:translate-x-2 transition-transform duration-300">
												{project.link ? 'View Project →' : 'Coming soon...'}
											</div>
										</div>
									</a>
								))}
							</div>
						</section>
					))}

					{/* No Projects Found Message */}
					{Object.keys(filteredGroupedProjects).length === 0 && (
          <div className="text-center text-gray-500 dark:text-gray-400 mt-8">
            No projects found matching your search criteria.
          </div>
        )}
        
					{/* Contact Section */}
					<section className="max-w-6xl mx-auto mt-20 text-center">
						<div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-500/10 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/5 border border-emerald-200/50 dark:border-emerald-700/30 backdrop-blur-xl">
							<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
								Let&apos;s Work Together
							</h3>
                            <p className="text-gray-700 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                                Ready to bring your ideas to life? I&apos;m always excited to work
                                on new projects and collaborate with amazing people.
                            </p>
                            <Link href="/" passHref>
                                <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                                    Get In Touch
                                </button>
                            </Link>
						</div>
					</section>

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
				`}</style>
			</main>
		</div>
	);
}
