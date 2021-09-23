import VideoContainer from "./VideoContainer"

function Video({embedUrl}){
    console.log({embedUrl})
    
    return(
    
    <div>
<iframe width="800" height="600" src={embedUrl} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>       
    </div>)

}


export default Video