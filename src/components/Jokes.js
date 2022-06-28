import React, { Component } from "react";

const tenJokesApi =
  "https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10";
const jokeApi = "https://v2.jokeapi.dev/joke/Programming?type=twopart";

const Joke = ({ joke: { setup, delivery } }) => (
  <p>
    {setup} <em>{delivery}</em>
  </p>
);

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch(jokeApi)
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }));
  }

  fetchJokes = () => {
    fetch(tenJokesApi)
      .then((response) => response.json())
      .then((json) => this.setState({ jokes: json.jokes }));
  };

  render() {
    return (
      <div>
        <h2>Highlighted Joke</h2>
        <Joke joke={this.state.joke} />
        <hr />
        <h3>Want more jokes?</h3>
        <button onClick={this.fetchJokes}>Click me!</button>
        {this.state.jokes.map((joke) => (
          <Joke key={joke.id} joke={joke} />
        ))}
      </div>
    );
  }
}
export default Jokes;
