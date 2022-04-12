import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const PostList = ({allPosts}) => {
    return (

        <>
            {allPosts.map((singlePost, idx) => {
                return (
                    <div className={"col-md-3"} key={idx}>
                        <RapperHeaderComponent>
                            <Link to={`/post/${singlePost.id}`} style={{textDecoration: "none",color:'black'}}>
                                <Card>
                                    <Card.Header as="h4">{singlePost.title}</Card.Header>
                                    <Card.Body>
                                        <Card.Title></Card.Title>
                                        <Card.Text>
                                            <small>{singlePost.body}</small>
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </RapperHeaderComponent>
                    </div>
                )
            })}
        </>
    )
}

export default PostList;