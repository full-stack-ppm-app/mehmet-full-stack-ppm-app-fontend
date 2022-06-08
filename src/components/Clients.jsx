import { gql, useQuery } from '@apollo/client';
import { ClientRow } from './ClientRow';
const GET_CLIENTS = gql`
  query getClients {
    clients {
      name
      email
      phone
    }
  }
`;

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Etwas ist schief gelaufen</p>;
  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client}></ClientRow>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};