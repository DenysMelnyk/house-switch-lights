import React from "react";
import store from "./store/store";
import Container from "./UI/Container/Container";
import House from "./components/House/House";

const HouseWrapper = () => (
    <div className='HouseWrapper'>
        <Container>
            <House state={store}/>
        </Container>
    </div>
);

export default HouseWrapper;