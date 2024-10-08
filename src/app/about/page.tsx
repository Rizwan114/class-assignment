import React from 'react'
import  cssStyle  from './about.module.css'
 console.log(cssStyle,"CSS-Style")

const About = () => {
  return (
    <div className='a'>
      <h1 className='ap'>About Page</h1>
      <br />
      <p className='ps' >this page is only run local host 3000</p>
      <br />
      <p className='ps'>this website is amazing</p>

      <h2 className={cssStyle.y}>
        you cab visit this website
      </h2>
    </div>

  )
}

export default About
