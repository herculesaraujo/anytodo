import React from "react";

function Login(){
    return (
        <div>
            <h1>Login</h1>
            <form>
                <label htmlFor="email">
                    Email
                <input 
                type="text"
                placeholder="digite aqui"
                >
                </input>
                </label>
                <br/>
                <label htmlFor="password">
                    Senha
                <input 
                type="password"
                placeholder="digite aqui"
                >
                </input>
                </label>
                <br/>
                <button>Entrar</button>
            </form>
        </div>
    )
}

export default Login