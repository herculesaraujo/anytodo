import Container from '../layout/Container'
import styles from './PaginaInicial.module.css'
import logo from '../../img/todo_logo.png'
import logoGoogle from '../../img/logo googleg 48dp.png'
import logoApple from '../../img/Apple Logo.png'

function PaginaInicial() {
  return (

    <Container>
      <box className={styles.box}>
        <div className={styles.icon}>
          <img src={logo} alt="Any Todo" ></img>
        </div>
        <div className={styles.divAnyTodo}>
          Any ToDo
        </div>
        <div className={styles.text}>
          Realize o Login e organize as suas tarefas.
        </div>
        <div className={styles.divGoogle}>
          <button className={styles.login_google}><img src={logoGoogle} alt="Google" ></img>Sign In with Google</button>
        </div>
        <div className={styles.divApple}>
          <button className={styles.login_apple}><img src={logoApple} alt="Apple"></img>Sign In with Apple</button>
        </div>

      </box>
    </Container >

  )
}

export default PaginaInicial