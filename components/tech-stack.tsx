import React from 'react';
import { Container, Card, CardBody, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import nanoid from 'nanoid';
import { assign, get } from 'lodash';
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";
import TechStackList from '../datas/tech-stack-list';
import lang from '../lang';
import '../styles/icons.sass';


interface SingleStackProps extends React.Props<any> {
  stack: any
}

interface SingleStackState extends React.Props<any> { }


class SingleStack extends React.Component<SingleStackProps, SingleStackState> {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return(
      <>
        <Card className="border-0">
          <CardBody>
            <div className="dib w-100 tc animated fadeIn">
              <div className="animated zoomIn">
                { this.props.stack.icon }
              </div>
            </div>
          </CardBody>
        </Card>
      </>
    )
  }
}

const NUMBER_OF_BYTE = 6;
const techStacks = TechStackList.map(stack => {
  return assign(stack, { _key: nanoid(NUMBER_OF_BYTE) });
});

interface TechStackProps { }

interface TechStackState {
  modalOpen: boolean
}

class TechStack extends React.Component<TechStackProps, TechStackState> {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this._toggleModalOpen = this._toggleModalOpen.bind(this);
  }

  private _toggleModalOpen() {
    this.setState({ modalOpen: !this.state.modalOpen });
  }

  public render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };

    return(
      <>
        <Container className="mv5">
          <h2 className="tc roboto-condensed">Tech Stack</h2>
          <Row>
            <Col lg="2" xl="3"></Col>
            <Col md="12" lg="8" xl="6">
              <p className="tc gray dib ph4 roboto">
                {lang.techStackChoice}
              </p>
            </Col>
            <Col lg="2" xl="3"></Col>
          </Row>
          <div className="tc roboto">{lang.toolsIUse} :</div>
          <div>
            <Slider className="dib w-100 mw7 center" {...settings}>
              {
                techStacks
                .filter(stack => stack.icon)
                .map(stack => 
                  <div className="mv3" key={stack._key}>
                    <SingleStack stack={stack} />
                  </div>
                )
              }
            </Slider>
          </div>
        </Container>
      </>
    );
  }
};

export default TechStack;
