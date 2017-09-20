import React, {Component} from 'react'
import Course from './Course'
import {courses} from './courses'

const Grades = () => (
  <div className="grades">
    {courses.map(course => (
      <Course title={course.title} grade={course.grade}/>
    ))}
  </div>
)


export default Grades
