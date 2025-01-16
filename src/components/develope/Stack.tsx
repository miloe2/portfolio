import DevPrjData from '../../assets/Data/DevPrjData';
import useStore from '../../store';
import StackCircle from '../detail/StackCircle';

const Stack = () => {
    const { devPage } = useStore();
    const project = DevPrjData.find((data) => data.title === devPage);

    if (!project) {
      return null; // 프로젝트가 없을 경우 렌더링하지 않음
    }
  
    const stacks = project.stack.split(',').map((stack) => stack.trim());
  

    return (
        <div className='w-3xl min-h-[300px] justify-center items-center flex '>
            <div className='w-full h-full flex justify-center items-center flex-col'>
            <div className=' mb-4 font-bold text-lg'>Stack</div>
            <div  className='flex  flex-wrap justify-center  bg-zinc-50 rounded-xl px-4 pb-4 pt-6'>
                {stacks.map((stack, index) => {
                    if (StackCircle[stack]) {
                        return (
                        <div key={index} className='mx-3  items-center flex flex-col mb-4 '>
                            {StackCircle[stack](index)}
                        </div>
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