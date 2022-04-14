import {Col, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Mindeavors from "../../Color logo - no background.svg";
import {auth} from "../../lib/firebase";
import {RapperHeaderComponent} from "./header.styles";

const Header = ({currentUser}) => {

    return (
        <>
            <RapperHeaderComponent>

                <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Navbar.Brand href="/">
                            <img src={Mindeavors} className="App-logo-navbar" alt="logo" width={180}/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Col/>
                            <Nav className="me-auto Nav">
                                {currentUser ?
                                    <>
                                        <Nav.Link href="/create-post" className={"Nav-link Nav"}>
                                            Create Post
                                        </Nav.Link>
                                        <Nav.Link onClick={() => auth.signOut()} className={"Nav-link"}>
                                        <span>
                                            ({currentUser && currentUser.displayName})
                                            </span>
                                            {" logout"}
                                        </Nav.Link>
                                    </> :
                                    <>
                                        <Nav.Link href="/signin" className={"Nav-link"}>
                                            Login
                                        </Nav.Link>
                                        <Nav.Link href="/signup" className={"Nav-link"}>
                                            Signup
                                        </Nav.Link>
                                    </>
                                }
                            </Nav>
                        </Navbar.Collapse>

                    </Container>
                </Navbar>
            </RapperHeaderComponent>

        </>
    )
}


export default (Header);