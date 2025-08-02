import React from "react";

function ProfessionalHockeysClub() {
  return (
    <div>
      <div className="text-box w-full h-47.5 flex flex-col items-center py-8 border-x-2 border-dotted border-white">
        <h1 className="text-4xl font-bold">Professional Hockeys Club</h1>
        <p className="text-center">
          Dit amet consectetur. Condimentum dignissim adipiscing aliquam turpis
          <br />
          placerat dolor. Purus urna in sit nullam proin.
        </p>
      </div>
      <div className="circleProgressBars flex sm:flex-col lg:flex-row items-center justify-between w-full">
        <div className="circleBox w-62.5 h-60 flex flex-col items-center justify-center">
          <div
            className="radial-progress text-red-600 bg-transparent"
            style={{ "--value": 87 }}
            aria-valuenow={87}
            role="progressbar"
          >
            <h1 className="text-white">87%</h1>
          </div>
          <h1>Prayer Facility</h1>
          <p className="text-center">
            Amet consectetur. Condimentum dignissim adipiscing .
          </p>
        </div>{" "}
        {/* Circle End here */}
        <div className="circleBox w-62.5 h-60 flex flex-col items-center justify-center">
          <div
            className="radial-progress text-sky-400 bg-transparent"
            style={{ "--value": 87 }}
            aria-valuenow={87}
            role="progressbar"
          >
            <h1 className="text-white">87%</h1>
          </div>
          <h1>Prayer Facility</h1>
          <p className="text-center">
            Amet consectetur. Condimentum dignissim adipiscing .
          </p>
        </div>{" "}
        {/* Circle End here */}
        <div className="circleBox w-62.5 h-60 flex flex-col items-center justify-center">
          <div
            className="radial-progress text-green-400 bg-transparent"
            style={{ "--value": 87 }}
            aria-valuenow={87}
            role="progressbar"
          >
            <h1 className="text-white">87%</h1>
          </div>
          <h1>Prayer Facility</h1>
          <p className="text-center">
            Amet consectetur. Condimentum dignissim adipiscing .
          </p>
        </div>{" "}
        {/* Circle End here */}
        <div className="circleBox w-62.5 h-60 flex flex-col items-center justify-center">
          <div
            className="radial-progress text-yellow-500 bg-transparent"
            style={{ "--value": 87 }}
            aria-valuenow={87}
            role="progressbar"
          >
            <h1 className="text-white">87%</h1>
          </div>
          <h1>Prayer Facility</h1>
          <p className="text-center">
            Amet consectetur. Condimentum dignissim adipiscing .
          </p>
        </div>{" "}
        {/* Circle End here */}
      </div>
    </div>
  );
}

export default ProfessionalHockeysClub;
