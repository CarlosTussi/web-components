import {useReducer} from 'react';

function reducerFunc (state, action)
{
    if(action.type === 'increase') return (state = state + 10);
    if(action.type === 'decrease') return (state = state - 10);
    return new Error();
}

function ReducerTest(){
    const [wallet, dispatch] = useReducer(reducerFunc, 0);

    return(
        <div>
            <p>My Wallet: {wallet}</p>
            <button onClick={() => dispatch({type:'increase'})}>Increase</button>
            <button onClick={() => dispatch({type:'decrease'})}>Decrease</button>
        </div>
    );
}

export default ReducerTest;
