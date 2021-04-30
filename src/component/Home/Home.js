import React from 'react'
import './styles.scss';
import Particles from 'react-particles-js';
import Params from '../../particle-config.json'
import TypeWriter from 'typewriter-effect'
const Home = () => {
    
    return (
        <div id='home' className='main col-sm-12'>
            <div className='gap '></div>
           <div className='offset-3 '>
                <h1>Hey There!</h1>
                <h1>I'm Deepak Bharti</h1>
                <h1>I'm a <span>Full Stack Developer.</span></h1>
                <h2><TypeWriter options={{loop:true}} onInit={(typeWriter)=>{
                    typeWriter.typeString('Designing').pauseFor(1800).deleteAll()
                    .typeString('Coding').pauseFor(1500).deleteAll()
                    .typeString('Teaching').pauseFor(1500).deleteAll()
                    .typeString('Sports').pauseFor(1500).deleteAll()
                    .typeString('Gaming').pauseFor(1500).deleteAll()
                    .typeString('Travel').pauseFor(1500).deleteAll()
                    .start()
                }}/></h2>
           </div>
           <div className='particle' ><Particles params={Params}/></div>
           
        </div>
    )
}

export default Home
