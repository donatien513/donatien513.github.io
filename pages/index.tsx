import React from 'react';
import Head from 'next/head';
import { NextSeo, SocialProfileJsonLd } from 'next-seo';
import ReactGA from 'react-ga';

import '../styles/main.sass';

import Banner from '../components/banner';
import Social from '../components/social';
import TechStack from '../components/tech-stack';
import Messaging from '../components/messaging';
import LanguageSwitch from '../components/language-switch';

interface MainProps {};

interface MainState {};

const URL = 'https://donatien513.github.io/my-resume/';
const TITLE = 'Donatien NAMBININTSOA | Resume';
const DESCRIPTION = 'I am a full stack devloper. I use Node, React, Flutter, MongoDB and other tools to build nice apps.';

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
  <NextSeo
    title={TITLE}
    description={DESCRIPTION}
    openGraph={{
      type: 'website',
      url: URL,
      title: TITLE,
      description: DESCRIPTION,
      images: [
        {
          url: 'https://cdn.jsdelivr.net/gh/donatien513/my-resume/my-photo.jpg',
          width: 800,
          height: 800,
          alt: 'My photo',
        },
      ],
    }}
    twitter={{
      handle: '@handle',
      site: '@site',
      cardType: 'summary_large_image',
    }}
  />
  <SocialProfileJsonLd
    type="Person"
    name="Donatien NAMBININTSOA"
    url={URL}
    sameAs={[
      'https://github.com/donatien513',
      'https://www.linkedin.com/in/donatien-nambinintsoa/'
    ]}
  />
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
      </>
    )
  }
};

ReactGA.initialize(process.env.GA_TRACKING_ID);
ReactGA.pageview('/');

export default Main;
