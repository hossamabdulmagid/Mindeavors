import {Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Mindeavors from "../../Color logo - no background.svg";
import {auth} from "../../lib/firebase";

const Header = ({currentUser}) => {

    return (
        <>
            <Navbar bg="dark" variant={"secondary"}>
                <Container>
                    <Navbar.Brand href="/">
                        <img src={Mindeavors} className="App-logo-navbar" alt="logo" width={180}/>
                    </Navbar.Brand>
                    <Nav className="" style={{textAlign: 'right'}}>
                        {currentUser ?
                            <>
                                <Nav.Link
                                    href="/"
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: 'white',
                                        margin: '2px'
                                    }}>
                                    Create Post
                                </Nav.Link>
                                <Nav.Link
                                    onClick={() => auth.signOut()}
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: 'white',
                                        margin: '2px'
                                    }}>
                                <span style={{color: 'limegreen'}}>
                                    ({currentUser && currentUser.displayName})
                                </span>
                                    {" logout"}
                                </Nav.Link>
                            </> :
                            <>
                                <Nav.Link
                                    href="/signin"
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: 'white',
                                        margin: '2px'
                                    }}>
                                    Login
                                </Nav.Link>
                                <Nav.Link
                                    href="/signup"
                                    style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: 'white',
                                        margin: '2px'
                                    }}>
                                    Signup
                                </Nav.Link>
                            </>
                        }
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default (Header);