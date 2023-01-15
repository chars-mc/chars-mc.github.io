const skillsDiv = document.querySelector(".skills");
const skills = [
	{ name: "HTML", icon: "html5/html5-original.svg" },
	{ name: "CSS", icon: "css3/css3-original.svg" },
	{ name: "JavaScript", icon: "javascript/javascript-original.svg" },
	{ name: "TypeScript", icon: "typescript/typescript-original.svg" },
	{ name: "Node.js", icon: "nodejs/nodejs-original.svg" },
	{ name: "React.js", icon: "react/react-original.svg" },
	{ name: "Jest", icon: "jest/jest-plain.svg" },
	{ name: "Go", icon: "go/go-original-wordmark.svg" },
	{ name: "MySQL", icon: "mysql/mysql-original.svg" },
	{
		name: "SQL Server",
		icon: "microsoftsqlserver/microsoftsqlserver-plain.svg",
		colorScheme: "light",
	},
	{ name: "Git", icon: "git/git-original.svg" },
	{ name: "GitHub", icon: "github/github-original.svg", colorScheme: "light" },
	{ name: "Figma", icon: "figma/figma-original.svg" },
	{ name: "Docker", icon: "docker/docker-original.svg" },
	{ name: "Vim", icon: "vim/vim-original.svg" },
	{ name: "Linux", icon: "linux/linux-original.svg" },
];

skills.forEach((skill) => {
	skillsDiv.innerHTML += `
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
});
