import React, {useEffect} from 'react';
import useStore from '../store';
import {BiAlignLeft} from 'react-icons/bi'
import {FcPhone, FcInvite, FcCalendar} from 'react-icons/fc'
import {TfiLocationPin} from  'react-icons/tfi'
import {AiFillGithub} from 'react-icons/ai'
import {RiNotionFill} from 'react-icons/ri'

const Contact = () => {
    const {contactModal } =useStore();

    useEffect(() => {
        const preventScroll = (e :WheelEvent) => {
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
            <div className='bg-black opacity-80 fixed top-0 transition-all ease-in-out duration-700 overflow-hidden'
            style={contactModal ? {width:'100%', height:'100%'} : undefined} ></div>

            {/* <div className='fixed top-0 right-0 h-screen bg-white transition-all duration-700 ease-in-out'
                style={
                contactModal
                ? { width:'0%', clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }
                : { width:'30%', clipPath: 'polygon(0 0, 100% 0, 80% 100%, 0 100%)' }
                }
            >
                <div className='roboto-font relative top-96'>
                    Hey there!
                </div>
            </div> */}

            <div className={`fixed top-0 right-0 h-screen transition-all duration-700 bg-white `}
                style={contactModal? { width:'30%' } : { width:'0%' } }
            >
                <div className='relative text-base/9 top-1/4  w-full h-96 flex flex-col whitespace-nowrap pl-16'>
                    {/* <div className='font-serif text-9xl absolute -top-20 left-20'> &quot; </div> */}
                    <div className='font-serif text-3xl/12 font-black'>
                        I hope to<br/>
                        have a good<br/>
                        relationship with you.
                    </div>
                    <div className='w-10 h-1 border-b-2 border-zinc-600 my-5'></div>
                    {/* <div className='font-serif text-9xl absolute top-20 left-20'> &quot; </div> */}
                    <div className='flex items-center'><BiAlignLeft/> &nbsp; 이택현</div>
                    <div className='flex items-center'><FcCalendar/> &nbsp; 1991. 01. 17</div>
                    <div className='flex items-center '><span className='text-yellow-300'> <TfiLocationPin/></span> &nbsp; 서울시 성동구 성수동</div>
                    <div className='flex items-center'><FcPhone/> &nbsp; 010-9155-3194</div>
                    <div className='flex items-center'><FcInvite/> &nbsp; miloe0117@gmail.com</div>
                    <div className='flex flex-row  w-full h-40 pt-4'>
                    <div className='text-3xl mr-3'>
                        <a href="https://github.com/miloe2" target="_blank" rel="noopener noreferrer">
                            <AiFillGithub/>
                        </a>
                    </div>
                    <div className='text-3xl'>
                        <a href="https://www.notion.so/fc901c1fe0154841951b4113c63404ea" target="_blank" rel="noopener noreferrer">
                            <RiNotionFill/>
                        </a>
                    </div>


                    </div>
                </div>

            </div>



            
        </React.Fragment>
    );
};

export default Contact;