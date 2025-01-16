import carouselData from '../../assets/Data/CarouselData';  
// import carouselData from '../../assets/Data/CarouselData.js';


const Carousel = () => {
    return (
        <div className='flex-col flex bg-black'>
        {/* <div className='text-xl font-bold py-8  text-white pl-48 '> 프로젝트 </div> */}
        <div className='w-screen h-screen bg-blue-300  relative flex'>
            
            <div className='bg-gradient-to-t to-black from-transparent w-screen h-12 absolute top-0 '/>
                <div className='bg-black w-3/12 h-full items-center flex'>
                    <div className='w-full h-3/5 flex justify-center flex-col px-16 text-white'>
                        <div className='text-sm'> {carouselData[0].venue} </div>
                        <div className='text-5xl font-bold py-4'> {carouselData[0].title} </div>
                        <div className='text-sm/6 whitespace-pre-line'> {carouselData[0].desc} </div>
                    </div>
                </div>
                <div className='bg-red-400 w-9/12 h-full'>
                    <img src={carouselData[0].imgUrl} alt="" className='object-cover w-full h-full'/>

                </div>
            <div className='bg-gradient-to-t from-black to-transparent w-screen h-12 absolute bottom-0 '/>
        </div>
        </div>
    );
};

export default Carousel;