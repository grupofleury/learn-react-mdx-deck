import React from 'react';
import ApolloClient from 'apollo-boost';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});


const GET_DOG = gql`
  query {
    dog(breed: "bulldog") {
      id
      breed
      displayImage
    }
  }
`

const App = () => (
  <Query query={GET_DOG} client={client}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return (
        <Dog url={data.dog.displayImage} breed={data.dog.breed} />
      )
    }}
  </Query>
)