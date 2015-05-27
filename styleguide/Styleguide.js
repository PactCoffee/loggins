import React from 'react';
import BtnSection from './sections/BtnSection';
import FormSection from './sections/FormSection';

export default class Styleguide extends React.Component {
  render() {
    return (
      <div>
        <BtnSection/>
        <FormSection/>
      </div>
    );
  }
}
