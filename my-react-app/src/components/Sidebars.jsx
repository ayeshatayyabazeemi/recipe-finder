// import { Link } from 'react-router-dom'; 

// function Sidebars() {
//     return (
//         <>
//         <Desktopsidebar></Desktopsidebar>
//         <Mobilesidebar></Mobilesidebar>
//         </>
        
//     );
// }
// export default Sidebars;

// function Desktopsidebar() {
//   const logo = "/image.png";

//   return (
//     <div className="bg-slate-100 p-3 md:p-6 border-r min-h-screen md:w-64 sm::block">
//       <div className="flex flex-col gap-4 sticky top-2 left-2">
//         <div className="w-full">
//           <img
//             src={logo}
//             className="w-16 h-16 md:w-28 md:h-28 object-contain"
//             alt="Logo"
//           />
//         </div>

//         <ul className="hidden md:flex flex-col space-y-2">
//           <li>
//             <Link
//               to={"/"}
//               className="text-lg font-semibold text-gray-700 hover:text-blue-500"
//             >
//               <span>HOME</span>
//             </Link>
//           </li>
//           <li>
//             <Link
//               to={"/favourites"}
//               className="text-lg font-semibold text-gray-700 hover:text-blue-500"
//             >
//               <span>FAVOURITES</span>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// function Mobilesidebar(){
//     return(
//         <div className="flex md:hidden fixed bottom-0 left-0 z-10 w-full bg-gray-100 border-t p-4">

//             <ul className="flex justify-around w-full">
//                 <li>
//                 <Link to={"/"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
//                 <span>HOME</span></Link>
//                 </li>
//                 <li>
//                 <Link to={"/favourites"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
//                 <span>FAVOURITES</span></Link>

//                 </li>
                
//                 </ul>


//         </div>
//     );
// }

import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";

// ✅ Desktop Sidebar
export function Desktopsidebar() {
  const logo = "/image.png";
  return (
    <div className="bg-slate-100  h-screen sticky top-0 p-3 md:p-6 border-r min-h-screen md:w-64 sm::block">
      <div className="flex flex-col gap-4 sticky top-2 left-2">
        <div className="w-full">
          <img
            src={logo}
            className="w-16 h-16 md:w-28 md:h-28 object-contain"
            alt="Logo"
          />
        </div>
        <span className="text-xl font-semibold text-gray-800">Recipe Finder</span>
        <ul className="hidden md:flex flex-col space-y-2">
          <li>
            <Link to={"/"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
              <span>HOME</span>
            </Link>
          </li>
          <li>
            <Link to={"/favourites"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
              <span>FAVOURITES</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

// ✅ Mobile Topbar
export function MobileTopbar() {
  const logo = "/image.png";

  return (
    <div className="flex items-center justify-between bg-white shadow-md p-4 fixed top-0 left-0 w-full z-50 md:hidden">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        <span className="text-xl font-semibold text-gray-800">Recipe Finder</span>
      </div>
    </div>
  );
}


// ✅ Mobile Bottom Sidebar
export function Mobilesidebar() {
  return (
    <div className="flex md:hidden fixed bottom-0 left-0 z-10 w-full bg-gray-100 border-t p-4">
      <ul className="flex justify-around w-full">
        <li>
          <Link to={"/"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
            <span>HOME</span>
          </Link>
        </li>
        <li>
          <Link to={"/favourites"} className="text-lg font-semibold text-gray-700 hover:text-blue-500">
            <span>FAVOURITES</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

// (Optional default export, not needed in App.jsx anymore)
const Sidebars = () => (
  <>
    <Desktopsidebar />
    <MobileTopbar />
    <Mobilesidebar />
  </>
);

export default Sidebars;
