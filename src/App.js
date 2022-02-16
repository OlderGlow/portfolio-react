import HeadPage from "./components/head-page/head-page";
import AboutMe from "./components/about-me/about-me";
import Technologies from "./components/technologies/technologies";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
function App() {
    return (
        <div>
            <HeadPage/>
            <AboutMe/>
            <Technologies/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;
