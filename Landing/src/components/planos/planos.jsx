import '../../style/global.css'
import '../planos/planos.css'

function Planos(){
    return(
        <div className='planos' id='plano'>
            <div className="plano1">
                <h3>Plano Básico</h3>
                <h4>R$ 29,90</h4>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                <li>Morbi sem augue, pulvinar ac justo sed</li> 
                <li>Tempus tempus nisi. Vestibulum non felis.</li>
                <button>Assinar</button>
            </div>
            <div className="plano2">
                <h3>Plano Médio</h3>
                <h4>R$ 39,90</h4>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                <li>Morbi sem augue, pulvinar ac justo sed</li> 
                <li>Tempus tempus nisi. Vestibulum non felis.</li>
                <button>Assinar</button>
            </div>
            <div className="plano3">
                <h3>Plano Premium</h3>
                <h4>R$ 49,90</h4>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </li>
                <li>Morbi sem augue, pulvinar ac justo sed</li> 
                <li>Tempus tempus nisi. Vestibulum non felis.</li>
                <button>Assinar</button>
            </div>
        </div>
    )
}
export default Planos; 