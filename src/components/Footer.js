import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-inner'>
                <Link to='/' className='footer-logo'>
                    Back2front &nbsp;<i className="fas fa-bolt"></i>
                </Link>
                <div className='footer-socials'>
                    <a href='https://github.com/adrienvictor-e' target='_blank' rel='noreferrer' className='social-icon-link' aria-label='GitHub'>
                        <i className='fab fa-github' />
                    </a>
                    <a href='https://www.linkedin.com/in/adrienvictor/' target='_blank' rel='noreferrer' className='social-icon-link' aria-label='LinkedIn'>
                        <i className='fab fa-linkedin' />
                    </a>
                </div>
                <div className="fb-page" data-href="https://www.facebook.com/adrienvictor/" data-tabs="" data-width="" data-height="" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/adrienvictor/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/adrienvictor/">Adrien Victor</a></blockquote></div>
                <small className='footer-copy'>Adrien Victor &copy; 2021-2026</small>
            </div>
        </div>
    )
}

export default Footer
