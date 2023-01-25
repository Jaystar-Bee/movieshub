import React, { createContext } from 'react'

export const apiContext = createContext({
    apikey: "",
})

const apiKey = 'k_c3g1jac0';

const KeyProvide = (props) => {

    const apiDetails = {
        apiKey: apiKey,
    }

    return (
        <apiContext.Provider value={apiDetails}>
            {props.children}
        </apiContext.Provider>
    )
}


export default KeyProvide