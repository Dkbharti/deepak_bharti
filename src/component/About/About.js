import React from 'react'
import './styles.scss'
import GetAppIcon from '@material-ui/icons/GetApp';
import Dp from '../../Assets/dp.jpg';
import Resume from '../../Assets/Resume_Deepak.pdf'
export default function About() {
    return (
        <div id='aboutme' className={`${"aboutBack"} ${'mt-5'}`  } >
         <div className='container'>
                <div className='row'>
                    <div className='col-lg-2  mt-1'>
                        <img style={{width:'150px',margin:'20px 0'}} className='rounded-circle' src={Dp} alt=""/>
                    </div>
                    <div  className='col-lg-6 offset-2 mt-3' >
                        <h3 >About me</h3>
                        <p style={{fontSize:'17px'}}>My name is Deepak, I'm a Full Stack ReactJS Developer.
                         Currently I'm working at Infosys Ltd. as a Software Engg. while also volunteering as a teacher.</p>
                        <div className='row'>
                            <div className='col-4'>
                                <h3>Contact</h3> 
                                <p >Deepak Bharti</p>
                                <p >deepakdkbharti@gmail.com</p>
                                <p >+91 7206724372</p>
                            </div>
                            <div className='col-8'>
                                    <a href={Resume}><button className="resumeBtn">Download Resume <GetAppIcon/> </button></a>
                            </div>
                        </div>
                    </div>        
                </div>
                </div>
        </div>
        
    )
}
