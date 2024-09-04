import { atom } from 'jotai';

// Exemplo de átomos
export const authAtom = atom(null);
export const themeAtom = atom('light');
export const notificationsAtom = atom([]);
export const userAtom = atom({
    id: null,
    name: '',
    email: '',
});

// Exportação padrão
export default {
    authAtom,
    themeAtom,
    notificationsAtom,
    userAtom,
};
