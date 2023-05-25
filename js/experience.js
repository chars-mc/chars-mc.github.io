const experiencesDiv = document.querySelector(".experiences");
const iconsBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const jobs = [
	{
		position: "Fullstack Developer",
		company: "Freelance",
		date: "Jan - May 2023",
		description:
			"Design and implementation of a multi-user Point of Sale System to manage inventory, sales, profits and expenses of multiple grocery stores",
		tasks: [
			"Development of a multi-user Point of Sale System",
			"Analysis of requirements, design and implementation of the system",
			"Design, implementation and migration of databases",
			"UI Design",
			"Creation and consumption of REST APIs",
			"Code documentation",
			"Test Driven Development (TDD)",
			"Implement clean architecture",
		],
		skills: [
			{ name: "Figma", icon: "figma/figma-original.svg" },
			{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
			{ name: "Typescript", icon: "typescript/typescript-original.svg" },
			{ name: "React", icon: "react/react-original.svg" },
			{ name: "Go", icon: "go/go-original-wordmark.svg" },
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
			{ name: "Docker", icon: "docker/docker-plain.svg" },
		],
	},
	{
		position: "Advertising and Ecommerce Developer",
		company: { name: "Team3 Design & Development", link: "https://www.team3.me/" },
		date: "Aug - Nov 2022",
		description:
			"Advertising on social networks about company products and services. In addition to the development of an online shoe store and obtaining product data through web scraping",
		tasks: ["Advertising on social networks", "E-commerce development", "Web Scraping"],
		skills: [
			{ name: "Figma", icon: "figma/figma-original.svg" },
			{ name: "Wordpress", icon: "wordpress/wordpress-plain.svg" },
			{ name: "WooCommerce", icon: "woocommerce/woocommerce-original.svg" },
		],
	},
	{
		position: "Mobile Developer",
		company: {
			// name: "Centro de Estudios para el Desarrollo Municipal y Políticas Públicas",
			name: "CEDES",
			link: "https://www.cedes.unach.mx/",
		},
		date: "Jan - Jul 2022",
		description:
			"Design and development of a multiplatform mobile application for the dissemination of academic content",
		tasks: [
			"Design and development of a multiplatform mobile application for the dissemination of academic content",
			"UI Design",
		],
		skills: [
			{ name: "Figma", icon: "figma/figma-original.svg" },
			{ name: "Dart", icon: "dart/dart-original.svg" },
			{ name: "Flutter", icon: "flutter/flutter-original.svg" },
		],
	},
	{
		position: "Frontend Developer",
		company: { name: "BitZero Technologies", link: "https://www.bitzero.mx/" },
		date: "Sep - Nov 2020",
		description:
			"Web development of an internal Enterprise Resource Planning (ERP) System to manage internal projects and resources.",
		tasks: ["Web development of an Enterprise Resource Planning System (ERP)", "Consumption of REST APIs"],
		skills: [
			{ name: "Javascript", icon: "javascript/javascript-original.svg" },
			{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
			{ name: "Vue", icon: "vuejs/vuejs-original.svg" },
			{ name: "Vuetify", icon: "vuetify/vuetify-original.svg" },
		],
	},
];

jobs.forEach((job) => {
	experiencesDiv.innerHTML += `
		<div class="experience">
			<div class="experience__header">
				<h3 class="experience__position">${job.position}</h3>

				<h3 class="experience__company">${
					typeof job.company === "string"
						? job.company
						: `<a href="${job.company.link}" target="_blank">@${job.company.name}</a>`
				}</h3>
			</div>
				<span class="experience__date">${job.date}</span>

				<p class="experience__description">${job.description}</p>

				<div class="experience__skills">
					${job.skills
						?.map((skill) => {
							return `<img
								src="${iconsBaseUrl + skill.icon}"
								alt="${skill.name}"
								class="tech-icon"
							/>`;
						})
						.join("")}
				</div>
		</div>`;
});
