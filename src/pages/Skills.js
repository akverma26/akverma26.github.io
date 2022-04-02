import ProfileData from "../ProfileData";

export default function SkillsPage() {
    const skills = ProfileData.skillsSection;
    return (
        <div className="skills-container">
            {skills.map((skill_set, index) => (
                <div key={index} className="skills-set-container">
                    <div className="skills-set-name">{skill_set.type}</div>
                    <div className="skills">
                        {skill_set.skills.map((skill, index) => (
                            <div key={index} className="skill">
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
