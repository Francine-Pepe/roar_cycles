import './App.css';
import BikeSection from './Components/BikeSection/BikeSection';
import BikeCarousel from './Components/BikeCarousel/BikeCarousel';
import BikeSectionHeader from './Components/BikeSection/BikeSectionHeader';
import Landpage from './Components/Landpage/Landpage';
import BikeColor from './Components/BikeSection/BikeColor';
import BikeRim from './Components/BikeSection/BikeRim';
import Gallery from './Components/Gallery/Gallery';
import GalleryCarousel from './Components/Gallery/GalleryCarousel';
// import NavbarHamburger from './Components/Navbar/NavbarHamburger';
import Contact from './Components/Contact/Contact';
import BikeNav from './Components/BikeSection/BikeNav';
import BikeInformation from './Components/BikeSection/BikeInformation';

function App() {
  return (
    <div className="App">
      <Landpage />
      {/* <NavbarHamburger /> */}
      <BikeCarousel />
      <BikeNav />
      {/* <BikeInformation /> */}
      {/* <BikeSectionHeader /> */}
      {/* <BikeSection /> */}
      {/* <BikeColor /> */}
      {/* <Gallery /> */}
      {/* <GalleryCarousel /> */}
      {/* <Contact /> */}
    </div>
  );
}

export default App;
