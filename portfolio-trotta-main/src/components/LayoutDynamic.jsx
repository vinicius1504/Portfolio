import React from 'react';
import HeaderDynamic from './HeaderDynamic.jsx';
import Container1Dynamic from './Container1Dynamic.jsx';
import Container2Dynamic from './Container2Dynamic.jsx';
import Container3Dynamic from './Container3Dynamic.jsx';
import Container4Dynamic from './Container4Dynamic.jsx';
import FooterDynamic from './FooterDynamic.jsx';

const LayoutDynamic = () => {
    return (
        <div className="index-wrapper">
            <HeaderDynamic />
            <Container1Dynamic />
            <Container2Dynamic />
            <Container3Dynamic />
            <Container4Dynamic />
            <FooterDynamic />
        </div>
    );
};

export default LayoutDynamic;
