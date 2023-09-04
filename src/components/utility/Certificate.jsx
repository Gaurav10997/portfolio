import React from 'react'
import "./SideBar.css"
function Certificate({name,url}) {
  return (
    <div className="certificate">
        <h1>{name}</h1>
        <a href={url} target='_blank' rel="noreferrer" >VIEW CERTIFICATION</a>
        <h3>Hackerrank.com</h3>
    </div>
  )
}

export default Certificate