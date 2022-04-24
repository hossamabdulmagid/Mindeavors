import {Col, Container, Nav} from "react-bootstrap";
import Navbar from 'react-bootstrap/Navbar'
import Mindeavors from "../../Color logo - no background.svg";
import {RapperHeaderComponent} from "./header.styles";
import {useDispatch} from "react-redux";
import {DoLogout} from "../../redux/user/user-action";
import {useNavigate} from "react-router-dom";

const Header = ({currentUser, token}) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const HandleLogout = () => {
        dispatch(DoLogout())
        navigate('/signin')
    }
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
                                {token ?
                                    <>
                                        <Nav.Link href="/create-post" className={"Nav-link Nav"}>
                                            Create Post
                                        </Nav.Link>
                                        <Nav.Link onClick={() => HandleLogout()} className={"Nav-link"}>
                                        <span>
                                            ({token && token.user && token.user.username})
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