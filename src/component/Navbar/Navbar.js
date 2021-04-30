import React from 'react'
import './styles.scss';
import {Link} from 'react-scroll';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
const Navbar = () => {
    return (
        <nav>
            <div className='nav'>
                    <div className='brand'>
                        <Link activeClass='active'to='home' spy={true} smooth={true}  offset={-30}  duration={1000}>DK BHARTI</Link>
                    </div>
                    <ul className='navItems'>
                        <Link activeClass='active'to='aboutme' spy={true} smooth={true}  offset={-70}  duration={1000}><li className='items'>About Me</li></Link>
                        <Link activeClass='active'to='resume' spy={true} smooth={true} offset={-50}  duration={1000}><li className='items'>Resume</li></Link>
                        <Link activeClass='active'to='workwork' spy={true} smooth={true}  offset={-65}  duration={1000}><li className='items'>Work</li></Link>
                    </ul>
                    <div className='contactMe'>
                     <Link activeClass='active'to='contactForm' spy={true} smooth={true}   duration={1000}><MailOutlineIcon /></Link>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar
