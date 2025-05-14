
import { Routes, Route } from 'react-router-dom';
import Sidebars from "./components/Sidebars.jsx";
import HomePage from "./pages/HomePage";
import FavouritePage from "./pages/FavouritePage";
import Details from "./pages/Details";


function App() {
   
    return (
       <>
        <div className="flex min-h-screen">
        <Sidebars/>
        <div className="bg-slate-100 flex-1 p-6">
           <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritePage />} />
            <Route path="/details" element={<Details/>} />
         </Routes>
         </div>

         </div>
       </>
          
         
          
        
    
        
    );
}
export default App;
{/* <Header/>
          <Card name={1}/>
          <Card />
          <Footer/> */}
