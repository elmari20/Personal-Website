"use client"
import React, {useState} from 'react'

const Skills = ({data}) => {
  const [activeTab, setActiveTab] = useState("personal");
  const setBg = (active) => activeTab === active ? 'bg-yellow' : 'bg-gray';

  const tabs = (
    <div className="flex">
    {['personal', 'programming', 'program'].map(el => (
      <button 
      key={el}
      type="button" 
      className={`btn ${setBg(el)} ${el === "personal" ? "text-center" : "text-center"}`}
      onClick={() => setActiveTab(el)}
      > 
      {el.charAt(0).toUpperCase() + el.slice(1)} SKILLS
      </button>
    ))}
  </div>
  )

  const content = (
    <ul className={`flex flex-row flex-wrap content-start list-none py-4 gap-2 ${activeTab === "personal" ? "justify-start" : "justify-start"}`}>
    {data[activeTab].map(({icon, text}) => (
      <li className="skill" key={text}><span>{icon}</span>{text}</li>
    ))}
  </ul>
  )

  return (
    <div>
      {tabs}
      {content}
    </div>
  )
}

export default Skills