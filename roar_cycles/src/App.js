import './App.css';
import BikeSection from './Components/BikeSection/BikeSection';
// import BikeCarousel from './Components/BikeCarousel/BikeCarousel';
import BikeSectionHeader from './Components/BikeSection/BikeSectionHeader';
// import Landpage from './Components/Landpage/Landpage';
import BikeColor from './Components/BikeSection/BikeColor';
import BikeRim from './Components/BikeSection/BikeRim';
import Gallery from './Components/Gallery/Gallery';
import GalleryCarousel from './Components/Gallery/GalleryCarousel';
// import NavbarHamburger from './Components/Navbar/NavbarHamburger';

function App() {
  return (
    <div className="App">
      {/* <Landpage /> */}
      {/* <NavbarHamburger /> */}
      {/* <BikeCarousel /> */}
      <BikeSectionHeader />
      {/* <BikeSection /> */}
      <BikeColor />
      <Gallery />
      {/* <GalleryCarousel /> */}
    </div>
  );
}

export default App;
