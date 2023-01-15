const experiencesDiv = document.querySelector(".experiences");
const iconsBaseUrl = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/";
const jobs = [
	{
		company: "Team3 Design & Development",
		date: "Aug - Nov 2022 ● 4 months",
		tasks: ["Social media advertising", "E-commerce development"],
		skills: [
			{ name: "Figma", icon: "figma/figma-original.svg" },
			{ name: "Wordpress", icon: "wordpress/wordpress-plain.svg" },
			{ name: "WooCommerce", icon: "woocommerce/woocommerce-original.svg" },
		],
	},
	{
		company:
			"Centro de Estudios para el Desarrollo Municipal y Políticas Públicas",
		date: "Jan - Jul 2022 ● 7 months",
		tasks: ["UI Design", "Mobile development"],
		skills: [
			{ name: "Figma", icon: "figma/figma-original.svg" },
			{ name: "Dart", icon: "dart/dart-original.svg" },
			{ name: "Flutter", icon: "flutter/flutter-original.svg" },
		],
	},
	{
		company: "BitZero Technologies",
		date: "Sep - Nov 2020 ● 3 months",
		tasks: ["ERP development", "Frontend development"],
		skills: [
			{ name: "Vue", icon: "vuejs/vuejs-original.svg" },
			{ name: "Vuetify", icon: "vuetify/vuetify-original.svg" },
		],
	},
];

jobs.forEach((job) => {
	experiencesDiv.innerHTML += `
		<div class="experience">
			<div class="experience__header">
				<h3 class="experience__company">${job.company}</h3>
				<span class="experience__date">${job.date}</span>
			</div>

			<ul class="experience__tasks">
			${job.tasks
				?.map((task) => {
					return `<li>${task}</li>`;
				})
				.join("")}
			</ul>

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
