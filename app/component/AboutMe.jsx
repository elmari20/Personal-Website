import React, {useId} from 'react'
import Skills from './Skills';

const AboutMe = ({data, skills}) => {
    const { title, body } = data;
    const id = useId();
  return (
    <section>
        <h2 className="mb-6">
            {title}
        </h2>
            {body?.map((el, index) => (
                <p key={`${id}_${index}`} className="mb-6">
                    {el}
                </p>
            ))}

          <Skills data={skills}/>
    </section>
  )
}

export default AboutMe