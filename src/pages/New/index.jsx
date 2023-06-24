import { Link } from 'react-router-dom'

import { Textarea } from '../../components/Textarea'
import { Noteitem } from '../../components/Noteitem'
import { Section } from '../../components/Section'
import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'

import { Container, Form } from './styles'

export function New () {
    return(
        <Container>
            <Header/>

            <main>
                <Form>
                    <header>
                        <h1>Criar Nota</h1>
                        <Link to='/'>
                            voltar
                        </Link>
                    </header>

                    <Input placeholder='Título'/>

                    <Textarea placeholder='Observações'/>

                    <Section title='Links úteis'>
                        <Noteitem value='https://www.rockeatseat.com.br' />
                        <Noteitem  isNew placeholder='Novo link'/>                        
                    </Section> 

                    <Section title='Marcadores'>
                        <div className='tags'>
                        <Noteitem value='React' />
                        <Noteitem  isNew placeholder='Nova tag'/>          
                        </div>
                    </Section> 

                    <Button title='Salvar'/>                  
                </Form>
            </main>

        </Container>
    )
}
