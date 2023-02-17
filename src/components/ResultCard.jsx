import React from "react";
import Maps from "../components/Maps";

function ResultCard(props) {
    console.log(props);
    return (
        <div className="container result-container">
            <div className="card-section">
                <p className="card-header">GEOLOCATION DETAILS</p>
                <div className="card-details">
                    <p className="card-subheader">IP ADDRESS</p>
                    <p className="card-description">{props.ip}</p>
                </div>
                <div className="card-details">
                    <p className="card-subheader">LOCATION</p>
                    <p className="card-description">{props.location}</p>
                </div>
                <div className="card-details">
                    <p className="card-subheader">TIMEZONE</p>
                    <p className="card-description">{props.timezone !== undefined ? `UTC ${props.timezone}` : "NA"}</p>
                </div>
                <div className="card-details">
                    <p className="card-subheader">ISP</p>
                    <p className="card-description">{props.isp !== undefined ? props.isp : "NA"}</p>
                </div>
            </div>
            <div className="map-result">
                {props.latitude !== undefined && 
                    <Maps 
                    location={props.location}
                    latitude={props.latitude}
                    longitude={props.longitude}
                />
                }
            </div>
        </div>
    )
}

export default ResultCard;