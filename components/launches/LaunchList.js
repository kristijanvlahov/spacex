import classes from "./LaunchList.module.css";
import LaunchItem from "./LaunchItem";

function LaunchList(props) {
  return (
    <main className={classes.main}>
      <div className={classes.grid}>
        {props.launches.map((launch) => (
          <LaunchItem
            key={launch.id}
            id={launch.id}
            mission_name={launch.mission_name}
            launch_site={launch.launch_site}
            launch_date_local={launch.launch_date_local}
          />
        ))}
      </div>
    </main>
  );
}
export default LaunchList;
