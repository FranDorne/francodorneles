import React from 'react'
import { contact, section5Title, social } from '../../profile'

const Contact = () => {
    
    return (
        <div className="parallax">
                <div data-aos="zoom-in-up" data-aos-once="true" className="git-form">
                    <>
                <div className="git-head-div text-center mx-auto">
                        <h1 id="Contact" className="git-head">{section5Title}</h1>
                </div>
                </>
                <div className="container">
            <div className="git-cont row">
                <div className="col-12 col-sm-6 half">
                    <form action={contact.contactUrl ? contact.contactUrl : "https://formspree.io/f/xwkylnba"} method="POST">
                        <input type="text" id="fname" name="firstname" placeholder="Tu nombre" required></input>
                        <input type="mail" id="mailid" name="Email" placeholder="Email" required></input>
                        <input type="text" id="sub" name="Subject" placeholder="Asunto" required></input>
                        <textarea className="textarea" id="msg" name="message" placeholder="Mensaje" required></textarea>
                        <button style={{cursor: 'pointer'}} type="submit">Enviar</button>
                    </form>
                </div>
                <div className="col-12 col-sm-6 half">
                    <p className="lead">
                        {contact.pitch}        
                    </p>
                <div className="d-flex justify-content-center align-items-center flex-column">
                <div className="inline-block">
                    {social.linkedin && <a title="Visitar perfil LinkedIn" rel="noopener noreferrer" target="_blank"  href={social.linkedin}><i className="fab fa-linkedin"></i></a>}
                    {social.github && <a title="Visitar perfil Github" rel="noopener noreferrer" target="_blank" href={social.github}><i className="fab fa-github"></i></a>}<br/>
                </div>
                    {social.resume && <a title="Descargar CV" href={social.resume} download><i className="fas fa-download"></i></a>}
                </div>
                </div>
            </div>
            </div>
        </div>
            <p id="not-dark" className="Copy">2022 © Copyright <strong>{contact.copyright}</strong>. Todos los derechos reservados.</p>
        </div>
    )
    
}

export default Contact
