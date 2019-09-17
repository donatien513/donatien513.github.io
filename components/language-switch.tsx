import React from 'react';
import Select from 'react-select';
import { Jumbotron, Container } from 'reactstrap';
import lang from '../lang';

const languages = lang.getAvailableLanguages().map((langCode) => {
  return {
    value: langCode,
    label: langCode.toUpperCase(),
    default: langCode === lang.getLanguage() ? true : undefined
  };
});

interface Props extends React.Props<any> {
  refreshPage: any
}

class LanguageSwitch extends React.Component<Props, any> {
  constructor(props) {
    super(props);
    this.state = {

    };

    this.changeLang = this.changeLang.bind(this);
  }

  changeLang(langChange) {
    lang.setLanguage(langChange.value.toLowerCase());
    this.props.refreshPage();
  }

  render() {
    return(
      <div className="fixed dib bottom-0 right-0 z-999 w4 ph3 pv3">
        <Select
          menuPlacement="top"
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