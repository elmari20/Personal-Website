import React from 'react'
import AboutMe from './component/AboutMe'
import ProfessionalExperience from './component/ProfessionalExperience';
import { aboutMe, skills, professionalData, projectsData } from "../data/page-data";
import Projects from './component/Projects';

const Page = () => {
    return (
        <div>
            <AboutMe data={ aboutMe } skills={ skills }/>
            <ProfessionalExperience data={professionalData}/>
            <Projects projects={projectsData}/>
        </div>
    )
}


export default Page