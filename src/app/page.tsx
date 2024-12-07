import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Project from "./components/project";
import Work from "./components/work";
import Customise from "./components/Customise";
import Work2 from "./components/work2";

import Footer from "./components/footer";
import Sponcer from "./components/Sponsors";

export default function Home(){
    return(
        <div>
            
            <Navbar/>
            <Hero/>
            <Project/>
            <Work/>
            <Customise/>
            <Work2/>
            <Sponcer/>
            <Footer/>
        </div>
    )
}