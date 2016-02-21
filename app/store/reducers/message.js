import C from '../constants';
import initialState from '../initialstate';


export default (state,action) => {
    let newstate = Object.assign({},state); // sloppily copying the old state here, so we never mutate it
    switch(action.type)
    {
    case C.MESSAGE:
        newstate.theMessage="Hej hej!";
        return newstate;

    default: return state || initialState().message;
    }
};
