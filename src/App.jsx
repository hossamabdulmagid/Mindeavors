import {Navigate, Route, Routes} from "react-router-dom";
import SignIn from "./page/signin/signin.components";
import Header from "./components/header/header.component";
import Homepage from "./page/homepage/homepage.component";
import './App.css';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selector';
import {connect, useSelector} from 'react-redux';
import {setCurrentUser} from './redux/user/user-action';
import {useEffect} from "react";
import {auth, createUserProfileDocument} from './lib/firebase'
import SignUp from "./page/signup/signup.component";
import {ToastContainer} from 'react-toastify';
import SinglePost from './components/singlepost/singlepost.component'
import 'react-toastify/dist/ReactToastify.css';
import EditPost from "./components/editpost/editpost.component";
import CreatePost from "./components/createpost/createpost.component";
import RequiredAuth from "./lib/requiredAuth";
const App = ({currentUser, setCurrentUser}) => {
    const JWT = useSelector((state) => state.user.strapiUser)

    let unsubscribeFormAuth = null;

    useEffect(() => {
        unsubscribeFormAuth = auth.onAuthStateChanged(async (userAuth) => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot((snapShot) => {
                    setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data(),
                    });
                });
            }
            setCurrentUser(userAuth);
        });
        return () => {
            unsubscribeFormAuth();
        }
    }, [])

    return (
        <>
            <ToastContainer/>
            <Header currentUser={currentUser} JWT={JWT}/>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path={'/'} exact element={<Homepage/>}/>
                        <Route path="/signin" element={JWT ? <Navigate to="/"/> : <SignIn/>}/>
                        <Route path="/signup" element={JWT ? <Navigate to="/"/> : <SignUp/>}/>
                        <Route path="/posts/:id" element={<SinglePost/>}/>
                        <Route path="/edit-post/:id" element={<EditPost/>}/>
                        <Route path="/create-post" element={<RequiredAuth> <CreatePost/></RequiredAuth>}/>
                    </Routes>
                </header>
            </div>

        </>
    );
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

});

const mapDispatchToProps = (dispatch) => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
