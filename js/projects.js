const projectsDiv = document.querySelector(".projects");
const projects = [
	{
		name: "Cepra",
		description:
			"Internet of Things project to control the flow, purification and consumption of water in a house.",
		logoIcon: "bx bx-droplet",
		screenshot: "img/screenshots/cepra.png",
		stack: [
			{ name: "Arduino", icon: "arduino/arduino-original.svg" },
			{ name: "HTML", icon: "html5/html5-original.svg" },
			{ name: "CSS", icon: "css3/css3-original.svg" },
			{ name: "Javascript", icon: "javascript/javascript-original.svg" },
			{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
			{
				name: "socket.io",
				icon: "socketio/socketio-original.svg",
				colorScheme: "light",
			},
			{
				name: "Express",
				icon: "express/express-original.svg",
				colorScheme: "light",
			},
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
		],
	},
	{
		name: "Encryptor",
		description:
			"A web aplication to encrypt and decrypt text and files, using AES and BlowFish algorithms.",

		logoIcon: "bx bx-network-chart",
		screenshot: "img/screenshots/encryptor.png",
		repos: [
			{ name: "Backend", url: "https://github.com/chars-mc/encryptor-api" },
			{ name: "Frontend", url: "https://github.com/chars-mc/encryptor-app" },
		],
		stack: [
			{
				name: "Svelte",
				icon: "svelte/svelte-original.svg",
			},
			{
				name: "Typescript",
				icon: "typescript/typescript-original.svg",
			},
			{
				name: "Go",
				icon: "go/go-original-wordmark.svg",
			},
			{
				name: "MySQL",
				icon: "mysql/mysql-original.svg",
			},
			{
				name: "Docker",
				icon: "docker/docker-plain.svg",
			},
		],
	},
	{
		name: "Timeline Maker",
		description:
			"Web application to create simple timelines, using JSON files to store the data and allowing export to PDF.",
		logoIcon: "bx bx-time",
		screenshot: "img/screenshots/timeline_maker.png",
		preview: "https://chars-mc.github.io/timeline-maker/",
		stack: [
			{
				name: "Javascript",
				icon: "javascript/javascript-original.svg",
			},
			{
				name: "Node.js",
				icon: "nodejs/nodejs-original.svg",
			},
			{
				name: "Vue",
				icon: "vuejs/vuejs-original.svg",
			},
		],
	},
];

projects.forEach((project) => {
	projectsDiv.innerHTML += `
		<div class="project">
			<i class="${project.logoIcon} project__logo"></i>
			<img
				src="${project.screenshot}"
				alt="${project.name}_screenshot"
				class="project__screenshot"
			/>

			<div class="project__details">
				<h3 class="project__name">${project.name}</h3>
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
					project.preview
						? `<a href="${project.preview}" class="project__link" target="_blank">
						<i class="bx bx-link-alt"></i> Preview
						</a>`
						: ""
				}
				${
					project.repos
						?.map((repo) => {
							return `
						<a href="${repo.url}" class="project__link" target="_blank">
							<i class="bx bxl-github"></i>
							${repo.name}
						</a>
					`;
						})
						.join("") || ""
				}
				</div>
			</div>
		</div>
	`;
});
