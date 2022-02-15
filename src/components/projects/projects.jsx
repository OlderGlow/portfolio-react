import './projects.css';
import AtelierCreatif from '../../img/projects/atelier-creatif.png';
import Drunk from '../../img/projects/drunk.png';
function Projects() {
    return (
        <div className='projects-container'>
            <div className='projects-header'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#ffc107"
                        fillOpacity="1"
                        d="M0,192L26.7,186.7C53.3,181,107,171,160,165.3C213.3,160,267,160,320,176C373.3,192,427,224,480,224C533.3,224,587,192,640,181.3C693.3,171,747,181,800,186.7C853.3,192,907,192,960,181.3C1013.3,171,1067,149,1120,160C1173.3,171,1227,213,1280,202.7C1333.3,192,1387,128,1413,96L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
                <div className='projects-title'>
                    <h1>Projets</h1>
                </div>
            </div>
            <div className='projects-wrapper'>
                <div className='projects-left'>
                    <div className='projects-left-wrapper'>
                        <h2>L'Atelier Créatif</h2>
                        <a href="https://latelier-creatif.vercel.app" target="_blank" rel='noreferrer'>
                            <img
                                className='projects-left-img'
                                src={AtelierCreatif}
                                alt="L'Atelier Créatif"/>
                        </a>
                    </div>
                </div>
                <div className='projects-right'>
                    <div className='projects-left-wrapper'>
                        <h2>Drunk</h2>
                        <a href="https://drunk-game-react.vercel.app" target="_blank" rel='noreferrer'>
                            <img
                                className='projects-left-img'
                                src={Drunk}
                                alt="Drunk"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects