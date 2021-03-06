import './head-page.css';
import Me from '../../img/julien.png';


function HeadPage() {

    return (
        <>
        <div className='container'>
            <section className='head-left'>
                <div className='head-title'>
                    <h2 id='head-title-first'>Bonjour, je suis</h2>
                    <h1>Julien PICQUET</h1>
                    <h2 id='head-title-third'>Concepteur - Développeur d'Application</h2>
                    <h4 id='head-title-fourth'>En recherche d'Alternance dès le 02/03/2022</h4>
                </div>
            </section>
            <section className='head-right'>
                    <div className="head-right-bg"></div>
                    <nav className='head-right-menu'>
                        <ul>
                            <li><a href="mailto:julienpicquet1@gmail.com">
                                <i className='far fa-envelope'></i>
                            </a></li>
                            <li><a href="https://www.linkedin.com/in/jpicquet/" target="_blank" rel='noreferrer'>
                                <i className='fab fa-linkedin'></i>
                            </a></li>
                            <li><a href="https://github.com/olderglow" target="_blank" rel='noreferrer'>
                                <i className='fab fa-github'></i>
                            </a></li>
                        </ul>
                    </nav>
                    <img src={Me} alt="Photoprofil" className='head-right-photo'/>
                </section>
            </div>
        </>
    )
}

export default HeadPage;