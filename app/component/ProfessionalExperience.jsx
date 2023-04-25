import React from 'react'

const ProfessionalExperience = ({data}) => {

    const {title, experiences} = data;
  return (
    <div className="flex flex-col gap-3">
        <h2>{title}</h2>
        {experiences.map(({role, description, current}) => (
            <div key={role} className="flex flex-col rounded-lg">
                <span className={current ? 'h-2 bg-green' : 'h-2 bg-gray'}/>
                <div className="p-6 bg-gray drop-shadow-xl">
                    <h3>{role}</h3>
                    <p>{description}</p>
                </div>
            </div>
        ))}

    </div>
  )
}

export default ProfessionalExperience
