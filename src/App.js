import './App.css';
import SignIn from "./page/signin/signin.components";
import SignUp from "./page/signup/signup.component";
import Header from "./components/header/header.component";
const App = () => {
    return (
        <>
        <Header />
        <div className="App">
            <header className="App-header">
                <div className={''}>
                    <SignIn />

                    <SignUp />
                </div>
            </header>
        </div>
        </>
    );
}

export default App;
