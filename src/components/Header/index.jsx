import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles'


export function Header() {
    return(
        <Container>
           <Profile to='/profile'>
            <img src="https://github.com/Fabiano2022.png"
            alt="imagem usuário"/>

            <div>
                <span>Seja bem-vindo,</span>
                <strong>Fabiano Azevedo</strong>
            </div>

           </Profile>

           <Logout>
            <RiShutDownLine />
           </Logout>
        </Container>
    )
}