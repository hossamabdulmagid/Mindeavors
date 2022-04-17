import {Link} from 'react-router-dom'
import {RapperPostListComponent} from './postlist.styles';
import Moment from 'react-moment';
import Card from 'react-bootstrap/Card'

const PostList = ({allPosts}) => {
    return (
        <RapperPostListComponent>
            {allPosts.map((singlePost, idx) => {
                return (
                    <div className={"row bg-light mb-2"} style={{}} key={idx}>
                        <div className="col-md-3">
                            <img src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}
                                 alt={`${singlePost && singlePost.attributes && singlePost.attributes.title}`}/>
                        </div>
                        <div className="col-md-9 justify-content-lg-end">
                            <RapperPostListComponent>
                                <h4>{singlePost && singlePost.attributes && singlePost.attributes.title}</h4>
                                <p>
                                    <small>
                                        {singlePost && singlePost.attributes && singlePost.attributes.content}
                                    </small>
                                </p>
                                <p className={'text-end d-flex justify-content-end'}>
                                    <Link to={`/posts/${singlePost.id}`}
                                          className={'Read-more'}
                                    >
                                        Read more
                                    </Link>
                                </p>
                            </RapperPostListComponent>
                        </div>
                        <Card.Footer className="text-muted"> Create At : {" "}
                            <Moment
                                format="MMMM Do YYYY, h:mm a">
                                {singlePost && singlePost.attributes && singlePost.attributes.createdAt}
                            </Moment></Card.Footer>

                    </div>
                )
            })}
        </RapperPostListComponent>
    )
}

export default PostList;