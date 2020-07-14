import App from "next/app";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
     html {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    *, *::before, *::after {
            box-sizing: inherit;
    }

    ul, li, h1, h2, h3, p, button {
            margin: 0;
    }

    ul {
            list-style: none;
    }

    button {
            background: transparent;
            border: 0;
            outline: 0;
    }

    body {
            background: #fefefe;
            height: 100vh;
            margin: 0 auto;
            overscroll-behavior: none;
            width: 100%;
            font-family: 'Lato', sans-serif;
            font-size: 16px;
            color: #273b47;
            text-rendering: optimizeLegibility;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
    }
`;

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    );
  }
}
