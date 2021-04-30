import React,{useState} from 'react'
import {FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import './styles.scss'
import Dialog from '@material-ui/core/Dialog';
import {MdClose} from 'react-icons/md'
 const Model = ({showModel, setShowModal, slides})=>{
    const[current,setCurrent]=useState(0)
    const length= slides.length
    const nextSlide=()=>{
        setCurrent(current === length - 1 ? 0: current+1)
    }
    const prevSlide=()=>{
        setCurrent(current === 0 ? length-1: current-1)
    }
    

    if(!Array.isArray(slides) || slides.length<=0){
        return null;
    }
    const handleClose = () => {
        setShowModal(false);
      };
    return(
        <>
        
            <Dialog onClose={handleClose} fullScreen={true} fullWidth={true} maxWidth='xl' open={showModel} >
                <div className='modelWrapper'>
                    <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
                    <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide}/>
                    <div className='sliderImg'>
                    {slides.map((slide,index)=>{
                        return(
                            <div className={index === current?'slide active':'slide'} key={index}>
                                {index=== current && ( <img className='modelImg' src={slide.image} alt=''></img>)}                       
                            </div>
                        )
                    })}
                    </div>
                </div>
                <MdClose className='cross' onClick={()=>{setShowModal(prev=>!prev)}}/>
            </Dialog>
        </>
    )
}

export default Model;