

function Video({embedUrl}){
    console.log({embedUrl})
    
    return(
    
    <div>
<iframe width="800" height="600" src={embedUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>       
    </div>)

}


export default Video