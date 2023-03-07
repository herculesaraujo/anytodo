import Container from '../layout/Container'
import styles from './PaginaInicial.module.css'
import logo from '../../img/todo_logo.png'
import logoGoogle from '../../img/logo googleg 48dp.png'
import logoApple from '../../img/Apple Logo.png'

function PaginaInicial (){
    return(
        <box className={styles.box}>
          <Container>
            <img src={logo} alt="Any todo" className={styles.icon}></img>
            <h2 className={styles.anytodo}>Any To Do</h2>
            <h3 className={styles.text}>Realize o Login e organize as suas tarefas.</h3>
            <button className={styles.login_google}><img src={logoGoogle} alt="Google" ></img>Sign In with Google</button>
            <button className={styles.login_apple}><img src={logoApple} alt="Google"></img>Sign In with Apple</button>
            <p className={styles.p}>Não tem uma conta ?</p>
            <p className={styles.crieAgora}> Crie agora</p>
          </Container>
        </box>
    )
}

export default PaginaInicial