import { GoVerified } from "react-icons/go";
import { SiGithub, SiPinterest, SiLinkedin } from "react-icons/si";

export default function Bio() {
	const links = [
		{
			title: "Github",
			Icon: SiGithub,
			href: "https://github.com/alexladwong",
			text: "@alexladwong",
		},
		{
			title: "Linkedin",
			Icon: SiLinkedin,
			href: "https://www.linkedin.com/in/ap-kintu-alex-ladwong-8b5629101/",
			text: "@ap-kintu-alex-ladwong-8b5629101",
		},
		{
			title: "Pinterest",
			Icon: SiPinterest,
			href: "https://www.pinterest.com/kjalex2010/",
			text: "@Pinterest",
		},
	];
	return (
		<div className="mt-2 mb-2 w-11/12 mx-auto">
			<div className="flex items-center gap-3 mb-3 ">
				<img
					src="https://avatars.githubusercontent.com/u/81810294?s=400&u=1aa88177a6125ee22307dcdda850d247b5b96826&v=4"
					alt="KintuAlexLadwong"
					className="w-40 h-40 rounded-full border-2 border-yellow-200"
				/>
				<div>
					<div className="flex items-center gap-1">
						<h1 className="text-2xl">KintuAlexLadwong</h1>
						<GoVerified className="text-blue-500 text-2xl" />
					</div>
					<p className="text-lg text-gray-400">Joined the world of Coding 2 years ago.</p>
				</div>
			</div>
			<p>
				Hi there, I am a software developer/CyberSecurity Engineer. Passionate with web
				development and like to learn new thing related to coding and sharing it
				to the world through my Connections.
			</p>
			<div className="grid grid-cols-2">
				{links.map(({ Icon, text, href, title }, index) => {
					return (
						<div className="flex items-center gap-1 mt-3" key={index}>
							<div className="text-lg flex items-center gap-1 text-yellow-200">
								<Icon />
								<h1>{title}</h1>
							</div>
							<a
								href={href}
								target="_blank"
								rel="noreferrer"
								className="flex-1 underline text-blue-300 "
							>
								{text}
							</a>
						</div>
					);
				})}
			</div>
		</div>
	);
}
