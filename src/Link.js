import React from 'react';

const Link = (props) => {
    const {href} = props;
    return (
      <a
            className="App-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
    )
  }

const LinkDua = () => {
    return (
      <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
    )
  }

const LinkTiga = () => {
    return (
      <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
    )
  }

export default Link;

export {LinkDua, LinkTiga};