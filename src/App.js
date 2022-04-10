import './App.css';
import SignIn from "./components/signin/signin.components";
import SignUp from "./components/signup/signup.component";
const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className={''}>
                    <SignIn />

                    <SignUp />
                </div>
            </header>
        </div>
    );
}

export default App;
