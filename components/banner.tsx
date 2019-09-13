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
<SyntaxHighlighter className="mv5 mw7 w-100 center f5" language="javascript">{
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
              </Container>
            </div>
          </Jumbotron>
        </div>
      </div>
    )
  }
};

export default Banner;