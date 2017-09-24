import React, {Component} from 'react'
import Course from './Course'
import {year1, year2, year3, year4, year5} from './courses'
import Average from './Average'
import HP from './HP'

const Grades = () => (
  <div className="container">

    <Average />
    <HP />

    <div className="grades">
      <div className="year">YEAR 1</div>
      {year1.map(course => (
        <Course key={course.title} title={course.title} grade={course.grade}/>
      ))}
      <div className="year">YEAR 2</div>
      {year2.map(course => (
        <Course key={course.title} title={course.title} grade={course.grade}/>
      ))}
      <div className="year">YEAR 3</div>
      {year3.map(course => (
        <Course key={course.title} key={course.title} title={course.title} grade={course.grade}/>
      ))}
      <div className="year">YEAR 4</div>
      {year4.map(course => (
        <Course key={course.title} title={course.title} grade={course.grade}/>
      ))}
      <div className="year">YEAR 5</div>
      {year5.map(course => (
        <Course key={course.title} title={course.title} grade={course.grade}/>
      ))}

    </div>
  </div>
)


export default Grades
