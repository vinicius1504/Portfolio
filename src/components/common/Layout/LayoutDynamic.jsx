import React from 'react';
import HeaderDynamic from '../Header/HeaderDynamic.jsx';
import Container1Dynamic from '../../containers/Container1/Container1Dynamic.jsx';
import Container2Dynamic from '../../containers/Container2/Container2Dynamic.jsx';
import Container3Dynamic from '../../containers/Container3/Container3Dynamic.jsx';
import Container4Dynamic from '../../containers/Container4/Container4Dynamic.jsx';
import Container5Dynamic from '../../containers/Container5/Container5Dynamic.jsx';
import FooterDynamic from '../Footer/FooterDynamic.jsx';

const LayoutDynamic = () => {
    return (
        <div className="index-wrapper">
            <HeaderDynamic />
            <Container1Dynamic />
            <Container2Dynamic />
            <Container3Dynamic />
            <Container4Dynamic />
            <Container5Dynamic />
            <FooterDynamic />
        </div>
    );
};

export default LayoutDynamic;
