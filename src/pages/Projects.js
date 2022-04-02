import ProfileData from "../ProfileData";

export default function ProjectsPage() {
    const projects = ProfileData.projectsSection;
    return (
        <div className="projects-container">
            {projects.map((project, index) => {
                return (
                    <div key={index} className="project">
                        <div className="title">{project.title}</div>
                        <div className="stack-container">
                            {project.stack.map((stack, index) => (
                                <div key={index} className="stack">
                                    {stack}
                                </div>
                            ))}
                        </div>
                        <div className="description">
                            {project.description.map((point, index) => (
                                <div key={index} className="point">
                                    <span>+ {point}</span>
                                </div>
                            ))}
                        </div>
                        <div className="actions">
                            {project.actions.map((action, index) => (
                                <a
                                    key={index}
                                    href={action.link}
                                    rel="noreferrer"
                                    target="_blank"
                                >
                                    [{action.action}]
                                </a>
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
