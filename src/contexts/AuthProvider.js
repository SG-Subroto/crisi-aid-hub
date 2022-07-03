import React, { createContext } from 'react';
import useLaravel from '../hooks/useLaravel';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const allContexts = useLaravel();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;