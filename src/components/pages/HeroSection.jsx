import React from "react";

function HeroSection() {
  return (
    <div className="mt-12.5 flex ">
        <div className="boxText w-142.5 72.5 opacity-40 bg-black rounded-3xl px-7 py-6 absolute z-10 mt-75 ml-110">
            <h1 className="text-2xl font-extrabold">Meet all the heroes from the field</h1>
            <p>Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis placerat dolor. Purus urna in sit nullam proin. </p>
        </div>
      {/* caruse Part start */}
      <div className="carousel w-full h-120.5 z-2">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="src/assets/cauasle image/img1.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
          src="src/assets/cauasle image/img2.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="src/assets/cauasle image/img3.png"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="src/assets/cauasle image/img4.jpg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      {/* carusele part End */}
    </div>
  );
}

export default HeroSection;
