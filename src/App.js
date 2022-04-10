import './App.css';
import SignIn from "./components/signin/signin.components";

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <div className={''}>
                    <SignIn />
                </div>
            </header>
        </div>
    );
}

export default App;
