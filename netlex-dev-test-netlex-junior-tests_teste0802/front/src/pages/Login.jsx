<div id="content-homepage"></div>

const Login = () => {
    return <div class="login">
        <h1>Login</h1><br/>

        <div class="menu-metodo-1">
        <form class="login">
                <br/>
                <label class="padding">E-mail</label><br/>
                <div class="align">
                    <input type="email" class="textarea-login" placeholder="Digite seu email" />
                </div><br/>

                <label class="padding">Senha</label><br/>
                <div class="align">
                    <input type="password" class="textarea-login" placeholder="Digite sua senha" />
                </div><br/>

                <div class="align">
                <button type="submit" class="btn-Login">Entrar</button>
                </div>

            </form>
        </div>
        
        
    </div>
};

export default Login;