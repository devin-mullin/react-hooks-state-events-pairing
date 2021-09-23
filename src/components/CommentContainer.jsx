import Comments from "./Comments"
import video from "../data/video"


function CommentContainer({comment, user}){
    console.log(comment);
    
    return(
        <div>
            <h1>
                {comment}
                {user}
            </h1>
        </div>
    )
    }
        
    





export default CommentContainer