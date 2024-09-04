// pages/protectedPage.js
import { useSession, signIn } from 'next-auth/react';
import { useEffect } from 'react';

const ProtectedPage = () => {
    const { data: session, status } = useSession();

    useEffect(() => {
        if (status === 'loading') return;
        if (!session) signIn();
    }, [session, status]);

    if (session) {
        return <div>Bem-vindo, {session.user.name}!</div>;
    }

    return <div>Carregando...</div>;
};

export default ProtectedPage;
