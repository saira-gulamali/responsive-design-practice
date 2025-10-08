import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-secondary">
      <Navbar />
      <HeroSection />
      <FeatureSection />
    </div>
  );
}

export default App;
