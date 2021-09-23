import Comments from "./Comments"
import video from "../data/video"


function CommentContainer(){

    
    return (
        
        <>
            {video.comments.map(vid => {
                return <Comments key={vid.id} user={vid.user} comment={vid.comment}/>
            })}
        </>
    )
}
    
        
    





export default CommentContainer