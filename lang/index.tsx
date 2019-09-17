import LocalizedStrings from 'react-localization';
import EventEmitter  from 'eventemitter3';

import fr from './fr';
import en from './en';

const lang = new LocalizedStrings({
  fr,
  en
});

export default lang;
