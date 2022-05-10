import React from 'react'

function UserPost() {
    const [username, setUsername] = React.useState('')  
    const [email, setEmail] = React.useState('')  
    const [password, setPassword] = React.useState('') 
    
    function handleSubmit(event){
        event.preventDefault();
       fetch('https://dogsapi.origamid.dev/json/api/user',{
           method:'POST',
           headers:{
               'Content-Type':'application/json'
           },
           body:JSON.stringify({
               username,
               password,
               email

           })
       }).then(response => {
           console.log(response)
           return response.json()
       }).then(json =>{
           console.log(json)
           return json
       }).catch(erro => console.log(erro))
    }

    return (
    <form onSubmit={handleSubmit}>
    <input 
        type="text" 
        placeholder='username '
        value={username} 
        onChange={({target})=> setUsername(target.value)}
    />
    <input 
        type="text" 
        placeholder='password'
        value={password} 
        onChange={({target})=> setPassword(target.value)}
    />
    <input 
        type="text" 
        placeholder='email'
        value={email} 
        onChange={({target})=> setEmail(target.value)}
    />
    <button>enviar</button>
    </form>
    )
}

export default UserPost