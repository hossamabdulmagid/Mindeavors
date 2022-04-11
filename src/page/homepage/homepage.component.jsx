import Logohomepage from '../../homepage.png'
import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import {connect} from 'react-redux';
import {Do_get_posts} from "../../redux/posts/post-action";
import {useEffect} from "react";

const Homepage = ({Do_get_posts, allPosts}) => {

    let CompanyName = 'How We Deliver';

    useEffect(() => {
        Do_get_posts();
    }, [Do_get_posts])

    return (
        <RapperHeaderComponent className={'container'}>
            <img src={Logohomepage} alt={"HomePage"}/>
            <h1>
                {CompanyName.toUpperCase()}
            </h1>
            <span className={"blueLine"}/>
            <h3>
                Through our diversity of knowledge in multiple domains, we do it right! We deliver business and
                technology transformation from start to finish, via agile methodologies, and strong customer alliance
                and involvement techniques, engineering excellence tools as well as hybrid teams, we deliver the best
                solutions that dissolve both business challenges and breakpoints via technology.
            </h3>
            {allPosts && allPosts.map((singlepost, idx) => {
                return (
                    <ul key={idx}>
                        <li>{singlepost.title}</li>
                        <li>{singlepost.body} </li>
                    </ul>
                )
            })}
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