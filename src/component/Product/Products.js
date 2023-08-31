import React from "react";

export const Products = () => {
  return (
    <>
      <div className="container">
        <div className="noproductfound">
          <h4>Demo Videos</h4>
          </div>
          <div className="image-container-display">
            <span className="image-container-display"><img src="./images/redstoredisplay.jpg"/></span> 
            <span className="image-container-display"><img src="./images/whtstoredisplay.jpg"/></span> 
            <span className="image-container-display"><img src="./images/greenstoredisplay.jpg"/></span> 
            <span className="image-container-display"><img src="./images/colorstoredisplay.jpg"/></span> 
            </div>
            <div className="video-container-display">
            <span>
            <iframe width="400" height="315"
src="https://www.youtube.com/embed/QZuQ_ERpqss" allowFullScreen
    >
  
</iframe>
            </span>
            <span>
            <iframe width="400" height="315"
src="https://www.youtube.com/embed/lWe_Bl0k6TA" allowFullScreen
    >
</iframe>
            </span>
            </div>
            </div>
    </>
  );
};
