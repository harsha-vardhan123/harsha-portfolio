import React from 'react'
import "./SkillCard.scss"

const SkillCard = ({title,iconUrl,isActive,onClick}) => {
  return (
    <div className={`skills-card ${isActive ? "active" : ""} `}
    onClick={()=> onClick()}>
      <div className="skill-icon">
        <img className='' src={iconUrl} alt={title} />
      </div>
      <span className="">{title}</span>
    </div>
  )
}

export default SkillCard
