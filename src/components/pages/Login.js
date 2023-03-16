import React from "react";
import styles from "./Login.module.css";
import logo from '../../img/logoGoogleLogin.png'

function Login() {
    return (
        <div className={styles.box}>
            <div className={styles.icon}>
                <img src={logo} alt="Login com Google" ></img>
            </div>
            <h1 className={styles.h1}>Entrar com Google</h1>
            <form>
                <h2 className={styles.h2}>Login</h2>
                <div className={styles.divInput}>
                    <label htmlFor="email">
                        <input
                            type="text"
                            placeholder="Digite aqui"
                            className={styles.input}
                        >
                        </input>
                    </label>
                </div>
                <br />
                <h2 className={styles.h2}>Senha</h2>
                <div className={styles.divInput}>
                    <label htmlFor="password">
                        <input
                            type="password"
                            placeholder="Digite aqui"
                            className={styles.input}
                        >
                        </input>
                    </label>
                </div>
                <br />
                <div className={styles.divButton}>
                    <button className={styles.submit}>Entrar</button>
                </div>
            </form>
        </div>
    )
}

export default Login