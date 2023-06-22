"use client";
import React from 'react';
import { FooterCtas } from '@bolttech/atoms-footer';

const Footer: React.FC = () => {
  return (
    <FooterCtas
      labelLinks={[]}
      labelLogo='bolttech'
      imgLogo='https://camo.githubusercontent.com/04c0e9fb7cddce6bea2a1ab47b0ae32ec6563977f1d2eec99a1618e2cf2c03d9/68747470733a2f2f7777772e626f6c74746563682e636f2e74682f626c6f672f77702d636f6e74656e742f75706c6f6164732f323032302f31302f6c6f676f2e706e67'
      copyRightInfo='© 2021 Bolttech. All rights reserved.'
    />
  );
}

export default Footer;