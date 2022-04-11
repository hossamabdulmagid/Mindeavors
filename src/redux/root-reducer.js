import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "./posts/post-reducer";


//blacklist
const persistConfig = {
    key: "root",
    storage,
    whitelist: [""],
};
//whitelist
const rootReducer = combineReducers({
    posts: postReducer,
});

export default persistReducer(persistConfig, rootReducer);
