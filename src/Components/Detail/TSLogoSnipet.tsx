import tslogo from '../../assets/Images/Icons/Typescript_logo_2020.svg'

const TSLogoSnipet = () => {
    return (
        <div className='w-full h-4/5 flex itmes-center justify-center '>
            <div className='w-5/12 h-full flex flex-col p-10 justify-center  relative '>
                <div className='flex flex-row'>
                    <div className='w-20 border-4 rounded-full border-fuchsia-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-orange-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-yellow-400 mr-5'/>

                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-40 border-4 rounded-full border-blue-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-rose-600 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-orange-400 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-40 border-4 rounded-full border-zinc-500 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-green-600 mr-5'/>
                </div>
                
                <div className='w-44 h-auto mt-10'>
                    <img src={tslogo} alt="" />
                </div>
                <div className='flex flex-row mt-10'>
                    <div className='w-20 border-4 rounded-full border-rose-500 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-green-200 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-blue-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-blue-200 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-orange-400 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-blue-700 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-blue-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-cyan-400 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-blue-500 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-rose-600 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-orange-400 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-yellow-500 mr-5'/>
                    <div className='w-20 border-4 rounded-full border-blue-500 mr-5'/>
                </div>
                <div className='flex flex-row mt-8'>
                    <div className='w-20 border-4 rounded-full border-fuchsia-600 mr-5'/>
                    <div className='w-40 border-4 rounded-full border-yellow-500 mr-5'/>
                </div>
                {/* <div className='w-40 h-full absolute right-0 bg-gradient-to-r from-transparent to-white'/> */}
                

            
            </div>
            
            <div className='w-1/2 h-full  justify-end items-center flex'>
                <div className='bg-[#FF5851] w-3/4 h-3/5 p-16 justify-center flex flex-col '>
                <div className='text-4xl/12 font-bold whitespace-pre-line text-[#0041AF]  '> Typescript </div>
                    <div className='text-xs/6 whitespace-pre-line h-auto mt-5 text-white'> 
                    현직 개발 트렌드와 가독성 및 안정성을 높이기 위하여, <br/>
                    TypeScript (React.ts)를 적용하였습니다.   
                    </div>
                </div>
            
            </div>
        </div>

    );
};

export default TSLogoSnipet;