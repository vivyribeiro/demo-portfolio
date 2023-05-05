import { FaGit, FaPython } from "react-icons/fa";
import {
	SiDjango,
	SiExpress,
	SiChakraui,
	SiPostgresql,
	SiTypescript,
	SiStyledcomponents
} from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaJs, FaNode, FaReact } from "react-icons/fa";

export const stackData = [
	{
		title: "HTML",
		img: FaHtml5
	},
	{
		title: "CSS",
		img: FaCss3Alt
	},
	{
		title: "JS",
		img: FaJs
	},
	{ title: "TypeScript", img: SiTypescript },
	{
		title: "React",
		img: FaReact
	},
	{ title: "Chakra UI", img: SiChakraui },
	{ title: "Styled Components", img: SiStyledcomponents },
	{ title: "Git", img: FaGit },
	{
		title: "Node JS",
		img: FaNode
	},
	{ title: "PostgreSQL", img: SiPostgresql },
	{ title: "Express", img: SiExpress },
	{ title: "Python", img: FaPython },
	{ title: "Django", img: SiDjango }
];
