import iconAbout from '../../assets/about.svg'
import '../about/about.css'
import '../../style/global.css'
function About(){
    return(
    <div className="about2">
        <div className='about'>
            
            <div className='txt' id='sobre'>
            <h2 className='titleAbout' >Sobre</h2>
            <p className='textAbout'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sem augue, pulvinar ac justo sed, tempus tempus nisi. Vestibulum non felis pharetra, posuere nulla in, auctor leo. Aliquam efficitur nulla varius purus tincidunt convallis. Pellentesque convallis pulvinar lacus, vitae viverra nunc consequat vitae. Praesent pulvinar nulla non nibh molestie tempus. Donec vel vehicula leo. Fusce hendrerit odio purus, sit amet lacinia sem gravida in.</p>
            </div>
           <img className='icon' src={iconAbout}></img>
           </div>
        </div>
    )
}
export default About;