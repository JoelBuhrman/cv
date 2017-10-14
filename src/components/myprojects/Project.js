import React, {Component} from 'react'
import './styles/styles.css'

export default class Project extends Component{

  constructor(props){
    super(props)
    this.open= this.open.bind(this)
  }

  open(data){
    

    if(data.cssClass !== 'projectforme'){
      let url = ''
      if(data.url){
        url = data.url
      }
      else if(data.github){
        url = data.github
      }
      else if(data.bitbucket){
        url = data.bitbucket
      }
      console.log(url);
      window.open(url,'_blank');
    }
  }

  render(){
    return(

        <div onClick={()=>this.open(this.props)} className={"projectContainer "+this.props.cssClass}>
          <div className={this.props.index%2===1? "projectTitleRight": "projectTitleLeft"}>{this.props.title}</div>
          <div className={this.props.index%2===1? "fadeText projectDescriptionRight": "fadeText projectDescriptionLeft"}>{this.props.desc}{this.props.email && <a className="fadeText emaildesc" href="mailto:joel.buhrman@live.se">joel.buhrman@live.se</a>}</div>
          <div className={this.props.index%2===1? "projectLinksRight fadeText": "projectLinksLeft fadeText"}>
            {this.props.github &&
              <a className="fadeText url" target="_blank" href={""+ this.props.github}>Github</a>
            }
            {this.props.bitbucket &&
              <a className="fadeText url" target="_blank" href={""+ this.props.bitbucket}>Bitbucket</a>
            }
            {this.props.url &&
              <a className="fadeText url" target="_blank" href={""+ this.props.url} style={{marginLeft: this.props.github || this.prop.bitbucket ? 20:  0}}>URL</a>
            }
          </div>

        </div>

    )
  }
}
