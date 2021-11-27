import { ApolloClient, InMemoryCache } from "@apollo/client";
import Head from 'next/head';
import { READ_QUERY } from "../query/Query";
import LaunchDetail from "../components/launches/LaunchDetail";
import { Fragment } from "react";
import Layout from "../components/layout/Layout";

function LaunchDetails(props) {
  return (
    <Fragment>
      <Head>
        <title>SpaceX API - Details</title>
      </Head>
      <Layout />
      <LaunchDetail
        mission_name={props.launches.mission_name}
        rocket_name={props.launches.rocket_name}
        rocket_flight={props.launches.rocket_flight}
        rocket_reuse_count={props.launches.rocket_reuse_count}
        rocket_status={props.launches.rocket_status}
        payload_type={props.launches.payload_type}
        payload_mass_kg={props.launches.payload_mass_kg}
        payload_mass_lbs={props.launches.payload_mass_lbs}
      />
    </Fragment>
  );
}
export async function getStaticPaths() {
  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: READ_QUERY,
  });
  const launches = data.launchesPast;

  return {
    fallback: "blocking",
    paths: launches.map((launch) => ({
      params: { launchId: launch.id },
    })),
  };
}
export async function getStaticProps(context) {
  const launchId = context.params.launchId;

  const client = new ApolloClient({
    uri: "https://api.spacex.land/graphql/",
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: READ_QUERY,
  });
  const selectedLaunch = await data.launchesPast.find(
    (launch) => launch.id === launchId
  );
  return {
    props: {
      launches: {
        id: selectedLaunch.id,
        mission_name: selectedLaunch.mission_name,
        rocket_name: selectedLaunch.rocket.rocket_name,
        rocket_flight: selectedLaunch.rocket.first_stage.cores[0].flight,
        rocket_reuse_count: selectedLaunch.rocket.first_stage.cores[0].core.reuse_count,
        rocket_status: selectedLaunch.rocket.first_stage.cores[0].core.status,
        payload_type: selectedLaunch.rocket.second_stage.payloads[0].payload_type,
        payload_mass_kg: selectedLaunch.rocket.second_stage.payloads[0].payload_mass_kg,
        payload_mass_lbs: selectedLaunch.rocket.second_stage.payloads[0].payload_mass_lbs,
      },
    },
  };
}
export default LaunchDetails;
