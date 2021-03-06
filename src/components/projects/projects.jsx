import './projects.css';
import AtelierCreatif from '../../img/projects/atelier-creatif.png';
import Drunk from '../../img/projects/drunk.png';
function Projects() {
    return (
        <div className='projects-container'>
            <section className='projects-header'>
                <div className='projects-title'>
                    <h1>Projets</h1>
                </div>
            </section>
            <div className='projects-wrapper'>
                <section className='projects-left'>
                    <div className='projects-left-wrapper'>
                        <h2>L'Atelier Créatif</h2>
                        <a href="https://latelier-creatif.vercel.app" target="_blank" rel='noreferrer'>
                            <img
                                className='projects-left-img'
                                src={AtelierCreatif}
                                alt="L'Atelier Créatif"/>
                        </a>
                    </div>
                </section>
                <section className='projects-right'>
                    <div className='projects-left-wrapper'>
                        <h2>Drunk</h2>
                        <a href="https://drunk-game-react.vercel.app" target="_blank" rel='noreferrer'>
                            <img
                                className='projects-left-img'
                                src={Drunk}
                                alt="Drunk"/>
                        </a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Projects