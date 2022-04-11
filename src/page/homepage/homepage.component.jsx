import Logohomepage from '../../homepage.png'
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import {connect} from 'react-redux';
import {Do_get_posts} from "../../redux/posts/post-action";
import {useEffect, useState} from "react";
import PostList from '../../components/postlist/postlist.component'
import Form from 'react-bootstrap/Form';
import {toast} from "react-toastify";

const Homepage = ({Do_get_posts, allPosts}) => {

    const filterPosts = (filterItem) => {
        if (!filterItem) {
            return allPosts;
        }
        return allPosts.filter((allPosts) => allPosts && allPosts.title.includes(filterItem));
    }

    const [filterItem, setFilterItem] = useState("");

    const filterdPosts = filterPosts(filterItem);

    const updatedFilterHandler = (e) => {
        setFilterItem(e.target.value);
    }

    let title = 'How We Deliver';

    useEffect(() => {
        Do_get_posts();
    }, [Do_get_posts])


    return (
        <RapperHeaderComponent className={'container'}>


            <img src={Logohomepage} alt={"HomePage"}/>
            <h1>
                {title.toUpperCase()}
            </h1>
            <span className={"blueLine"}/>
            <h3>
                Through our diversity of knowledge in multiple domains, we do it right! We deliver business and
                technology transformation from start to finish, via agile methodologies, and strong customer alliance
                and involvement techniques, engineering excellence tools as well as hybrid teams, we deliver the best
                solutions that dissolve both business challenges and breakpoints via technology.
            </h3>
            <Form.Group controlId="formFileDisabled" className="mb-3">
                <Form.Control
                    type="search"
                    onChange={updatedFilterHandler}
                    placeholder={'type any title to search in all posts'}
                />
            </Form.Group>
            <PostList allPosts={filterdPosts}/>
            {/*{allPosts && allPosts*/}
            {/*    .filter((singlePost, idx) => idx <= 20)*/}
            {/*    .map((singlePost, idx) => {*/}
            {/*        return (*/}
            {/*            <ul key={idx}>*/}
            {/*                <li><strong>title </strong> : {singlePost.title}</li>*/}
            {/*                <li><strong>body </strong> : {singlePost.body} </li>*/}
            {/*            </ul>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}
        </RapperHeaderComponent>
    )
}

const mapStateToProps = state => ({
    allPosts: state.posts.allPosts
})

const mapDispatchToProps = dispatch => ({
    Do_get_posts: () => dispatch(Do_get_posts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);