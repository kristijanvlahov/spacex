import Head from "next/head";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { READ_QUERY } from "../query/Query";
import Layout from "../components/layout/Layout";
import styles from "../styles/Home.module.css";
import LaunchList from "../components/launches/LaunchList";

export default function Home(props) {
  return (
    <div className={styles.container}>
      <Head>
        <title>SpaceX API</title>
        <meta
          name="description"
          content="Browsing through past SpaceX launches"
        />
      </Head>
      <Layout/>
      <LaunchList launches={props.launches}/>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: READ_QUERY,
  });

  const launches = data.launchesPast;
  return {
    props: {
      launches: launches.map((launch)=>({
        mission_name: launch.mission_name,
        id: launch.id,
        launch_date_local: new Date(launch.launch_date_local).toLocaleDateString(
          "en-GB"
        ),
        launch_site: launch.launch_site.site_name_long
      })),
    }
  };
}
