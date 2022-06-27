import contactImg from '../../assets/contact.svg'
import'../../style/global.css'
import '../contact/contact.css'

function Contact(){
    return(
        <div className="contact">
            <div className="titl">
            <h2>Entre em contato agora mesmo</h2>
            </div>
            <div className="formu">
            <form action="" method="post">
                <input className='input' type="text" name="nome" id="nome" placeholder='Nome'/>

                <input className='input' type="tel" name="tel" id="tel" required placeholder='Telefone'/>

                <input className='input' type="email" name="mail" id="mail" placeholder='E-mail' required />

                <input className='input' type="text" name="msg" id="msg" placeholder='Mensagem'/>

                <input className='envia' type="submit" value="Enviar"/>
                </form>
                </div>
                <div className='imgIcon'>
                <img src={contactImg} alt="icone" />               
                </div>
        </div>
    )
}
export default Contact;