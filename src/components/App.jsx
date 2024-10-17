import React, { useState } from 'react'
import Header from './header';
import Title from './title';
import SubscribeBlock from './subscribe';
import CardHolder from './cardHolder';
import Footer from './footer';

const App=()=>{
    return(
        <div>
            <Header />
            <Title />
            <SubscribeBlock />
            <CardHolder />
            <Footer />
        </div>
    );
}

export default App;
