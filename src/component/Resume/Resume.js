import React from 'react';

import {useState} from 'react'
import './styles.scss'
export default function Resume() {
    const[skills]= useState( [
        {
          "name": "ReactJs",
          "level": "85%"
        },
        {
          "name": "HTML5",
          "level": "80%"
        },
        {
          "name": "CSS, Bootstrap",
          "level": "80%"
        },
        {
          "name": "Mongo DB",
          "level": "85%"
        },
        {
          "name": "Node & Express",
          "level": "75%"
        },
        {
          "name": "Python OOPS Concepts",
          "level": "85%"
        }
      ])
      let Myskills = skills.map(function(skills){
        let className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}></span><em>{skills.name}</em></li>
      })
    return (
        <div id='resume' >
           <div className='container'>
               <div className='pt-3 row' style={{borderBottom:'rgba(62,122,147,0.3) 1px solid',borderTop:'#D3D3D3 0.5px solid',marginBottom:'30px'}} >
                    <div className='col-3'>
                            <h4 style={{borderBottom:'#A9A9A9 3px solid'}}>EDUCATION</h4>
                    </div>
                    <div className='offset-1'>
                            <h4>Maharshi Dayanand University Rohtak</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Bachelor in Electronics And Communication Engg. •May 2019</p>
                            <p style={{fontSize:'16px'}}>Scored 70 Percentile</p>
                    </div>
               </div>
           </div>
           <div className='container'>
               <div style={{borderBottom:'#A9A9A9 1px solid',marginBottom:'30px'}} className='row'>
                    <div className='col-3'>
                            <h4 style={{borderBottom:'#696969 3px solid'}}>WORK</h4>
                    </div>
                    <div className='offset-1'>
                            <h4>Infosys Ltd.</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Software Engineer •Jan 2020- Present</p>
                            <p style={{fontSize:'16px'}}>MERN Stack Developer And Mainframe Developer</p>
                            <h4>Gandhi School</h4>
                            <p style={{fontSize:'18px',fontStyle:'italic'}}>Volunteered as Teacher •July 2018-Dec2019</p>
                            
                    </div>
               </div>
           </div>
           <div className='container'>
           <div style={{borderBottom:'#A9A9A9 1px solid',marginBottom:'50px'}} className='row'>
                    <div className='col-3'>
                            <h4 style={{borderBottom:'#696969 3px solid'}}>SKILLS</h4>
                    </div>
                    <div className=' col-8'>                    
                      <div className="bars">
                          <ul className="skills">
                              {Myskills}
                          </ul>
                      </div>                            
                    </div>
               </div>
           </div>

        </div>
    )
}
