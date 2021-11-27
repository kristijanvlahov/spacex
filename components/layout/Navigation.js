import classes from './Navigation.module.css';

function Navigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>SpaceX API</div>
    </header>
  );
}

export default Navigation;