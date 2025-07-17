
// import { Routes, Route } from 'react-router-dom';
// import Sidebars from "./components/Sidebars.jsx";
// import HomePage from "./pages/HomePage";
// import FavouritePage from "./pages/FavouritePage";
// import Details from "./pages/Details";


// function App() {
   
//     return (
//        <>
//         <div className="flex min-h-screen">
//         <Sidebars/>
//         <div className="bg-slate-100 flex-1 p-6">
//            <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/favourites" element={<FavouritePage />} />
//             <Route path="/details" element={<Details/>} />
//          </Routes>
//          </div>

//          </div>
//        </>
          
         
          
        
    
        
//     );
// }
// export default App;
// {/* <Header/>
//           <Card name={1}/>
//           <Card />
//           <Footer/> */}

      

import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavouritePage from './pages/FavouritePage';
import Details from './pages/Details';
import Sidebars, { Desktopsidebar, Mobilesidebar, MobileTopbar } from './components/Sidebars';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col md:flex-row">
      
      {/* Desktop sidebar (left side) */}
      <div className="hidden md:block md:w-64">
        <Desktopsidebar />
      </div>

      {/* Mobile Top Bar (top on small screens) */}
      <div className="block md:hidden w-full">
        <MobileTopbar />
      </div>

      {/* Main content */}
      <main className="flex-1 p-4 md:pt-8 pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritePage />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
        <Mobilesidebar />
      </div>
    </div>
  );
}

export default App;
