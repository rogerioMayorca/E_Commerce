import { ButtonComponent } from "./style";

const Button = ({ children, white, id, ...rest }) => {
    return (
        <ButtonComponent id={id} white={white} {...rest}>
            {children}
        </ButtonComponent>
    );
};
export default Button;