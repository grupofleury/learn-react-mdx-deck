import React from 'react';
import {graphql, QueryRenderer} from 'react-relay';

const environment = /* defined or imported above... */;

export default class App extends React.Component {
  render() {
    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query UserQuery {
            viewer {
              id
            }  
          }
        `}
        variables={{}}
        render={({error, props}) => {
          if (error) {
            return <div>Error!</div>;
          }
          if (!props) {
            return <div>Loading...</div>;
          }
          return <div>User ID: {props.viewer.id}</div>;
        }}
      />
    );
  }
}