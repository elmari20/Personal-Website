import React from 'react'

const ProfessionalExperience = ({data}) => {
    const {title, experiences} = data;
    return (
        <div className="flex flex-col gap-3">
            <h2>{title}</h2>
            {experiences.map(({title, company, date, description, current}) => (
                <div key={title} className="flex flex-col transform hover:scale-105 ease-in-out duration-100">
                    <span className={current ? 'h-2 bg-yellow' : 'h-2 bg-graydark'}/>
                    <div className="p-6 bg-gray shadow-md ">
                        <h3 className="text-xl font-semibold">{title}</h3>
                        <h4 className="text-yellow">{company} / {date}</h4>
                        <p>{description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProfessionalExperience