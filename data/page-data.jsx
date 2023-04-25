import { Github, Linkedin, Instagram, Twitter, Envelope, Steam, Itchio } from "../app/component/icons";


export const personalData = {
	name: "Elmar Snær Ingólfsson",
	role: "Junior Developer",
	education: [
		"Computer Science and General Education, Fjölbrautaskóli Suðurnesja, Iceland",
		"Computer Science, Reykjavík University, Iceland"
	],
	contactLinks: [
		"mailto:emailto:emelsi15@gmail.com",
		"https://twitter.com/hyper_buff",
		"https://www.linkedin.com/in/elmar-sn%C3%A6r-ing%C3%B3lfsson-084a7522a/",
		"https://www.instagram.com/elmaringolfs/",
		"https://github.com/elmari20"
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"I am a highly motivated computer science student from HR with a strong desire to continuously expand my knowledge and skills. My passion lies in the development of computer games from the ground up, which has helped me develop a keen eye for detail and problem-solving. Additionally, I pride myself on being a quick learner and maintaining a healthy lifestyle.",
		"In my free time, I enjoy exploring and learning new things, whether it be through reading, playing video games, or 3D modeling. I also love to take long walks to clear my mind and enjoy the outdoors. Additionally, I have a passion for making music and cooking. Finally, I love traveling and experiencing different cultures.",
	],
};

export const skills = {
	personal: [
	  { icon: "💡", text: "Creative" },
	  { icon: "🌀", text: "Adaptable" },
	  { icon: "👥", text: "Team player" },
	  { icon: "🚀", text: "Innovative" },
	  { icon: "🚶", text: "Fast learner" },
	  { icon: "🔍", text: "Problem solver" },
	],
	programming: [
	  { icon: "💻", text: "Python" },
	  { icon: "⚛️", text: "React" },
	  { icon: "🌐", text: "Javascript" },
	  { icon: "🌐", text: "HTML" },
	  { icon: "🌊", text: "Tailwind" },
	  { icon: "ʦ", text: "Typescript" },
	  { icon: "🐘", text: "Postgres" },
	  { icon: "🔢", text: "C++" },
	  { icon: "🔢", text: "C#" },
	  { icon: "📜", text: "Lua" },
	  { icon: "🎨", text: "CSS" },
	  { icon: "🌲", text: "Node" },
	],
	program: [
	  { icon: "📈", text: "Data Structures" },
	  { icon: "🔜", text: "Next JS" },
	  { icon: "🎮", text: "Unity/Godot" },
	  { icon: "🎨", text: "Photoshop/Figma" },
	  { icon: "🐙", text: "GitHub" },
	  { icon: "📝", text: "Word/Docs" },
	  { icon: "📊", text: "Excel/Sheets" },
	  { icon: "🐵", text: "Blender" },
	  { icon: "🎥", text: "Premiere Pro" },
	  { icon: "🎨", text: "Illustrator" },
	  { icon: "🎵", text: "FL Studio" },
	  { icon: "📋", text: "Trello" },
	],
};

export const professionalData = {
    title: "Professional Experience",
    experiences: [
		{
			title: "IT Technician",
			company: "atNorth",
			date: "Oct 2018 - 2020",
			description:
				"As an IT technician, I set up and maintained specialized computer systems that required high-performance computing capabilities. My responsibilities included connecting servers, managing cable networks, troubleshooting technical issues, and providing ongoing support to clients.",
			current: false,
		},
        {
            title: "Technical Supervisor/Shift Manager",
            company: "Langbest ehf.",
            date: "2010 - 2018",
            description:
                "As a restaurant employee, I gained valuable experience in customer service, food preparation, and teamwork. I assisted in website development, contributing to the online presence and accessibility of the business. This experience taught me the importance of communication, adaptability, and attention to detail in a fast-paced environment.",
			current: false,
        },
    ],
};


export const projectsData = [
	{
		title: "The Pyramids of Bones",
		description: "This game was made in a 3 week course using Unity and C#. It is a 2D top down 4 player online shooter with a focus on fast-paced action and a unique art style. The game is available on Steam and Itch.io. I worked on the art, assets, and level design with a team of 4 people. All credit goes to Hrafnkell, Erla and Thelma and our amazing team effort from LA Nerds",
		image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2286020/header.jpg?t=1676726705",
		team: "LA Nerds",
		teamMembers: [
		  { name: "Hrafnkell", url: "https://github.com/HrafnkellTorri" },
		  { name: "Erla", url: "https://github.com/erla19" },
		  { name: "Thelma", url: "https://github.com/thelmaolafs" },
		],			
		links: [
		  { icon: <Github />, url: "https://github.com/erla19/ThePyramidOfBones" },
		  { icon: <Steam />, url: "https://store.steampowered.com/app/2286020/The_Pyramid_Of_Bones/" },
		  { icon: <Itchio />, url: "https://erla19.itch.io/the-pyramid-of-bones" }
		],
	  },
	  {
		title: "The Alien Crime Lord",
		description: "This is a game we made as a final project in course called Advanced Game Design & Development, It is a 3D Platformer made in Unity and C#. I worked on the art, assets, and level design with a team of 4 people. All credit goes to Hrafnkell, Erla and Thelma and our amazing team effort from LA Nerds",
		image: "https://img.itch.zone/aW1nLzg2MDcwNDMucG5n/original/2jT8Pr.png",
		team: "LA Nerds",
		teamMembers: [
		  { name: "Hrafnkell", url: "https://github.com/HrafnkellTorri" },
		  { name: "Erla", url: "https://github.com/erla19" },
		  { name: "Thelma", url: "https://github.com/thelmaolafs" },
		],
		links: [
		  { icon: <Github />, url: "https://github.com/HrafnkellTorri/The-Alien-Crime-Lord" },
		  { icon: <Itchio />, url: "https://hrafnkell.itch.io/the-alien-crime"}
		],
	  },
	{
		title: "Heartbeat Monitor For Unity",
		description: "A final project where me and a group of two others built a groundwork for a bluetooth LE heartrate monitor asset for unity, we wanted to make developers be able to easily integrate heartrate monitors into their games. We used C# and Unity to build the asset and the project was a success. We were able to get the heartrate monitor to work with unity and we were able to get the heartrate to be displayed in the game. The project is open source and can be found on github. All credit goes to Bjarki and Tómas for our amazing team effort.",
		image: "https://i.imgur.com/HrONXVu.png",
		team: "GEDE",
		teamMembers: [
			{ name: "Bjarki", url: "https://github.com/bjarkirunars"},
			{ name: "Tómas", url: "https://github.com/TomasOrripet"},
		],
		links: [
		  { icon: <Github />, url: "https://github.com/elmari20/Game-Engine---Car-Demo" },
		],
	},
	{
		title: "Car Engine Demo (Godot)",
		description: "A project where we built a Car Engine Demo in Godot, you can try out three diffrent car types, a sports car, a drift car and a mountain car which all have diffrent characteristics. The project was made in a course called Game Engines with GDScript. All credit goes to Bjarki and Tómas for our amazing team effort.",
		image: "https://github.com/bjarkirunars/gede-final/raw/main/screen.jpg",
		team: "GEDE",
		teamMembers: [
			{ name: "Bjarki", url: "https://github.com/bjarkirunars"},
			{ name: "Tómas", url: "https://github.com/TomasOrripet"},
		],
		links: [
		  { icon: <Github />, url: "https://github.com/bjarkirunars/gede-final" },
		],
	},
  ];
