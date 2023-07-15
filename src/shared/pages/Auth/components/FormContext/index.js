import { createContext } from 'react';

const FormContext = createContext();

function FormProvider({ children, data }) {
    return (
        <FormContext.Provider value={ data }>
            {children}
        </FormContext.Provider>
    );
}

export { FormContext, FormProvider };
