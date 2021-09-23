import video from "../data/video.js";
import VideoContainer from "./VideoContainer.jsx";
import CommentContainer from "./CommentContainer.jsx";


function App() {

  return (
    <div className="App">
      <VideoContainer />
      <CommentContainer key={video.comments.id} user={video.comments.user} comment={video.comments.comment}/>
    </div>
    
  );
}

export default App;
