import React from 'react'
import './SkillsInfoCard.scss';

const SkillsInfoCard = ({heading,skills}) => {
  return (
    <div className='skills-info-card '>
      <h6>{heading}</h6>

      <div className="skills-info-content ">
        {skills.map((item,index)=>(
            <React.Fragment key={`skill_${index}`}>
                <div className="skill-info ">
                    <p>{item.skills}</p>
                    <p className="percentage ">{item.percentage}</p>
                </div>

                <div className="skill-progress-bg ">
                    <div className="skill-progress w-0 h-full bg-gradient-to-r from-purple-400 via-transparent to-indigo-600 rounded-lg transition-all duration-500 ease-in-out" style={{width:item.percentage}}>

                    </div>
                </div>
            </React.Fragment>
        ))}
      </div>
    </div>
  )
}

export default SkillsInfoCard
