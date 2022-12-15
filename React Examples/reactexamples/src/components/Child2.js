import { useMyContext } from "./MyProvider";


function Child2()
{
    const{message} = useMyContext();

    return(
        <div>
            <h2>Child2 - {message}</h2>
        </div>
    );
}

export default Child2;