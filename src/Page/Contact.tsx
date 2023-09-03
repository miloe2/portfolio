import React, {useEffect} from 'react';
import useStore from '../store';

const Contact = () => {
    const {contactModal } =useStore();

    useEffect(() => {
        const preventScroll = (e) => {
            e.preventDefault();
        };

        if (contactModal) {
            document.addEventListener('wheel', preventScroll, { passive: false });
        } else {
            document.removeEventListener('wheel', preventScroll);
        }

        return () => {
            document.removeEventListener('wheel', preventScroll);
        };
    }, [contactModal]);

    return (
        <React.Fragment>
            <div className='bg-black opacity-80 fixed top-0 transition-all duration-700 overflow-hidden'
            style={contactModal ? {width:'100%', height:'100%'} : undefined} ></div>

            <div className='fixed top-0 right-0 h-screen bg-white transition-width duration-700 ease-in-out'
            style={contactModal? {width:'30%'} : {width:'0%'}}
            >
                <div className='roboto-font relative top-96'>
                    Hey there!
                </div>



            </div>
            
        </React.Fragment>
    );
};

export default Contact;