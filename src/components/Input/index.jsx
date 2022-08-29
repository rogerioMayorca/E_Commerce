import { ContainerInput } from "./style"

function Input({ inputType, label, placeholder }) {
    return (
        <ContainerInput>
            <p>{label}</p>
            <input type={inputType} placeholder={placeholder} />
        </ContainerInput>
    )
}

export default Input