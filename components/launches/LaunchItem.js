import Link from "next/link";
import classes from "./LaunchItem.module.css";

function LaunchItem(props) {
  return (
    <Link href={`${props.id}`}>
    <div key={props.id} className={classes.card}>
      <h3>{props.mission_name}</h3>
      {/* GraphQL shows error 400 (bad request) when trying to load the images */}
      <p>
        <b>Launch Date: </b>
        {props.launch_date_local}
      </p>
      <p>
        <b>Launch Site: </b>
        {props.launch_site}
      </p>
    </div>
    </Link>
  );
}
export default LaunchItem;
