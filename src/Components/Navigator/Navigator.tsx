import { useNavigate } from 'react-router-dom';
import {BiWorld} from 'react-icons/bi'
import useStore from '../../store';

const Navigator = () => {
    const { currentPage, setCurrentPage } = useStore();
    const navigator = useNavigate();

    const handleClick = (route :string, page:string) => {
        navigator(route);
        setCurrentPage(page);
    };

    const navItems = [
        { route: '/', page: 'home', label: 'home' },
        { route: '/develope', page: 'dev', label: 'work.Dev' },
        { route: '/exhibitions', page: 'exhibit', label: 'work.Exhibit' },
        { route: '/about', page: 'about', label: 'About' },
    ];

    return (
        <div className='w-full h-16 fixed top-0 overflow-x-hidden box-border flex justify-between overflow-hidden z-50'>
            <div className="w-24 justify-center items-center flex"></div>
            <div className='relative w-1/3 flex text-xs text-center items-center justify-end font-bold text-[#8c8c8c] cursor-pointer'>
                {navItems.map(({ route, page, label }) => (
                    <div 
                        key={route}
                        className={`w-20 py-4 mr-1 ${currentPage === page ? 'text-[#090909]' : ''}`}
                        onClick={() => handleClick(route, page)}
                    >
                        {label}
                    </div>
                ))}
                <div className='w-20 py-4 mx-1 text-xl text-[#090909]'><BiWorld/></div>
            </div>
        </div>
    );
};

export default Navigator;
