import { LineBar } from "./LineBar.jsx";
import { SKILLS } from "./constants.js";
import "./skills.css";
export const Skills = () => {
	return (
		<div className="skills-container">
			<div className="skills-inner-container">
				<span className="skills-title">HABILIDADES</span>
				<div className="skills-list">
					{SKILLS.map((skill, index) => {
						return (
							<LineBar key={index} title={skill.title} percent={skill.level} />
						);
					})}
				</div>
			</div>
		</div>
	);
};
