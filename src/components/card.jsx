import React from "react";

export default function Card(props) {
  return (
    <>
    <div className="flex items-center font-sans w-full h-56 p-4 gap-4 my-4 py-4">
      <img className="w-36 self-stretch rounded-md" src={props.imageUrl} alt="pic" />
      <div className="text-content flex flex-col justify-center self-stretch">
        <div className="header flex items-center">
          <img className="h-3 w-2 mr-1" src="src/assets/pin.png" alt="pin" />
          <span className="text-sm mr-2">
            {props.location.toUpperCase()}
          </span>
          <span className="text-gray-400 text-xs underline">
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </span>
        </div>
        <span className="title text-2xl font-semibold mb-6">{props.title}</span>
        <span className="text-sm font-semibold mb-2">{`${props.startDate}-${props.endDate}`}</span>
        <p className="text-xs">{props.description}</p>
      </div>
    </div>
    <hr />
    </>
  );
}
