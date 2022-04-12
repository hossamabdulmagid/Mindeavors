import {useEffect} from 'react';

import {UpdateSinglePost} from '../../redux/posts/post-action';


import {connect} from "react-redux";


const EditSinglePost = ({UpdateSinglePost}) => {
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
        UpdateSinglePost(data, headers);
    }, [UpdateSinglePost]);

    return (
        <div>
            edit post
        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    UpdateSinglePost: (data, headers) => dispatch(UpdateSinglePost(data, headers))
})
export default connect(null, mapDispatchToProps)(EditSinglePost);