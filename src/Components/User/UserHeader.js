import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

function UserHeader() {
  const [title, setTitle] = React.useState('')
  const location = useLocation()
  
  React.useEffect(()=>{
    const {pathname} = location
    switch(pathname){
      case '/conta/postar':
        setTitle('Poste sua Foto')
        break
      case '/conta/estatistica':
        setTitle('Estastíticas')
        break
      default:
        setTitle('Minha Conta')
    }
  },[location])
  return (
    <div>
        <header className={styles.header}>
            <h1 className='title'>{title}</h1>
            <UserHeaderNav />
        </header>
    </div>
  )
}

export default UserHeader