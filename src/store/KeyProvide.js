import React, { createContext } from 'react'

export const apiContext = createContext({
    apiKey: "",
})

const KeyProvide = (props) => {

    const apiKey = "k_1g468mcp"

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