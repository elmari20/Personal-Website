import React from "react";

const ProjectCard = ({ project }) => {
  const GithubLink = project.links.find((link) => link.icon.type.name === "Github");

  const ifTeam = project.team ? project.team : null;
  const teamMembersJoin = project.teamMembers
    ? project.teamMembers.map((member) => member.name).join(", ")
    : null;

    

  return (
    <div className="flex bg-gray shadow-md p-4 mb-6 w-full transform hover:scale-105 ease-in-out duration-100">
        <img className="projectimage" src={project.image} alt={project.title} />
        <div className="flex flex-col justify-between flex-grow ml-4">
          <div>
            <h3 className="text-xl font-semibold text-blue-600 hover:text-blue-800">
              <a className="hover:text-yellow" href={GithubLink.url}>
                {project.title}
              </a>
            </h3>

            {ifTeam ? (
              <div>
                <h4 className="flex flex-row gap-1">
                  {project.team} with{" "}
                  {project.teamMembers.map((member, index) => (
                    <React.Fragment key={member.name}>
                      <a href={member.url}>
                        <h4 className="underline text-yellow">{member.name}</h4>
                      </a>
                        {index < project.teamMembers.length - 1 && <p>|</p>}
                    </React.Fragment>
                  ))}
                </h4>
              </div>
            ) : null}
            <p className="text-gray-600 mt-2">{project.description}</p>
          </div>
          <div className="flex mt-4">
            {project.links.map((link) => (
                <a key={link.icon} href={link.url} className="mr-4">
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
  );
};

const Projects = ({ projects }) => {
  return (
    <div>
      <h2 className="mt-10 mb-4">My Projects</h2>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
};

export default Projects;