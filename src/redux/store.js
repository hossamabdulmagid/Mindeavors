import {applyMiddleware, compose, createStore} from "redux";

import thunk from "redux-thunk";
import logger from "redux-logger";

import rootReducer from "./root-reducer";

import {persistStore} from "redux-persist";

const middlewares = [thunk, logger];

// hide action with state in console.log in deployment app.

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middlewares))
);

export const persistor = persistStore(store);
