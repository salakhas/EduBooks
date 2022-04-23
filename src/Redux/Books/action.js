export const ADD_BOOKS = "ADD_BOOKS";

export const addBooks = (payload) => {
  return { type: ADD_BOOKS, payload: payload };
};

export const getBookData = () => (dispatch) => {
  //add middleware to get books here.
};
