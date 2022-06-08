import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Header } from './components/Header';
import { Clients } from './components/Clients';
import './App.scss';

const client = new ApolloClient({
  uri: 'http://localhost:4711/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Header />
        <div className="">
          <h1 className="px-10 p-20">Hello world </h1>
          <Clients />
        </div>
      </ApolloProvider>
    </>
  );
}

export default App;
