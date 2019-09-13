import React from 'react';
import Head from 'next/head';

import '../styles/main.sass';

import Banner from '../components/banner';
import Social from '../components/social';
import TechStack from '../components/tech-stack';
import Messaging from '../components/messaging';
import LanguageSwitch from '../components/language-switch';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return(
      <>
        <Head>
          <title>My Resume</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Manjari:400,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,700&display=swap" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/tachyons@4.11.1/css/tachyons.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-awesome-button@6.1.2/dist/styles.min.css" />          
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/react-awesome-button@6.1.2/dist/themes/theme-indigo.min.css" />
        </Head>
        <div className="font-weight-normal w-100 h-100">
          <LanguageSwitch />
          <Banner />
          <Social />
          <TechStack />
        </div>
      </>
    )
  }
};

export default Main;
