import HeroSection from "./components/pages/HeroSection";
import Navbar from "./components/pages/Navbar";
import ProfessionalHockeysClub from "./components/pages/ProfessionalHockeysClub";

function App() {
  return (
    <div className="w-full lg:max-w-260 flex items-center flex-col m-auto border-[1px] border-amber-100">
      <div className="main max-w-292.5 m-auto">
      <Navbar />
      <HeroSection/>
      <ProfessionalHockeysClub/>
      </div>
      
    </div>
  );
}

export default App;
