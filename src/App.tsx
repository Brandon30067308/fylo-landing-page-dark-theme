import { FC } from "react";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import Banner from "./components/Banner/Banner";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";

const App: FC = () => {
  return (
    <div className="App font-raleway font-normal text-white overflow-x-hidden">
      <Hero />
      <Services />
      <Banner />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default App;
