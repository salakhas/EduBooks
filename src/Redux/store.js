import {createStore,combineReducers,applyMiddleware,compose} from "redux";
import thunk from "redux-thunk";
import { bookReducer } from "./Books/reducer";
import { loginReducer } from "./Login/reducer";
import { registerReducer } from "./Register/reducer";

export const rootReducer = combineReducers({
    login: loginReducer,
    register: registerReducer,
    books: bookReducer
})

const middleware=[thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
     
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export const store = createStore(rootReducer,enhancer);

