import video from "../data/video.js";
import VideoContainer from "./VideoContainer.jsx";
import CommentContainer from "./CommentContainer.jsx";
import { useState } from "react/cjs/react.development";


function App() {
  const [showComments, setShowComments] = useState(true)

  function toggleComments(){
    setShowComments(showComments => !showComments)
  }

  return (
    <div className="App">
      <VideoContainer toggleComments = {toggleComments}  />
      <CommentContainer key={video.comments.id} user={video.comments.user} comment={video.comments.comment}/>
      {/* {showComments ? <CommentContainer comments={videoObj.comments}/>: null } */}
    </div>
    
  );
}

export default App;
