import React, {Component} from 'react'
import './styles/styles.css'

const Course = (props) => (
  <div className="course">
    <div className="title">
      {props.title}
    </div>
    <div className="grade">
      {props.grade}
    </div>
  </div>
)

export default Course
