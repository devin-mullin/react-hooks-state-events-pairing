import video from "../data/video"
import VideoInfo from "./VideoInfo"
import Video from "./Video"

function VideoContainer( {toggleComments}) {
    
    return (
   <>     
        <Video embedUrl = {video.embedUrl}/> 
        <VideoInfo title={video.title} views={video.views} createdAt={video.createdAt} upvotes={video.upvotes} downvotes={video.downvotes}/>    
        <button onClick={toggleComments}>Hide Comments</button>
   </>
    )
}


export default VideoContainer