import {useEffect} from 'react';

import {Get_Single_post, UpdateSinglePost} from '../../redux/posts/post-action';


import {connect} from "react-redux";


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


    useEffect(() => {
        Get_Single_post()
        UpdateSinglePost(data, headers);
    }, [UpdateSinglePost]);
    console.log(singlePost, singlepostLoading, `from reducer`)
    return (
        <div>
            edit post
        </div>
    )
}

const mapStateToProps = state => ({
    singlePost: state.posts.singlePost,
    singlepostLoading: state.posts.loading
})
const mapDispatchToProps = dispatch => ({
    Get_Single_post: () => dispatch(Get_Single_post()),
    UpdateSinglePost: (data, headers) => dispatch(UpdateSinglePost(data, headers))
})
export default connect(mapStateToProps, mapDispatchToProps)(EditSinglePost);