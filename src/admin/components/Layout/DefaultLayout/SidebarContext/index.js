import { createContext } from 'react';

const SidebarContext = createContext();

function SidebarProvider({ children, data }) {

    const {isMinimizeSidebar, toggleSidebar} = data;

    return (
        <SidebarContext.Provider value={{isMinimizeSidebar, toggleSidebar}}>
            {children}
        </SidebarContext.Provider>
    );
}

export { SidebarContext, SidebarProvider };
