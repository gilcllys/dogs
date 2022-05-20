import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../UserContext'
import {ReactComponent as MinhasFotos} from '../../Assets/feed.svg'
import {ReactComponent as Estastistica} from '../../Assets/estatisticas.svg'
import {ReactComponent as AdicionarFoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Sair} from '../../Assets/sair.svg'
import styles from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

function UserHeaderNav() {
    const {userLogout} = React.useContext(UserContext)
    const mobile = useMedia('(max-width:40rem)')
    const [mobileMenu, setMobileMenu] = React.useState(false)
    const {pathname} = useLocation()
    React.useEffect(() =>{
        setMobileMenu(false)
    },[pathname])
    return (
        <>
        {mobile && (<button
            aria-label='Menu'
            className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
            onClick={()=> setMobileMenu(!mobileMenu)}>
        </button>)}
        <nav className={`${mobile ? styles.navMobile : styles.nav} 
        ${mobileMenu && styles.navMobileAcvtive}`}>
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
        </>
  )
}

export default UserHeaderNav