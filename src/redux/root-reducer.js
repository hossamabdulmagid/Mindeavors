import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import postReducer from "./posts/post-reducer";
import userReducer from "./user/user-reducer";
import commentsReducer from "./comments/comments-reducer";


//blacklist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["user"],
};
//whitelist
const rootReducer = combineReducers({
    posts: postReducer,
    user: userReducer,
    comments: commentsReducer,

});

export default persistReducer(persistConfig, rootReducer);
