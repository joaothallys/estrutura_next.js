import React, { useState } from 'react';
import '../../estrutura_next.js/styles/components/_loginForm.scss';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // vamos montar aqui posterioirmente a logica de autenticação
    };

    return (
        <div className="login-container">
            <div className="login-form">
                <div className="login-form__image">
                    <img
                        src="/images/image_login.png"  // caminha da imagem
                        alt="Login illustration"
                        className="w-3/4"
                    />
                </div>

                <div className="login-form__content">
                    <h2 className="text-3xl font-semibold mb-6">Bem-vindo de volta!</h2>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="login-form__input"
                            placeholder="E-mail"
                            required
                        />

                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-form__input"
                            placeholder="Senha"
                            required
                        />

                        <div className="flex justify-between items-center mb-6">
                            <label className="flex items-center">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                    className="mr-2"
                                />
                                Lembrar senha
                            </label>
                            <a href="#" className="login-form__link">
                                Esqueceu a senha?
                            </a>
                        </div>

                        <button type="submit" className="login-form__button">
                            Entrar
                        </button>

                        <div className="text-center mt-4">
                            <p>Ainda não possui cadastro? <a href="#" className="login-form__link">Clique aqui!</a></p>
                            <button
                                type="button"
                                className="login-form__button"
                            >
                                Entrar com Google
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
