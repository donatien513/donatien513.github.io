import React from 'react';
import Typed from 'react-typed';
import { Jumbotron, Container } from 'reactstrap';
import SyntaxHighlighter from 'react-syntax-highlighter';
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
      <div className="w-100 mb5 relative">
        <div className="w-100 h-100 absolute z--1 bg-navy"></div>
        <Wave className="w-100 h6 absolute z--1 upside-down" fill='#34eb9e'
          paused={false}
          options={{
            height: 49,
            amplitude: 85,
            speed: 0.09,
            points: 7
          }}
        />
        <Wave className="w-100 h6 absolute z--1 upside-down" fill='#594fe8'
          paused={false}
          options={{
            height: 70,
            amplitude: 45,
            speed: 0.15,
            points: 5
          }}
        />
        <div className="w-100 z-1">
          <Jumbotron fluid className="bg-transparent pb0">
            <div className="w-100">
              <Container className="h-100 ph4">
                <h1 className="display-3 lh-solid mv-0 monospace white">Tpkl</h1>
                <h3 className="f3-l lh-solid mv-0 white roboto-condensed">Je conçois des applications&nbsp;
                <span className="light-blue">
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
                <p className="roboto white">
                  Donatien NAMBININTSOA ANDRIANIRINA, <span className="near-white">développeur Full Stack</span>
                </p>
              </Container>
            </div>
          </Jumbotron>
          <Jumbotron className="w-100 ph0 pv0 br0 relative bg-white z--1">
            <div className="absolute bg-navy w-100 h-50 z--1">aaa</div>
            <Container>
              <div>
<SyntaxHighlighter className="mv5 mw7 w-100 center shadow f4 f6-sm bg-white" language="javascript">{
`const network = require("awesome-recruitment-network");
const { skills, expectedSalary } = require("./me");

// I am opened to opportunities
network.on("opportunity", (job, recruiter) => {
  if (skills.includes(job.type) && job.salary >= expectedSalary) {
    return recruiter.message({
      message: "I'd be happy to collaborate with You :)"
    });
  }
}).subscribe();

`
}</SyntaxHighlighter>
              </div>
            </Container>
          </Jumbotron>
        </div>
      </div>
    )
  }
};

export default Banner;