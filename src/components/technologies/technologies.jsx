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
        </div>
    )
}

export default Technologies