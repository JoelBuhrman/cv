import React from 'react'
import Project from './Project'
import {personal, work, school} from './projects.js'

const MyProjects = () => (
  <div className="container">
    <div className="type">PERSONAL</div>
    {personal.map(p => (
      <Project
        title={p.title}
        desc={p.description}
        logo={p.logo}
        github={p.github}
        bitbucket={p.bitbucket}
        url={p.url}
        />
    ))}
    <div className="type">SCHOOL</div>
      {school.map(s => (
        <Project
          title={s.title}
          desc={s.description}
          logo={s.logo}
          github={s.github}
          bitbucket={s.bitbucket}
          url={s.url}
          />
      ))}
    <div className="type">WORK</div>
      {work.map(w => (
        <Project
          title={w.title}
          desc={w.description}
          logo={w.logo}
          github={w.github}
          bitbucket={w.bitbucket}
          url={w.url}
          />
      ))}
  </div>
)

export default MyProjects
