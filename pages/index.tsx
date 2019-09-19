import React from 'react';
import Head from 'next/head';

import '../styles/main.sass';

import Banner from '../components/banner';
import Social from '../components/social';
import TechStack from '../components/tech-stack';
import Messaging from '../components/messaging';
import LanguageSwitch from '../components/language-switch';

interface MainProps {};

interface MainState {};

class Main extends React.Component<MainProps, MainState> {
  constructor(props) {
    super(props);
    this.state = { };

    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    this.setState({});
  }

  public render() {
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
          <LanguageSwitch refreshPage={this.refresh} />
          <Banner />
          <Social />
          <TechStack />
        </div>
<span id="wts1904503">&nbsp;</span><script>
var wts=document.createElement('script');wts.type='text/javascript';
wts.async=true;wts.src='https://wts.one/1/1904503/log6_2.js';
document.getElementById('wts1904503').appendChild(wts);
</script><noscript><a href="https://www.web-stat.com">
<img src="https://wts.one/6/1/1904503.gif" 
alt="Web-Stat web statistics" /></a></noscript>
      </>
    )
  }
};

export default Main;
