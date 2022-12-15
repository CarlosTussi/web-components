import { useMyContext } from "./MyProvider";


function Child1()
{
    const {message} = useMyContext();

    return(
    <div>
        <h2>Child One = {message}</h2>
    </div>  
    );
}

export default Child1;