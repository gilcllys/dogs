import React from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../Hooks/useForm'
import Button from '../Form/Button'
import Input from '../Form/Input'

function LoginForm() {
    const username = useForm()
    const password = useForm()
   
    function handleSubmit(event){
        event.preventDefault()
        if (username.validate() && password.validate()){
            fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method:'POST',
            headers:{
              'Content-Type': 'aplication/json'  
            },
            body: JSON.stringify(),
        })
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(json => {
            console.log(json)
        })
        .catch(erro => {
            console.log(erro)
        })

        }     
    }

    return (
        <div>
        <h1>Login</h1>
        <form action=""  onSubmit={handleSubmit}>
            <Input label='Usuário' type='text' name='name' {...username}/>
            <Input label='Senha' type='password' name='password' {...password}/>
            <Button>
                Entrar
            </Button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
        </div>
    );
}

export default LoginForm