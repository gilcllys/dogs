import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'

function LoginForm() {
    const [username, setUsername] = React.useState('')
    const [password, setPassword] = React.useState('' )


    function handleSubmit(event){
        event.preventDefault()
        fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token',{
            method:'POST',
            headers:{
              'Content-Type': 'aplication/json'  
            },
            body: JSON.stringify({username,password}),
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

    return (
        <div>
        <h1>Login</h1>
        <form action=""  onSubmit={handleSubmit}>
            <Input label='Usuário' type='text' name='name'/>
            <Input label='Senha' type='password' name='password'/>
            <Button>
                Entrar
            </Button>
        </form>
        <Link to="/login/criar">Cadastro</Link>
        </div>
    );
}

export default LoginForm