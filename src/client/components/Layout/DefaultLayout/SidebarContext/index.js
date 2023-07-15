import { createContext } from 'react';

const SidebarContext = createContext();

function SidebarProvider({ children, data }) {
    return (
        <SidebarContext.Provider value={ data }>
            {children}
        </SidebarContext.Provider>
    );
}

export { SidebarContext, SidebarProvider };
