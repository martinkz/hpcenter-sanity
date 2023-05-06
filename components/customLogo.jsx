import React from 'react'
import hplogo from '../assets/hp_logo.png'

export default function (props) {
  return (
    <img src={hplogo} alt="props.title" style={{width: '400px', marginRight: '20px'}} />
    // <div>
    //   {props.renderDefault({...props, title: props.title?.toUpperCase()})}
    // </div>
  )
}
