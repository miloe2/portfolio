import React from 'react';
import gitIcon from '../../assets/Images/Icons/GitHub_Logo.svg'
interface ViewCodeProps {
    bgColor :string;
    site : string;
    git : string;
    txtColor : string;
    notice?: string;
}

const ViewCode :React.FC<ViewCodeProps> = ({bgColor, txtColor, site, git, notice}) => {
        

    return (
        <div className={`w-screen h-auto bg-${bgColor} flex justify-center items-center py-10 text-${txtColor}`} >
           <div className='flex flex-col mr-10 w-auto h-auto'>
           <div className=' underline  font-bold '> 
                {site !== '#' ? (<a href={site} target="_blank" rel="noopener noreferrer">Visit Site</a>): null}

             </div>
             {notice && (
                <div className='no-underline text-sm font-normal'>{notice}</div>
             ) }
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