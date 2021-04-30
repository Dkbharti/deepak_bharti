import React,{useState} from 'react'
import { SkyData,WanderData,HooplaData } from '../../imageData'
import Model from './Model/Model'
import './styles.scss'
import Amazon from '../../Assets/workAmazon.jpg'
import Cycling from '../../Assets/Workcycling.jpg'
import Hoopla from '../../Assets/workHoopla.jpg'
import SkyTrack from '../../Assets/sky/one.jpg'
import wander from '../../Assets/wander/one.jpg'
import Card from './Card/Card'
const Work = () => {
    const[showHoopla,setShowHoopla] = useState(false)
    const[showSky,setShowSky] = useState(false)
    const[showWander,setShowWander] = useState(false)
    

    const openHoopla=()=>{
        setShowHoopla(prev=>!prev)
    }
    const openSky=()=>{
        setShowSky(prev=>!prev)
    }
    const openWander=()=>{
        setShowWander(prev=>!prev)
    }
    return (
        
            <div id='workwork' className='container mt-5'>
                <h6 className='title'>Some Of My Works.</h6>
                <div className='container'>
                        <div className="works mt-5">                          
                            <Card
                                title='Amazon Clone'
                                desc='The front-end was developed using React JS.
                                The login authentication was done using Firebase.
                                It includes cart funcationality.'
                                image={Amazon}
                                url='https://clone-d978e.web.app/'
                                btn='Link'
                            />
                            <Card
                                title='Cycling Hub'
                                desc='The front-end was developed using React JS.
                                The login authentication was done using Firebase.
                                It includes cart funcationality.'
                                image={Cycling}
                                url='https://dkbharti.github.io/Cycling-Hub/'
                                btn='Link'
                            />
                        </div>                     
                </div>
                <div className='works mt-5'>
                    <div onClick={openHoopla}>
                        <Card                            
                            title='Hoopla Shopping Cart'
                            desc='The front-end was developed using React JS.
                            The login authentication was done using Firebase.
                            It includes cart funcationality.'
                            image={Hoopla}
                            btn='Images'
                        />                        
                    </div>
                    <Model slides={HooplaData} showModel={showHoopla} setShowModal={setShowHoopla}/>
                    <div onClick={openSky}>
                        <Card                            
                            title='Sky Tracks'
                            desc='The front-end was developed using React JS.
                            The login authentication was done using Firebase.
                            It includes cart funcationality.'
                            image={SkyTrack}
                            btn='Images'
                        />                        
                    </div>
                    <Model slides={SkyData} showModel={showSky} setShowModal={setShowSky}/>
                    
                </div>
                <div className="works mt-5 mb-5">
                <div onClick={openWander}>
                        <Card                            
                            title='Wanderlust'
                            desc='The front-end was developed using React JS.
                            The login authentication was done using Firebase.
                            It includes cart funcationality.'
                            image={wander}
                            btn='Images'
                        />                        
                    </div>
                    <Model slides={WanderData} showModel={showWander} setShowModal={setShowWander}/>
                </div>
            
            </div>
       
    )
}

export default Work
