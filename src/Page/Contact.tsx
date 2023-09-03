import React from 'react';
import useStore from '../store';

const Contact = () => {
    const {contactModal } =useStore();


    return (
        <React.Fragment>
            
            <div className='fixed top-0 right-0 h-screen bg-yellow-500 transition-width duration-700 ease-in-out'
            style={contactModal? {width:'30%'} : {width:'0%'}}
            >

            </div>

            
        </React.Fragment>
    );
};

export default Contact;