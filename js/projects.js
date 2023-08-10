const projectsDiv = document.querySelector(".projects");
const projects = [
	{
		name: "Point of Sale",
		description:
			"A multi-user Point of Sale System to manage inventory, sales, profits and expenses of multiple grocery stores.",
		logoIcon: "bx bx-store",
		screenshot: "img/screenshots/pos.png",
		stack: [
			{ name: "HTML", icon: "html5/html5-original.svg" },
			{ name: "CSS", icon: "css3/css3-original.svg" },
			{ name: "Typescript", icon: "typescript/typescript-original.svg" },
			{ name: "React", icon: "react/react-original.svg" },
			{ name: "Storybook", icon: "storybook/storybook-original.svg" },
			{ name: "Go", icon: "go/go-original-wordmark.svg" },
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
			{ name: "Docker", icon: "docker/docker-plain.svg" },
			{ name: "Figma", icon: "figma/figma-original.svg" },
		],
	},
	{
		name: "CEPRA",
		description: "Internet of Things project to control the flow, purification and consumption of water in a house.",
		logoIcon: "bx bx-droplet",
		screenshot: "img/screenshots/cepra.png",
		stack: [
			{ name: "Arduino", icon: "arduino/arduino-original.svg" },
			{ name: "HTML", icon: "html5/html5-original.svg" },
			{ name: "CSS", icon: "css3/css3-original.svg" },
			{ name: "Javascript", icon: "javascript/javascript-original.svg" },
			{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
			{ name: "socket.io", icon: "socketio/socketio-original.svg", colorScheme: "light" },
			{ name: "Express", icon: "express/express-original.svg", colorScheme: "light" },
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
		],
	},
	{
		name: "Encryptor",
		description: "A web aplication to encrypt and decrypt text and files, using AES and BlowFish algorithms.",
		logoIcon: "bx bx-network-chart",
		screenshot: "img/screenshots/encryptor.png",
		links: [
			{ name: "Backend", url: "https://github.com/chars-mc/encryptor-api" },
			{ name: "Frontend", url: "https://github.com/chars-mc/encryptor-app" },
		],
		stack: [
			{ name: "Svelte", icon: "svelte/svelte-original.svg" },
			{ name: "Typescript", icon: "typescript/typescript-original.svg" },
			{ name: "Go", icon: "go/go-original-wordmark.svg" },
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
			{ name: "Docker", icon: "docker/docker-plain.svg" },
		],
	},
	{
		name: "Timeline Maker",
		description:
			"Web application to create simple timelines using JSON files to store the data and allowing export to PDF.",
		logoIcon: "bx bx-time",
		screenshot: "img/screenshots/timeline_maker.png",
		links: [
			{ name: "Repository", url: "https://github.com/chars-mc/timeline-maker" },
			{ url: "https://chars-mc.github.io/timeline-maker/", type: "preview" },
		],
		stack: [
			{ name: "Javascript", icon: "javascript/javascript-original.svg" },
			{ name: "Vue", icon: "vuejs/vuejs-original.svg" },
		],
	},
	{
		name: "Home Climate",
		description: "Internet of things project to control the climate and lights in a house.",
		logoIcon: "bx bx-home",
		screenshot: "img/screenshots/home_climate.png",
		links: [{ name: "Repository", url: "https://github.com/chars-mc/home-climate" }],
		stack: [
			{ name: "Arduino", icon: "arduino/arduino-original.svg" },
			{ name: "Java", icon: "java/java-original.svg" },
			{ name: "CSS", icon: "css3/css3-original.svg" },
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
		],
	},
	{
		name: "Lexical-syntactic Analyzer",
		description: "Lexical-syntactic analyzer for source code written in C++ using JFlex & JCup.",
		logoIcon: "bx bx-analyse",
		screenshot: "img/screenshots/lexical-syntactic_analyzer.png",
		links: [{ name: "Repository", url: "https://github.com/chars-mc/lexical-syntactic-analyzer" }],
		stack: [{ name: "Java", icon: "java/java-original.svg" }],
	},
	{
		name: "Line and Circle Drawer",
		description: "Implementation of algorithms for drawing lines and circles with OpenGL.",
		logoIcon: "bx bx-shape-circle",
		screenshot: "img/screenshots/line_circle_drawer.png",
		links: [{ name: "Repository", url: "https://github.com/chars-mc/line-and-circle-drawer" }],
		stack: [
			{ name: "OpenGL", icon: "opengl/opengl-original.svg" },
			{ name: "Go", icon: "go/go-original-wordmark.svg" },
		],
	},
];

projects.forEach((project) => {
	projectsDiv.innerHTML += `
		<div class="project">
			<img
				src="${project.screenshot}"
				alt="${project.name}_screenshot"
				class="project__screenshot"
			/>

			<div class="project__details">
				<h3 class="project__name">
					<i class="${project.logoIcon} project__logo"></i>
					${project.name}
				</h3>
				<p class="project__description">${project.description}</p>

				<div class="project__stack">
					${project.stack
						.map((item) => {
							return `
								<img
									src="${iconsBaseUrl + item.icon}"
									alt="${item.name}"
									class="tech-icon"
									color-scheme=${item?.colorScheme}
								></img>`;
						})
						.join("")}
				</div>

				<div class="project__links">
				${
					project.links
						?.map(
							(link) => `
								<a href="${link.url}" class="project__link" target="_blank">
									<i class="bx bx-link-alt"></i>${link.type === "preview" ? "Preview" : link.name}
								</a>
							`,
						)
						.join("") || ""
				}
				</div>
			</div>
		</div>
	`;
});
