import React from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estastistica} from '../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'

function UserHeaderNav() {
    const [mobile, setMobile] = React.useState(null)
    const {userLogout} = React.useContext(UserContext)
    return (
        <nav className={styles.nav}>
            <NavLink to='/conta' end className={({isActive}) => isActive ? styles.active : undefined}>
                <MinhasFotos/>
                {mobile && 'Minhas Fotos'} 
            </NavLink>

            <NavLink to='/conta/estatistica' className={({isActive}) => isActive ? styles.active : undefined}>
                <Estastistica/>
                {mobile && 'Estastística'}   
            </NavLink>

            <NavLink to='/conta/postar' className={({isActive}) => isActive ? styles.active : undefined}>
                <AdicionarFoto/>{mobile && 'Adicionar Foto'}  
            </NavLink>

            <button onClick={userLogout}>
                <Sair/>
                {mobile && 'Sair'}   
            </button>
        </nav>
  )
}

export default UserHeaderNav