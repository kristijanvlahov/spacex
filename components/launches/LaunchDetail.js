import classes from "./LaunchDetail.module.css";
import Link from "next/link";

function LaunchDetail(props) {
  return (
    <div key={props.id} className={classes.card}>
      <h3>Mission name: {props.mission_name}</h3>

      <div>
        <h5>Rocket details:</h5>
        <div>Name: {props.rocket_name}</div>
        <div>Flight: {props.rocket_flight}</div>
        <div>Reuse count: {props.rocket_reuse_count}</div>
        <div>
          Status: {props.rocket_status === null ? "N/A" : props.rocket_status}
        </div>
      </div>

      <div>
        <h5>Payload details</h5>
        <div>Type: {props.payload_type}</div>
        <div>
          Mass(kg):{" "}
          {props.payload_mass_kg === null ? "N/A" : props.payload_mass_kg}
        </div>
        <div>
          Mass(lbs):{" "}
          {props.payload_mass_lbs === null ? "N/A" : props.payload_mass_lbs}
        </div>
      </div>
      
      
        <Link href="/">
        <div className={classes.link}> Back to homepage</div>
        </Link>
      
    </div>
  );
}
export default LaunchDetail;
