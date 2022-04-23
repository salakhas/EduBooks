import {ADD_BOOKS} from "./action";

const initState = {
    books: []
};

const bookReducer = () => (state = initState,{type,payload}) =>{
    switch(type){
        case ADD_BOOKS:
            return {...state,books:payload};
        default:
            return state;
    }
}

export {bookReducer};
