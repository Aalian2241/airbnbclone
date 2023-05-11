import Navbar from "./Components/NavBar/Navbar";
import Rentals from "./Components/Rentals/Rentals";
import { BrowserRouter, Link, Route,Routes, useLocation  } from "react-router-dom";
import MapComponent from "./Components/MapView/MapComponent";

function App() {
  return (
    <BrowserRouter>
      <div className="">
        {/* NavBar */}
        <Navbar />
        {/* Site content */}
        <Routes>
          <Route path="/map" element={<MapComponent />} />
          <Route path="/" element={<Rentals />} />
        </Routes>
        {/* Toggle Button */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function Footer() {
  const location = useLocation();
  const isMapVisible = location.pathname === '/map';

  return (
    <div className="flex justify-center items-center w-full mb-[1rem] fixed bottom-0">
      <div>
        {isMapVisible ? (
            <Link className="rounded-fullborder bg-gray-900 text-white rounded-3xl p-[0.8rem] border-black" to="/">Go to Rentals</Link>
        ) : (
          
          <Link className="rounded-fullborder bg-gray-900 text-white rounded-3xl p-[0.8rem] border-black" to="/map">Go to Map</Link>
        )}
      </div>
      
    </div>
  );
}


export default App;