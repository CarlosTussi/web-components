import { createContext, useContext, useState } from "react";

const BoxContext = createContext();

function BoxProvider({children})
{
    const [myInput, setMyInput] = useState("");

    return(
        <BoxContext.Provider value={{myInput, 
                                    updateInput:(e)=>setMyInput(e)
                                    }}>
            {children}
        </BoxContext.Provider>
        );
}

export default BoxProvider;
export const useBoxContext = () => useContext(BoxContext);