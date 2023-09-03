import React from 'react';
import useStore from '../store';

const Contact = () => {
    const {contactModal } =useStore();


    return (
        <React.Fragment>
            <div className='bg-black   opacity-80 fixed top-0 transition-all duration-700'
            style={contactModal ? {width:'100%', height:'100%'} : undefined}
            
            ></div>
            <div className='fixed top-0 right-0 h-screen bg-white transition-width duration-700 ease-in-out'
            style={contactModal? {width:'30%'} : {width:'0%'}}
            >

            </div>
            
            
            
        </React.Fragment>
    );
};

export default Contact;