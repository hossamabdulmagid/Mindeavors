import {Route, Routes} from "react-router-dom";
import SignIn from "./page/signin/signin.components";
import SignUp from "./page/signup/signup.component";
import Header from "./components/header/header.component";
import Homepage from "./page/homepage/homepage.component";
import './App.css';

const App = () => {
    return (
        <>
            <Header/>
            <div className="App">
                <header className="App-header">
                    <Routes>
                        <Route path={'/'} exact element={<Homepage/>}/>
                        <Route path={'/signin'} element={<SignIn/>}/>
                        <Route path={'/signup'} element={<SignUp/>}/>
                    </Routes>
                </header>
            </div>
        </>
    );
}

export default App;
