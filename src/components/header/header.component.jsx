import {Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Mindeavors from "../../Color logo - no background.svg";
import {auth} from "../../lib/firebase";

const Header = ({currentUser}) => {

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Mindeavors} className="App-logo-navbar" alt="logo" width={180}/>
                    </Navbar.Brand>
                    <Nav className="" style={{textAlign: 'right'}}>
                        {currentUser ?
                            <Nav.Link onClick={() => auth.signOut()} style={{cursor: 'pointer'}}>
                                <span style={{color: 'limegreen'}}>
                                    ({currentUser && currentUser.displayName})
                                </span> logout

                            </Nav.Link> :
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