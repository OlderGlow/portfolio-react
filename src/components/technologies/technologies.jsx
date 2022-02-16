import Card from './card/card';
import './technologies.css';
import Angular from '../../img/technologies/angular.png';
import Css from '../../img/technologies/css3.png';
import React from '../../img/technologies/react.png';
import Spring from '../../img/technologies/spring.png';
import Php7 from '../../img/technologies/php7.png';
import SASS from '../../img/technologies/sass.png';
import Jee from '../../img/technologies/jee.png';
import Symfony from '../../img/technologies/symfony.png';
import NodeJS from '../../img/technologies/nodejs.png';
import Bootstrap from '../../img/technologies/bootstrap.png';
import Tailwind from '../../img/technologies/tailwind.png';
import Express from '../../img/technologies/express.png';

function Technologies() {
    return (
        <div className='technologies-container'>
            <div className='technologies-title'>
                <h1>Technologies et Langages de programmation</h1>
            </div>
            <div className='technologies-wrapper'>
                <div className='technologies-left'>
                    <div className='technologies-left-backend'>
                        <h2>Back-end</h2>
                        <div className='technologies-card-wrapper'>
                        {Card(Php7)}
                        {Card(Jee)}
                        {Card(Spring)}
                        {Card(Symfony)}
                        {Card(NodeJS)}
                        {Card(Express)}
                        </div>
                    </div>
                </div>
                <div className='technologies-right'>
                <div className='technologies-right-frontend'>
                        <h2>Front-end</h2>
                        <div className='technologies-card-wrapper'>
                        {Card(Angular)}
                        {Card(React)}
                        {Card(SASS)}
                        {Card(Css)}
                        {Card(Bootstrap)}
                        {Card(Tailwind)}
                        </div>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{position: 'absolute'}}>
                    <path
                        fill="#ffc107"
                        fillOpacity="1"
                        d="M0,192L26.7,186.7C53.3,181,107,171,160,165.3C213.3,160,267,160,320,176C373.3,192,427,224,480,224C533.3,224,587,192,640,181.3C693.3,171,747,181,800,186.7C853.3,192,907,192,960,181.3C1013.3,171,1067,149,1120,160C1173.3,171,1227,213,1280,202.7C1333.3,192,1387,128,1413,96L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
                </svg>
        </div>
    )
}

export default Technologies