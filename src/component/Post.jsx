import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostListContext } from "../store/post-list-store";


const Post = ({ post }) => {
    const { deletePost } = useContext(PostListContext);
    return (
        <div className="flex align-start justify-center">
            <div className="card" style={{ width: "23.5rem", margin: "1rem" }}>
                <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <span onClick={() => deletePost(post.id)} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        <MdDelete style={{ width: "1.5rem", height: "1.5rem" }} />
                    </span>
                    <p className="card-text">{post.body}</p>
                    {post.tags.map((tag) => {
                        return <span key={tag} className="badge text-bg-primary p-2 m-1">{tag}</span>
                    })}
                    <div className="alert alert-primary mt-1" role="alert">
                        <b>{post.reactions}</b> people reacted to this post.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;