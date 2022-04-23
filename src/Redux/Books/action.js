export const ADD_BOOKS = "ADD_BOOKS";


export const addBooks = (payload) => {
    type: ADD_BOOKS,
    payload
}

export const getBookData = () => (dispatch) => {
    //add middleware to get books here.
}