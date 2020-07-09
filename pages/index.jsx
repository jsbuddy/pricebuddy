import "core-js";
import React, { Component } from "react";
import Header from "../components/Header";
import Results from "../components/Results";
import Loader from "../components/Loader";
import Head from "next/head";
import "isomorphic-fetch";
import { Icon } from "react-icons-kit";
import { rotateRight } from "react-icons-kit/fa/rotateRight";

class App extends Component {
  state = {
    searched: false,
    fetching: false,
    data: {},
    err: false,
  };

  startFetch = (q) => {
    this.q = q;
    this._fetch(this.q);
  };

  _fetch = () => {
    this.setState({ fetching: true, searched: true, err: false });

    fetch(`/api/fetch?q=${this.q}`)
      .then((res) => res.json())
      .then((data) => this.setState({ fetching: false, data }))
      .catch((err) => this.setState({ err: true }));
  };

  retry = () => this._fetch(this.q);

  render() {
    const { searched, fetching, data, err } = this.state;

    return (
      <div>
        <Header onFetch={this.startFetch} searched={searched} />
        {fetching && !err && <Loader />}
        {!fetching && searched && !err && <Results data={data} />}
        {err && (
          <div className="error container">
            <h4>An error occurred</h4>
            <button onClick={this.retry}>
              <span className="icon">
                <Icon icon={rotateRight} />
              </span>{" "}
              Retry
            </button>
          </div>
        )}

        <style global jsx>{`
          .error {
            height: 80vh;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-flow: column;
          }
          .error h4 {
            font-size: 1.3em;
            font-weight: 500;
            color: #ffabab;
            margin-bottom: 15px;
            letter-spacing: 0.4px;
          }
          .error button {
            border: 0;
            background-color: #eee;
            border-radius: 30px;
            padding: 0.7em 2em;
            color: inherit;
            cursor: pointer;
          }
          .error button:hover {
            background-color: #ddd;
          }
          .error button .icon {
            position: relative;
            top: 3px;
            margin-right: 5px;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Work Sans", "Segoe UI";
          }
          body {
            background-color: #fff;
            font-size: 14px;
            color: slategray;
          }
          a {
            color: slategrey;
            text-decoration: none;
          }
          img {
            width: 100%;
          }
          .container {
            position: relative;
            width: 100%;
            max-width: 1000px;
            margin: auto;
          }

          @media (max-width: 1050px) {
            .container {
              padding: 0 1em;
            }
          }

          @media (max-width: 600px) {
            body {
              font-size: 13px;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default App;
