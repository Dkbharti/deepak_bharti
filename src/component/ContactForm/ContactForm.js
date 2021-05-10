import React from 'react';
import emailjs from 'emailjs-com';
import Stars from '../../Assets/stars.jpg'
import {Parallax} from 'react-parallax';
import{animateScroll as scroll} from 'react-scroll'
import './styles.scss';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

 function ContactForm() {


    const [open, setOpen] = React.useState(false);
    const [sub , setSub] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const validVal=(e)=>{
      if(e.target.value!==''){
        setSub(true)
      }else{
          setSub(false)
      }
  }
  const sendEmail=(e)=> {
    e.preventDefault();
    console.log(e.target.name.value)
   
    
        
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
          
        <div className='form__main container row'>
            <div className='offset-md-2 col-md-2'>
                <h1>Contact/Query</h1>
            </div>
            <div className='offset-md-4 col-md-4'>
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
                        <textarea onChange={validVal} className='form-control' name="message" />
                    </div>
                    <input disabled={!sub} onClick={handleClickOpen} className='btn__sub mt-2' type="submit" value="Send" />
            </form>
            </div>
        </div>
        <div onClick={scrollToTop} className='upArrow'>
            <ExpandLessIcon  style={{fontSize:45}}/>
        </div>
    </Parallax>
        <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            
            <DialogContent>
            <DialogContentText id="alert-dialog-description">
               Your message has been delivered successfully.
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            
          <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>    
    </div>
  );
}

export default ContactForm;