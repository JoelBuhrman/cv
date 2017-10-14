import React, {Component} from 'react'
import Project from './Project'
import {personal, work, school} from './projects.js'

class MyProjects extends Component{

  constructor(props){
    super(props)
    this.state={
      open: 'personalprojects'
    }
    this.changeProjects = this.changeProjects.bind(this)
  }

  changeProjects(event){
    this.setState({
      open: event.target.value
    })
  }

  render(){
    return(
      <div>
        {this.state.open === 'schoolprojects' &&
          <div>
            {school.map((p,i) => (
              <Project
                email={p.email}
                cssClass={p.css}
                title={p.title}
                desc={p.description}
                logo={p.logo}
                github={p.github}
                bitbucket={p.bitbucket}
                url={p.url}
                index= {i}
                />
            ))}

          </div>
        }
        {this.state.open === 'personalprojects' &&
          <div>
            {personal.map((p,i) => (
              <Project
                email={p.email}
                cssClass={p.css}
                title={p.title}
                desc={p.description}
                logo={p.logo}
                github={p.github}
                bitbucket={p.bitbucket}
                url={p.url}
                index= {i}
                />
            ))}

          </div>
        }

        {this.state.open === 'workprojects' &&
          <div>
            {work.map((p,i) => (
              <Project
                email={p.email}
                cssClass={p.css}
                title={p.title}
                desc={p.description}
                logo={p.logo}
                github={p.github}
                bitbucket={p.bitbucket}
                url={p.url}
                index= {i}
                />
            ))}

          </div>
        }
        <div className="square">
          <select className="squareText" onChange={this.changeProjects} value={this.state.value}>
            <option value="personalprojects">PERSONAL PROJECTS</option>
            <option value="schoolprojects" >SCHOOL PROJECTS</option>
            <option value="workprojects">WORK PROJECTS</option>
          </select>
        </div>
      </div>
    )
  }

}

export default MyProjects
