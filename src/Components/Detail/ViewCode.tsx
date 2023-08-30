import React from 'react';
import gitIcon from '../../assets/Images/Icons/GitHub_Logo.svg'
interface ViewCodeProps {
    bgColor :string;
    site : string;
    git : string;
    txtColor : string
}

const ViewCode :React.FC<ViewCodeProps> = ({bgColor, txtColor, site, git}) => {
        

    return (
        <div className={`w-screen h-auto bg-${bgColor} flex justify-center items-center py-10 text-${txtColor}`} >
            <div className='w-auto h-auto underline mr-10 font-bold'> 
                <a href={site} target="_blank" rel="noopener noreferrer">View Site</a>
             </div>
            <div className='w-8 h-8 bg-white rounded-full justify-center flex items-center'> 
                <a href={git} target="_blank" rel="noopener noreferrer">
                    <img src={gitIcon} alt="GitHub" className='w-full h-full object-cover'/>
                </a>
            </div>
        </div>
    );
};

export default ViewCode;