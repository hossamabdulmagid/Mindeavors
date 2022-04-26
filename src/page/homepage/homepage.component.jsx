import LogoHomePage from '../../homepage.png'
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import {connect} from 'react-redux';
import {Do_get_posts} from "../../redux/posts/post-action";
import {useEffect, useState} from "react";
import PostList from '../../components/postlist/postlist.component'
import Form from 'react-bootstrap/Form';
import {Spinner} from "react-bootstrap";

const Homepage = ({Do_get_posts, allPosts, allPostsLoading}) => {

    const filterPosts = (filterItem) => {
        if (!filterItem) {
            return allPosts;
        }
        return allPosts.filter((allPosts) => allPosts && (allPosts.attributes.title.includes(filterItem) || allPosts.attributes.content.includes(filterItem)));
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
            <img src={LogoHomePage} alt={"HomePage"}/>
            <h1 className={"About"}>
                {title.toUpperCase()}
            </h1>
            <span className={"blueLine"}/>
            <h3 className={"About"}>
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
            <div className="container-fluid text-center">
                <div className="row">
                    {filterdPosts.length === 0 && !allPostsLoading ? <h1>No post found matching your filter</h1> : null}
                    {allPostsLoading ? <>
                        <div className={'container'}>
                            <Spinner animation="border" variant="light"/>
                        </div>
                    </> : <PostList allPosts={filterdPosts}/>}

                </div>
            </div>
        </RapperHeaderComponent>
    )
}

const mapStateToProps = state => ({
    allPosts: state.posts.allPosts,
    allPostsLoading: state.posts.loading
})

const mapDispatchToProps = dispatch => ({
    Do_get_posts: () => dispatch(Do_get_posts())
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);