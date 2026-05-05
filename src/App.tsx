import Hero from "./components/hero";
import Links from "./components/Links";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <section id="center" className="bg-black">
        <Hero />
        <Links />
      </section>
      <Footer />
    </>
  );
}

export default App;
