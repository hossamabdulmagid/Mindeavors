import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

const PostList = ({allPosts}) => {
    return (

        <>
            {allPosts.map((singlePost, idx) => {
                return (
                    <div className={"row bg-light mb-2"} style={{"padding":'10px',"text-align":"left"}} key={idx}>
                        <div className="col-md-3">
                            <img src={"https://picsum.photos/286/190?t="+Math.floor(Math.random()*10000)+""} alt={singlePost.title}/>
                        </div>
                        <div className="col-md-9 justify-content-lg-end">
                            <RapperHeaderComponent>
                                <h4>{singlePost.title}</h4>
                                <p>
                                    <small>
                                        {singlePost.body}
                                    </small>
                                </p>
                                <p style={{"text-align":"right"}}>
                                    <Link to={`/posts/${singlePost.id}`} style={{textDecoration: "none", color: 'black'}}>
                                        Read more
                                    </Link>
                                </p>
                            </RapperHeaderComponent>
                        </div>
                    </div>
                )
            })}
        </>
    )
}

export default PostList;