import {EditIcon, TrashIcon} from "./comments.styles";


const UserOwnerThePost = (props) => {
    return <small><TrashIcon onClick={props.getSelection}/></small>
}

const UserOwnerTheComment = (props) => {
    return <small><EditIcon onClick={props.GetEditCommentSelected}/> <TrashIcon onClick={props.getSelection}/> </small>
}

const Role = (props) => {
    let {token, singleComment, singlePost, getSelection, GetEditCommentSelected} = props;

    if (token === singleComment) return <UserOwnerTheComment {...props}/>;

    else if (token === singlePost) return <UserOwnerThePost {...props}/>;

    else return null;
}

export default Role;