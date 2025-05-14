import { Link } from 'react-router-dom'; 

function Sidebars() {
    return (
        <>
        <Desktopsidebar></Desktopsidebar>
        <Mobilesidebar></Mobilesidebar>
        </>
        
    );
}
export default Sidebars;

function Desktopsidebar(){
    const logo = "/image.png";

    return(
        <div className="mt-0 bg-slate-100 p-3 md:p-14 border-r min-h-screenw-24 md:w-64  sm::block">
            <div className="mt-2 flex flex-col gap-5 sticky top-1 left-0">
                <div className=" mt-2 w-full">
                <img src={logo} className="w-16 h-16 md:w-32 md:h-32  object-contain" alt="Logo"/>
                
                </div>
                <ul className='hidden md:flex flex-col  space-y-2'>
                <li>
                <Link to={"/"} className="text-lg font-semibold text-gray-700 hover:text-blue-500 ">
                <span>HOME</span></Link>
                </li>
                <li>
                <Link to={"/favourites"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
                <span>FAVOURITES</span></Link>

                </li>
                
                </ul>

            </div>
        </div>
        
    );
}
function Mobilesidebar(){
    return(
        <div className="flex md:hidden fixed bottom-0 left-0 z-10 w-full bg-gray-100 border-t p-4">

            <ul className="flex justify-around w-full">
                <li>
                <Link to={"/"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
                <span>HOME</span></Link>
                </li>
                <li>
                <Link to={"/favourites"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
                <span>FAVOURITES</span></Link>

                </li>
                
                </ul>


        </div>
    );
}

