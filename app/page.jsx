import React from 'react'
import AboutMe from './component/AboutMe'
import ProfessionalExperience from './component/ProfessionalExperience';
import { aboutMe, skills, professionalData } from "../data/page-data";

const Page = () => {
    return (
        <div>
            <AboutMe data={ aboutMe } skills={ skills }/>
            <ProfessionalExperience data={professionalData}/>
        </div>
    )
}


export default Page