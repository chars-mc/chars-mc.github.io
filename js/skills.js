const skillsDiv = document.querySelector(".skills");
const skillsGroups = [
	{
		name: "Frontend",
		skills: [
			{ name: "HTML", icon: "html5/html5-original.svg" },
			{ name: "CSS", icon: "css3/css3-original.svg" },
			{ name: "JavaScript", icon: "javascript/javascript-original.svg" },
			{ name: "TypeScript", icon: "typescript/typescript-original.svg" },
			{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
			{ name: "React.js", icon: "react/react-original.svg" },
			{ name: "Vue.js", icon: "vuejs/vuejs-original.svg" },
			{ name: "Svelte", icon: "svelte/svelte-original.svg" },
			{ name: "Jest", icon: "jest/jest-plain.svg" },
		],
	},
	{
		name: "Backend",
		skills: [
			{ name: "JavaScript", icon: "javascript/javascript-original.svg" },
			{ name: "TypeScript", icon: "typescript/typescript-original.svg" },
			{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
			{ name: "Express", icon: "express/express-original.svg", colorScheme: "light" },
			{ name: "Go", icon: "go/go-original-wordmark.svg" },
		],
	},
	{
		name: "Databases",
		skills: [
			{ name: "MySQL", icon: "mysql/mysql-original.svg" },
			{ name: "SQL Server", icon: "microsoftsqlserver/microsoftsqlserver-plain.svg", colorScheme: "light" },
			{ name: "SQLite", icon: "sqlite/sqlite-original.svg" },
			{ name: "MonogDB", icon: "mongodb/mongodb-original.svg" },
			{ name: "Redis", icon: "redis/redis-original.svg" },
		],
	},
	{
		name: "Tools",
		skills: [
			{ name: "Git", icon: "git/git-original.svg" },
			{ name: "GitHub", icon: "github/github-original.svg", colorScheme: "light" },
			{ name: "Figma", icon: "figma/figma-original.svg" },
			{ name: "Docker", icon: "docker/docker-original.svg" },
			{ name: "Vim", icon: "vim/vim-original.svg" },
			{ name: "Linux", icon: "linux/linux-original.svg" },
		],
	},
];

skillsGroups.forEach((group) => {
	skillsDiv.innerHTML += `
		<div class="skill-group">
			<h4 class="skill-group__title">${group.name}</h4>

			<div class="skill-group__list">
			${group.skills
				.map((skill) => {
					return `
				<div class="skill">
					<img
						src="${iconsBaseUrl + skill.icon}"
						alt="${skill.name}"
						class="tech-icon skill__icon"
						color-scheme=${skill?.colorScheme}
					/>
					<p class="skill__name">${skill.name}</p>
				</div>
			`;
				})
				.join("")}
		</div>
		</div>
	`;
});
