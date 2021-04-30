import React, { useState, useEffect } from 'react'
import './styles.scss';
import Particles from 'react-particles-js';
import Params from '../../particle-config.json'

import TypeWriterEffect from 'react-typewriter-effect';
const Home = () => {
    const [showType, setshowType] = useState(false)
    useEffect(()=>{
        setInterval(setshowType(true),5000)
    },[])
    
    return (
        <div id='home' className='main col-sm-12'>
            <div className='gap'></div>
           <div className='offset-3 '>
                <h1>Hey There!</h1>
                <h1>I'm Deepak Bharti</h1>
                <h1>I'm a <span>MERN Stack Developer.</span></h1>
                {showType?<h2><TypeWriterEffect
                    textStyle={{
                    fontFamily: 'Red Hat Display',
                    color: '#a7ff83',
                    fontWeight: 400,
                    fontSize: '1.2em',
                    }}
                    startDelay={1500}
                    cursorColor="#a7ff83"
                    multiText={[
                    '<Game/>',
                    '<Sports/>',
                    '<Design/>',
                    
                    '<Travel/>',
                    '<Code/>',
                    ]}
                    multiTextDelay={2000}
                    typeSpeed={100}
                /></h2>:null}
           </div>
           <div className='particle' ><Particles params={Params}/></div>
           
        </div>
    )
}

export default Home
