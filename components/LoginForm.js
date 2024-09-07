import React, { useState } from 'react';
import Image from 'next/image';
import '../../estrutura_next.js/styles/components/_loginForm.scss';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicionar lógica de autenticação aqui
    };

    return (
        <div className="login-container">
            <div className="login-form">
                {/* Esconder a imagem em dispositivos móveis */}
                <div className="login-form__image">
                    <Image
                        src="/images/loginPhoto.png"
                        alt="Login illustration"
                        width={500}
                        height={500}
                        className="login-image"
                    />
                </div>

                <div className="login-form__content">
                    <div className="logo">
                        <Image
                            src="/images/logo.svg"  // Caminho da sua logo SVG
                            alt="Logo"
                            width={337}  // Ajuste o tamanho conforme necessário
                            height={128.95} // Ajuste o tamanho conforme necessário
                        />
                    </div>
                    <h2 className="title">Bem-vindo de volta!</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="E-mail"
                                required
                                className="login-form__input"
                            />
                            <span className="icon">📧</span>
                        </div>

                        <div className="input-group">
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Senha"
                                required
                                className="login-form__input"
                            />
                            <span className="icon">🔒</span>
                        </div>

                        <div className="form-options">
                            <a href="#" className="login-form__link">Esqueceu a senha?</a>
                            <label className="remember-me">
                                <input
                                    type="checkbox"
                                    checked={rememberMe}
                                    onChange={(e) => setRememberMe(e.target.checked)}
                                />
                                Lembrar senha
                            </label>
                        </div>

                        <button type="submit" className="login-form__button">Entrar</button>

                        <div className="google-login">
                            <button type="button" className="google-login__button">
                                <span className="google-icon">G</span> Entrar com Google
                            </button>
                        </div>

                        <div className="signup-option">
                            Ainda não possui cadastro? <a href="#" className="login-form__link">Clique aqui!</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;