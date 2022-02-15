import './head-page.css';
import Me from '../../img/julien.png';

function HeadPage() {
    return (
        <div className='container'>
            <div className='head-left'>
                <div className='head-title'>
                    <h2>Bonjour, je suis</h2>
                    <h1>Julien PICQUET</h1>
                    <h2>Concepteur - Développeur d'Application</h2>
                </div>
            </div>
            <div className='head-right'>
                <div className="head-right-bg"></div>
                <div className='head-right-menu'>
                <a href="mailto:julienpicquet1@gmail.com">
                    <i className='far fa-envelope'></i>
                </a>
                <a href="https://www.linkedin.com/in/jpicquet/" target="_blank" rel='noreferrer'>
                    <i className='fab fa-linkedin'></i>
                </a>
                <a href="https://github.com/olderglow" target="_blank" rel='noreferrer'>
                    <i className='fab fa-github'></i>
                </a>
                </div>
                <img src={Me} alt="Photoprofil" className='head-right-photo'/>
            </div>
        </div>
    )
}

export default HeadPage;