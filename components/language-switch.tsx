import React from 'react';
import Select from 'react-select';
import { Jumbotron, Container } from 'reactstrap';
import lang from '../lang';

const languages = lang.getAvailableLanguages().map((langCode) => {
  return {
    default: langCode === lang.getLanguage() ? true : undefined,
    label: langCode.toUpperCase(),
    value: langCode
  };
});

interface LanguageSwitchProps {
  refreshPage(): void
};

interface LanguageSwitchState { };

class LanguageSwitch extends React.Component<LanguageSwitchProps, LanguageSwitchState> {
  constructor(props) {
    super(props);
    this.state = {

    };

    this._changeLang = this._changeLang.bind(this);
  }

  private _changeLang(langChange) {
    lang.setLanguage(langChange.value.toLowerCase());
    this.props.refreshPage();
  }

  public render() {
    return(
      <div className="fixed dib bottom-0 right-0 z-999 w4 ph3 pv3">
        <Select
          menuPlacement="top"
          defaultValue={languages.find(lang => lang.default)}
          isSearchable={false}
          onChange={this._changeLang}
          options={languages}
        />
      </div>
    );
  }
};

export default LanguageSwitch;
