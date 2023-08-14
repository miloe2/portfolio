import React from 'react';
import DevPrjData from '../../assets/Data/DevPrjData';
import useStore from '../../store';
import StackCircle from './../Detail/StackCircle';

const Stack = () => {
    const { devPage } = useStore();
    const project = DevPrjData.find((data) => data.title === devPage);

    if (!project) {
      return null; // 프로젝트가 없을 경우 렌더링하지 않음
    }
  
    const stacks = project.stack.split(',').map((stack) => stack.trim());
  

    return (
        <div className='w-full h-72  justify-center items-center flex'>
            <div className='w-3/4 h-full flex justify-center items-center flex-col'>
            <div className=' mb-10 font-bold text-xl'>Stack</div>
            <div  className='flex flex-row'>
                {stacks.map((stack, index) => {
                if (StackCircle[stack]) {
                    return (
                        <>
                            <div key={index} className='mr-10 justify-start items-center flex flex-col'>
                                {StackCircle[stack]()}
                            </div>
                        </>
                    );
                }
                return null;
                })}                       
                </div>
            </div>
        </div>
      );
    };
    
    export default Stack;