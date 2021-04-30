import React from 'react';
import emailjs from 'emailjs-com';
import Stars from '../../Assets/stars.jpg'
import {Parallax} from 'react-parallax';
import{animateScroll as scroll} from 'react-scroll'
import './styles.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
 function ContactForm() {

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_nf16pjk', e.target, 'user_bW27nJAB99vxXvu8pVqfS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  const scrollToTop = () => {
    scroll.scrollToTop();
};

  return (
      <div id='contactForm' className='mt-5'>
      <Parallax strength={600} bgImage={Stars}>
        <div className='form__main container'>
            <div className='offset-md-5 col-md-5'>
            <form className="contact-form" onSubmit={sendEmail}>  
                    <div className='form-group'>    
                        <label>Name</label>
                        <input className='form-control' type="text" name="name" />
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input className='form-control' type="email" name="email" />
                    </div>
                    <div className='form-group'>
                        <label >Message</label>
                        <textarea className='form-control' name="message" />
                    </div>
                    <input className='btn__sub mt-2' type="submit" value="Send" />
            </form>
            </div>
        </div>
        <div onClick={scrollToTop} className='upArrow'>
            <ExpandLessIcon  style={{fontSize:45}}/>
        </div>
    </Parallax>    
    </div>
  );
}

export default ContactForm;