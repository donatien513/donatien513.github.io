import React from 'react';
import Select from 'react-select';
import { Jumbotron, Container } from 'reactstrap';

const languages = [
  { value: 'MG', label: 'Malagasy' },
  { value: 'FR', label: 'Français', default: true },
  { value: 'EN', label: 'English' },
];

class LanguageSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.changeLang = this.changeLang.bind(this);
  }
  componentDidMount() {

  }

  changeLang() {

  }

  render() {
    return(
      <div className="absolute dib top-0 right-0 z-999 w5 ph3 pv3">
        <Select
          defaultValue={languages.find(lang => lang.default)}
          isSearchable={false}
          onChange={this.changeLang}
          options={languages}
        />
      </div>
    )
  }
};

export default LanguageSwitch;