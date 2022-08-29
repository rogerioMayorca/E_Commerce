import Button from "../../components/Button"
import Input from "../../components/Input"
import { Container, Form, MainContainer } from "./style"
import LoginShop from "../../Images/LoginShop.png"


function LoginPage() {
    return (
        <MainContainer>
            <Container>
                <Form>
                    <Input inputType="text" placeholder="User" />
                    <Input inputType="password" placeholder="Password" />

                    <Button >Login</Button>
                    <img src={LoginShop} alt="" />
                </Form>
            </Container>
        </MainContainer>
    )
}

export default LoginPage