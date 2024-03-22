import ProgressBar from "../ProgressBar";
import {
	SiExpress,
	SiFlutter,
	SiJavascript,
	SiNextdotjs,
	SiPython,
	SiReact,
	SiTailwindcss,
	SiFigma,
} from "react-icons/si";

export default function Skills() {
	const listOfSkills = [
		{
			Icon: SiPython,
			barWidth: "w-85%",
			percentageValue: "85%",
			text: "Python",
		},
		{
			Icon: SiReact,
			barWidth: "w-65%",
			percentageValue: "65%",
			text: "React",
		},
		{
			Icon: SiFlutter,
			barWidth: "w-80%",
			percentageValue: "80%",
			text: "Flutter",
		},
		{
			Icon: SiJavascript,
			barWidth: "w-60%",
			percentageValue: "60%",
			text: "Express.js",
		},
		{
			Icon: SiFigma,
			barWidth: "w-65%",
			percentageValue: "65%",
			text: "Figma",
		},
	];

	return (
		<div>
			{listOfSkills.map(({ Icon, barWidth, percentageValue, text }, index) => {
				return (
					<ProgressBar
						Icon={Icon}
						barWidth={barWidth}
						percentageValue={percentageValue}
						key={index}
						text={text}
					/>
				);
			})}
		</div>
	);
}
