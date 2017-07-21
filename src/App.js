import React, { Component } from 'react';
import './App.css';

import {
  gql,
  graphql,
} from 'react-apollo';

// Remember to use gql, and '`'
const Query = gql`{
  allCourses {
    id
    name
  }
}`;


class App extends Component {
  render() {

    console.log(this.props.data);

    const { allCourses, loading } = this.props.data;

    return (
      <div>
        <ul>
          {!loading && allCourses.map(course => {
            return <li>{course.name}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default graphql(Query)(App);

// export default App;
