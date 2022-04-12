import {useEffect} from 'react';

import {Get_Single_post, UpdateSinglePost} from '../../redux/posts/post-action';

import {useLocation} from 'react-router-dom';

import {connect} from "react-redux";
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

const EditSinglePost = ({Get_Single_post, UpdateSinglePost, singlePost, singlepostLoading}) => {
    const headers = {
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
    }
    const data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
    }
    const location = useLocation();
    console.log(location.pathname, `loction.pathName`);

    const id = location.pathname;

    useEffect(() => {
        Get_Single_post(id);
        UpdateSinglePost(data, headers);

    }, [UpdateSinglePost, Get_Single_post]);


    console.log(singlePost, singlepostLoading, `from reducer`)
    return (
        <div className={"container"}>
            <RapperHeaderComponent className={'col-sm-12'}>
                <Card>
                    <Card.Header as="h4">{singlePost.title}</Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <small>{singlePost.body}</small>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted">
                        <Button className={`btn btn-success`}>Edit</Button>
                        <Button className={`btn btn-danger`}>Delete</Button>
                    </Card.Footer>
                </Card>
            </RapperHeaderComponent>
        </div>
    )
}

const mapStateToProps = state => ({
    singlePost: state.posts.singlePost,
    singlepostLoading: state.posts.loading
})
const mapDispatchToProps = dispatch => ({
    Get_Single_post: (id) => dispatch(Get_Single_post(id)),
    UpdateSinglePost: (data, headers) => dispatch(UpdateSinglePost(data, headers))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditSinglePost);