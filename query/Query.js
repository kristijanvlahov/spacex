import { gql } from '@apollo/client';

export const READ_QUERY = gql`
{
  launchesPast(limit: 10) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    rocket {
      rocket_name
      first_stage {
        cores {
          flight
          core {
            reuse_count
            status
          }
        }
      }
      second_stage {
        payloads {
          payload_type
          payload_mass_kg
          payload_mass_lbs
        }
      }
    }
  }
}
`;