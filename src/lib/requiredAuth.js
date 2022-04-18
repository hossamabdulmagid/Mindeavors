import {useSelector} from "react-redux";
import {useNavigate} from 'react-router-dom';

const RequiredAuth = ({children}) => {
    const navigate = useNavigate();
    const userAuth = useSelector((state) => state.user.strapiUser.jwt);

    if (!userAuth) {
        return navigate('/signin');
    }
    return children;
}


export default RequiredAuth;