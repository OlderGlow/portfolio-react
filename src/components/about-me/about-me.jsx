import './about-me.css';

function AboutMe() {
    return (
        <div className='about-container'>
            <section className='about-left'>
                <div className='about-title'>
                    <h1>À propos de moi :</h1>
                </div>
            </section>
            <section className='about-right'>
                <div className='about-content'>
                    <h4>Je suis Julien PICQUET, j'ai 26 ans et je suis Angevin. Après avoir obtenu une <span className='about-content-bg'>Licence d'Économie</span> à l'Univesité d'Angers, j'ai souhaité faire de ma passion mon métier. C'est pourquoi j'ai intégré l'ENI École Informatique où j'ai obtenu un titre RNCP <span className='about-content-bg'>Développeur Web et Web Mobile</span> (Bac +2). <br/>Ayant une soif d'apprendre conséquente, j'intègre en mars 2022 une formation <span className='about-content-bg'>Concepteur - Développeur d'Application JAVA</span> (Bac + 3/4) à DIGINAMIC. Je recherche aujourd'hui une entreprise souhaitant m'accueillir en <span className='about-content-bg'>Alternance</span> pendant 18 mois afin de développer mes compétences hard et softkill, et aider cette dernière dans tous leurs projets. </h4>
                </div>
            </section>
        </div>
    )
}

export default AboutMe