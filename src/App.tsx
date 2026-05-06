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

        {/* Gradient overlay for smooth transition to card */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent z-10" />

        {/* Card over the image */}
        <div className="relative z-20 px-4 pb-8 md:pb-12 max-w-6xl mx-auto w-full">
          <Card imageSrc={banner1} link="https://www.youtube.com/@leochinabr" />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
