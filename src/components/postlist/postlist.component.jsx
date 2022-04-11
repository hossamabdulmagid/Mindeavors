import {RapperHeaderComponent} from "../../page/homepage/homepage.styles";

const PostList = ({allPosts}) => {
    return (

        <>
            <RapperHeaderComponent>

                {allPosts.map((singlePost, idx) => {
                    return (
                        <ul key={idx}>
                            <li><strong>id :</strong>{singlePost.id}</li>
                            <li><strong> title</strong> : {singlePost.title}</li>
                            <li><strong>body</strong> : {singlePost.body} </li>
                        </ul>
                    )
                })}

            </RapperHeaderComponent>
        </>
    )
}

export default PostList;