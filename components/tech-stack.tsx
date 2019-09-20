import React from 'react';
import { Container, Card, CardBody, Row, Col, Modal, ModalBody, ModalHeader } from 'reactstrap';
import nanoid from 'nanoid';
import { useMediaQuery } from 'react-responsive'
import { assign, get } from 'lodash';
import { AwesomeButton } from "react-awesome-button";
import Slider from "react-slick";
import TechStackList from '../datas/tech-stack-list';
import lang from '../lang';

import '../styles/tech-stack.sass';
import '../styles/icons.sass';

const MobileMini = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 456 })
  return isMobile ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 457, maxWidth: 767  })
  return isMobile ? children : null
}
const LargerThanMobile = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

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
            <div className="dib w-100 tc">
              <div>
                { this.props.stack.icon }
              </div>
              <div className="mv3 gray">
                { this.props.stack.name }
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

const TechStackCarousel = (slidesToShow: number) => {
  const sliderProps = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1
  };

  return <Slider
    className="dib w-100 mw7 center" {...sliderProps}
    slidesToShow={slidesToShow}
  >
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
          <div className="relative">
            <div className="dib top-0 left-0 absolute w-10 h-100 z-1 bg-fade-right"></div>
            <div className="z--1">
              <MobileMini>{TechStackCarousel(1) }</MobileMini>
              <Mobile>{TechStackCarousel(2) }</Mobile>
              <LargerThanMobile>{TechStackCarousel(3)}</LargerThanMobile>
            </div>
            <div className="dib top-0 right-0 absolute w-10 h-100 z-1 bg-fade-left"></div>
          </div>
        </Container>
      </>
    );
  }
};

export default TechStack;
