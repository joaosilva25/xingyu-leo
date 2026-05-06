import Hero from "./components/hero";
import Footer from "./components/Footer";
import Card from "./components/Card";
import BannerMobile from "./assets/BannerMobile.jpeg";
import banner1 from "./assets/BANNER12.png";

function App() {
  return (
    <>
      <div
        className="relative min-h-[100dvh] flex flex-col bg-cover bg-top md:bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${BannerMobile})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col">
          <Hero />
        </div>

        {/* Card over the image */}
        <div className="relative z-10 px-4 pb-8 md:pb-12 max-w-6xl mx-auto w-full">
          <Card imageSrc={banner1} link="https://www.youtube.com/@leochinabr" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
