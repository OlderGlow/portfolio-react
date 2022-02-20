import HeadPage from "./components/head-page/head-page";
import AboutMe from "./components/about-me/about-me";
import Technologies from "./components/technologies/technologies";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import {
    GoogleReCaptchaProvider
  } from 'react-google-recaptcha-v3';
function App() {
    return (
        <div>
            <GoogleReCaptchaProvider reCaptchaKey={process.env.REACT_APP_RECAPTCHA_KEY}>
            <HeadPage/>
            <AboutMe/>
            <Technologies/>
            <Projects/>
            <Contact/>
            <Footer/>
            </GoogleReCaptchaProvider>
        </div>
    );
}

export default App;
