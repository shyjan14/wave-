 export default function video(){
  const videoUrl = `${process.env.PUBLIC_URL}/video/wave-cafe-video-bg.mp4`;

    return (
        <div>
          <div className="video-wrapper">
            <video autoPlay muted loop >
              <source src={videoUrl} />
    
            </video>
          </div>
    
    
        </div>
    
      );
}