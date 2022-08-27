import { useState } from "react"
import { HeaderStyled } from "./style"

function Header({ children, className, props, renderizar }) {


    const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


    return (

        <HeaderStyled className={className} props={props}>
            {
                teste.map((element, indice) => {
                    return (
                        <h1 key={indice}>
                            {indice < 5 && element}
                        </h1>
                    )
                })
            }


        </HeaderStyled>
    )

}

export default Header