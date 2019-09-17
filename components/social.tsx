import React from 'react';
import { Container } from 'reactstrap';
import Icons from '../icons';

import lang from '../lang';

import '../styles/icons.sass';

class Social extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }

  render() {
    return(
      <div className="tc ph4">
        <h2 className="tc roboto-condensed">Social</h2>
        <p className="tc gray roboto">{lang.inviteToFollow}</p>
        <a target="_blank" href="https://github.com/donatien513"><Icons.github className="social-icons mh2" /></a>
        <a target="_blank" href="https://www.linkedin.com/in/donatien-nambinintsoa/"><Icons.linkedin className="social-icons mh2" /></a>
      </div>
    )
  }
};

export default Social;