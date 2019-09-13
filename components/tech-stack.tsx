import React from 'react';
import { Container, Card, CardBody, Row, Col } from 'reactstrap';
import nanoid from 'nanoid';
import { assign, get } from 'lodash';
import Icons from '../icons';

import '../styles/icons.sass';

interface Stack extends React.Props<any> {
  stack: any
}

class SingleStack extends React.Component<Stack, any> {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return(
      <Card>
        <CardBody>
          <div className="dib w-100 tc"> { this.props.stack.icon } </div>
        </CardBody>
      </Card>
    )
  }
}

const techStacks = [
  { name: 'Node', icon: <Icons.node /> },
  { name: 'Golang', icon: <Icons.golang /> },
  { name: 'React', icon: <Icons.react /> },
  { name: 'MongoDB', icon: <Icons.mongodb /> },
  { name: 'Flutter', icon: <Icons.flutter /> },
  { name: 'Git', icon: <Icons.git /> },
  { name: 'AWS', icon: <Icons.aws /> },
  { name: 'Firebase', icon: <Icons.firebase /> },
].map(stack => {
  return assign(stack, { _key: nanoid(6) });
});

class TechStack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  componentDidMount() {

  }

  render() {
    return(
      <Container className="mt5">
        <h2 className="tc roboto-condensed">Tech Stack</h2>
        <Row>
          <Col lg="2" xl="3"></Col>
          <Col md="12" lg="8" xl="6">
            <p className="tc gray dib ph4 roboto">
              J'utilise les outils qui allient performance et simplicité.
              Il est primordiale de faire le bon choix pour être productif, ainsi, avoir de meilleur resultat.
            </p>
          </Col>
          <Col lg="2" xl="3"></Col>
        </Row>
        <div className="tc roboto">Voici les technologies que j'utilise principalement :</div>
        <Row>
          {
            techStacks.map(stack => 
              <Col className="mv3" xs="6" sm="6" md="4" lg="3" xl="2" key={stack._key}>
                <SingleStack stack={stack} />
              </Col>
            )
          }
        </Row>
      </Container>
    )
  }
};

export default TechStack;