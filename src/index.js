import React from 'react';
import ReactDOM from 'react-dom';

// this is where we're call reactDOM.render and define our entry point to the
// app.
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>Hello World</div>
    );
  }

}

ReactDOM.render(<App />, document.getElementById('app'));