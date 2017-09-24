import React, {Component} from 'react'
import './styles/styles.css'

export default class Project extends Component{

  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>
        <div className="content">
          <div className="projectTitle">{this.props.title}</div>
          <div className="projectDescription">{this.props.desc}</div>
          <div className="projectLinks">
            {this.props.github &&
              <a className="url" target="_blank" href={""+ this.props.github}>Github</a>
            }
            {this.props.bitbucket &&
              <a className="url" target="_blank" href={""+ this.props.bitbucket}>Bitbucket</a>
            }
            {this.props.url &&
              <a className="url" target="_blank" href={""+ this.props.url} style={{marginLeft: this.props.github || this.prop.bitbucket ? 20:  0}}>URL</a>
            }
          </div>
        </div>
      </div>
    )
  }
}
