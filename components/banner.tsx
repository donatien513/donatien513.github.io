import React from 'react';
import Typed from 'react-typed';
import { Jumbotron, Container } from 'reactstrap';
import Wave from 'react-wavify'

import '../styles/banner.sass';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }

  render() {
    return(
      <div className="w-100 h-100">
        <Wave className="w-100 h6 absolute z--1 upside-down" fill='#594fe8'
          paused={false}
          options={{
            height: 30,
            amplitude: 45,
            speed: 0.15,
            points: 5
          }}
        />
        <div className="h-100 w-100 z-1">
          <Jumbotron fluid className="bg-transparent">
            <div className="w-100">
              <Container className="h-100 ph4">
                <h1 className="display-3 lh-solid mv-0 pacifico always-clear">Bonjour</h1>
                <h3 className="f3-l lh-solid mv-0 roboto-condensed">Je conçois des applications&nbsp;
                <span className="light-purple">
                  <Typed 
                    strings={[
                      'webs...',
                      'mobiles...',
                      'qui fonctionnent... :p',
                      'performantes...',
                    ]}
                    typeSpeed={60}
                    backSpeed={30}
                    backDelay={4000}
                    loop />
                </span>
                </h3>
                <p className="roboto">
                  Donatien NAMBININTSOA ANDRIANIRINA, <span className="gray">développeur Full Stack</span>
                </p>
              </Container>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  }
};

export default Banner;