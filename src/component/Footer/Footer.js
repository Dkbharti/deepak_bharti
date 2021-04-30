import React from 'react'
import './styles.scss';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
const Footer = () => {
    return (
        <div className='footerMain mt-2'>
                <div className='footerIcons'>              
                        <a className='links' rel="noreferrer" target='_blank' href="https://github.com/Dkbharti"><GitHubIcon className='icons' fontSize='large' /></a>
                        <a className='links'rel="noreferrer" target='_blank' href="https://www.instagram.com/dkbharti.0404/"><LinkedInIcon className='icons' fontSize='large'/></a>                  
                        <a className='links'rel="noreferrer" target='_blank' href="https://www.linkedin.com/in/deepak-bharti-94947999/"><InstagramIcon className='icons' fontSize='large'/></a>
                   
                </div>
                <p>
                    Created By Deepak Bharti.
                </p>
        </div>
    )
}

export default Footer
