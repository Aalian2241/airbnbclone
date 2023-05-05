import Carousel from "./Components/Carousel/Carousel";
import Navbar from "./Components/NavBar/Navbar";
import Rentals from "./Components/Rentals/Rentals";

function App() {
  return (
    <div className="container-fluid">
     {/* NavBar */}

      <Navbar/>
     {/* Site content */}
     <Rentals/> 
     {/* MapContent only displayed when MapVisibility=on*/}
     {/* Toggle Button */}
    </div>
  );
}

export default App;
