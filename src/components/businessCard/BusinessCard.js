import React, {Component} from 'react';
import logo from './../../assets/logo.png';
import emailLogo from './../../assets/email.png';
import mobileLogo from './../../assets/phone-call.png';
import githubLogo from './../../assets/github.png';
import user from './../../assets/user.json';
import ContactInfo from './ContactInfo';
import Logo from './Logo';
import Name from './Name';
import WorkInfo from './WorkInfo';


function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const BusinessCard = () => (
  <div className="Business-card">
    <div className="Logo-container">
      <Logo logo={logo}/>
    </div>
    <div className="Basic-info">
      <Name name={formatName(user)}/>
      <WorkInfo position={user.position}/>
      <div className="Contact-info">
        <ContactInfo logo={emailLogo} value={user.email} type="E-mail" />
        <ContactInfo logo={githubLogo} value={user.github} type="GitHub" />
        <ContactInfo logo={mobileLogo} value={user.mobile} type="Mobile" />
      </div>
    </div>
  </div>
);

export default BusinessCard;