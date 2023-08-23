import React from 'react';
interface Text2PargProps {
    title : string;
    desc : string;
}

const Text2Parg :React.FC<Text2PargProps>  = ({title, desc}) => {
    return (
        <div className='w-screen h-auto flex justify-center items-center'>
            <div className='w-3/4 h-40  flex justify-center items-center'>
                <div className='text-4xl leading-12 font-bold whitespace-pre-line mx-10'>{title}</div>
                <div className='text-xs leading-6 whitespace-pre-line mx-10'> {desc}</div>
            </div>
        </div>
    );
};

export default Text2Parg;