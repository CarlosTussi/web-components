import React from "react";


const MyContext = React.createContext();

function MyProvider({children})
{
    const [message, setMessage] = React.useState("defaultz");

    return(
        <MyContext.Provider value={{
            message,
            aFunction: () => setMessage("Hello")        //Can add other elements to this attribute to be accessed by other components before (like a function in this case)
            }}>
            {children}
        </MyContext.Provider>
    );
}

export const useMyContext = () => React.useContext(MyContext);

export default MyProvider;