import {Link} from 'react-router-dom'
import {RapperPostListComponent} from './postlist.styles';

const PostList = ({allPosts}) => {
    return (
        <RapperPostListComponent>
            {allPosts.map((singlePost, idx) => {
                return (
                    <div className={"row bg-light mb-2"} style={{}} key={idx}>
                        <div className="col-md-3">
                            <img src={"https://picsum.photos/286/190?t=" + Math.floor(Math.random() * 10000) + ""}
                                 alt={singlePost.title}/>
                        </div>
                        <div className="col-md-9 justify-content-lg-end">
                            <RapperPostListComponent>
                                <h4>{singlePost.title}</h4>
                                <p>
                                    <small>
                                        {singlePost.body}
                                    </small>
                                </p>
                                <p className={'text-end'}>
                                    <Link to={`/posts/${singlePost.id}`}
                                          className={'Read-more'}
                                    >
                                        Read more
                                    </Link>
                                </p>
                            </RapperPostListComponent>
                        </div>
                    </div>
                )
            })}
        </RapperPostListComponent>
    )
}

export default PostList;