import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './NavBar.module.css'
import logo from '../../img/todo_logo_branco.png'

function NavBar (){
    return(
        <nav className={styles.navbar}>
            <Container>
                <Link to="/paginaInicial" >
                    <img src={logo} alt="Any todo" className={styles.icon}></img>
                </Link>
                <ul>
                  <li className={styles.item}>
                  <p>Any To Do</p>
                  </li>  
                </ul>
            </Container>
        </nav>
    )
}

export default NavBar