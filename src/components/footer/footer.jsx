import './footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className="footer-informations">
                <p className='footer-copyright'>Copyright © 2022 Julien Picquet | Tous droits réservés</p>

                <nav className='footer-menu'>
                    <ul>
                        <li>
                            <a href="mailto:julienpicquet1@gmail.com">
                                <i className='far fa-envelope'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/jpicquet/"
                                target="_blank"
                                rel='noreferrer'>
                                <i className='fab fa-linkedin'></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/olderglow" target="_blank" rel='noreferrer'>
                                <i className='fab fa-github'></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Footer