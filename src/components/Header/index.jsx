import { useState } from "react"
import { HeaderStyled, HeaderInput, } from "./style"
import Lupa from "../../Images/Lupa.png"


function Header(props) {
    const [ValueInput, setValueInput] = useState("")

    return (
        <>
            <HeaderStyled>
            <div>
            <HeaderInput type="text" placeholder="Pesquise Aqui" onChange={event => setValueInput(event.target.value)} value={ValueInput} />
            <button >
                <img src={Lupa} alt="botao" />
                
            </button>
           
            </div>
            </HeaderStyled>
        </>
    )

}

export default Header