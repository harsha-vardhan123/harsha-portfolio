import React, { useState } from 'react'
import './Skills.scss';
import { SKILLS } from '../../utils/data';
import SkillCard from './SkillCard/SkillCard';
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard';

const Skills = () => {

  const[selectedSkill,setSelectedSkill] = useState(SKILLS[0]);

  const handleSelectedSkill =(data)=>{
    setSelectedSkill(data);
  }

  return (
   <section className='skills-container '>
    <h5 >Technical Proficiency</h5>

    <div className="skills-content  grid md:grid-cols-2 gap-4  ">
        <div className="skills ">
        {SKILLS.map((item)=>(
            <SkillCard
            key={item.title}
            iconUrl={item.icon}
            title={item.title}
            isActive={selectedSkill.title === item.title}
            onClick={()=>{
              handleSelectedSkill(item)
            }}
            />
        ))}
        </div>
        <div className="skills-info ">
        <SkillsInfoCard
        heading={selectedSkill.title}
        skills={selectedSkill.skills}
        />
        </div>
    </div>

   </section>
  )
}

export default Skills
