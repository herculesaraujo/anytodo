import styles from './Login.module.css'; 
import LoginButton from './Login_button';

function LoginPage(){
    return(
        <div className={styles.login}>
            <h1>Any Todo</h1>
            <h3>Realize o login e organize suas tarefas.</h3>
            <LoginButton/>
            <LoginButton/>
        </div>
    )
}

export default LoginPage