import { Container, Form, Avatar } from './styles'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'


export function Profile() {
    return(
        <Container>
            <header>
                <Link to='/'>
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img
                     src='https://github.com/Fabiano2022.png'
                     alt='Foto do usuário'/>

                     <label htmlFor="avatar">
                        <FiCamera/>
                     </label>
                        <Input
                            id='avatar'
                            type='file'
                        />
                </Avatar>

                <Input
                    placeholder='Home'
                    type='text'
                    icon={FiUser}                
                />
                <Input
                    placeholder='E-mail'
                    type='text'
                    icon={FiMail}                
                />
                <Input
                    placeholder='Senha atual'
                    type='password'
                    icon={FiLock}                
                />
                <Input
                    placeholder='Nova senha'
                    type='password'
                    icon={FiLock}                
                />

                <Button title='Salvar'/>
            </Form>
        </Container>
    )
} 