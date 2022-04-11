import {Navigate, Route, Routes} from "react-router-dom";
import SignIn from "./page/signin/signin.components";
import Header from "./components/header/header.component";
import Homepage from "./page/homepage/homepage.component";
import './App.css';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user-selector';
import {connect} from 'react-redux';
import setCurrentUser from './redux/user/user-action';
import {useEffect} from "react";
import {auth, createUserProfileDocument} from './lib/firebase'
import SignUp from "./page/signup/signup.component";

const App = ({currentUser, setCurrentUser}) => {
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
            <Header currentUser={currentUser}/>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path={'/'} exact element={<Homepage/>}/>
                        {/*<Route path={'/signin'} element={<SignIn/>}/>*/}
                        {/*<Route path={'/signup'} element={<SignUp/>}/>*/}
                        <Route path="/signin" element={currentUser ? <Navigate to="/"/> : <SignIn/>}/>
                        <Route path="/signup" element={currentUser ? <Navigate to="/"/> : <SignUp/>}/>

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
