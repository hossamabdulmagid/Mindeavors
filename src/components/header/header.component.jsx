import {Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Mindeavors from "../../Color logo - no background.svg";

const Header = ({currentUser}) => {
    console.log(currentUser)
    console.log(`from Header Component as aPorps`)

    const SignOut = () => {
        window.localStorage.clear();


    }

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Mindeavors} className="App-logo-navbar" alt="logo" width={180}/>
                    </Navbar.Brand>
                    <Nav className="" style={{textAlign: 'right'}}>
                        {currentUser ?
                            <Nav.Link> {currentUser && currentUser.displayName} (logout)</Nav.Link> :
                            <>
                                <Nav.Link href="/signin">Login</Nav.Link>
                                <Nav.Link href="/signup">Signup</Nav.Link>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


export default (Header);