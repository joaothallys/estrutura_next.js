// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
    providers: [
        Providers.Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: "Email", type: "text", placeholder: "jsmith@example.com" },
                password: { label: "Senha", type: "password" }
            },
            async authorize(credentials) {
                // Implemente a verificação das credenciais aqui
                const user = { id: 1, name: 'John Doe', email: 'jsmith@example.com' };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    pages: {
        signIn: '/login'
    }
});
