import React from 'react';
import Typed from 'react-typed';
import { Jumbotron, Container } from 'reactstrap';

interface MessagingProps { };

interface MessagingState { };

class Messaging extends React.Component<MessagingProps, MessagingState> {
  constructor(props) {
    super(props);
    this.state = { };
  }

  public render() {
    return(
      <div className="w-100 h-100">
        <div className="h-100 w-100 z-1">
          Messaging
        </div>
      </div>
    );
  }
};

export default Messaging;
