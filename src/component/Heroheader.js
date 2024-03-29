import React from "react";

export const Hero = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-inner">
            <div className="hero-copy">
              <div className="main_block">
                <span className="vidclassleft">
                <iframe width="400" height="315"
src="https://www.youtube.com/embed/uOZY1bRgaqc" allowFullScreen
    >
  
</iframe>
    </span>
 </div>   
  <div className="vidclassclear" />
  
              <h1 className="hero-title mt-0">
                RHYTHM VIZION SOUND{" "}
                <span className="hero-title-span">ACTIVATED GLASSES</span>
              </h1>
              <p className="hero-paragraph">
                The world's first sound activated glasses
              </p>
              <div className="hero-cta">
                {/* <a className="social-head" href="https://www.instagram.com/rhythmvizion/">
                  <i className="fa fa-facebook-square" aria-hidden="true"></i>
                </a> */}
                <a className="social-head" href="https://www.instagram.com/rhythmvizionai/">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                {/* <a className="social-head" href="#">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>
                <a className="social-head" href="#">
                  <i className="fa fa-twitter-square" aria-hidden="true"></i>
                </a> */}
              </div>
            </div>
         

     <div className="hero-figure">
              <img

                src={"./images/Glasseswb.png"}
                alt=""
              />
            </div>
                   

          </div>
        </div>
      </section>
    </main>
  );
};
