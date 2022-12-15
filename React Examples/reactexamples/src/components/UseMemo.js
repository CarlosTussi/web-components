import { useMemo, useState } from "react";

/*In this example, if I don't use useMemo, everytime the user types anyhthing in the input the nested for loops willl re-execute, because the
whole component will re-render. With useMemo, that won't happen because the state variable "a" is doesn't change*/ 

function UseMemo ()
{
    const [a, setA] = useState(100000);
    const [myInput, setMyInput] = useState("");
    const expensiveComputation = (num) => {
        for(let i =0; i < num; i++)
        {
            for(let j = 0; j< num; j++)
            {
                //do nothing
            }
        }

    };
    const computation = useMemo(() => expensiveComputation(a), [a]);


    return(
        <div>
            <p>Expensive Computation</p>
            {computation}
            <form>
                <label>Type your name</label>
                <input 
                    type="text"
                    onChange={(e) => setMyInput(e.target.value)}
                    value={myInput}/>
                <label>{myInput}</label>
            </form>
        </div>
    );
}

export default UseMemo;