import React from 'react';
import PropTypes from 'prop-types';
import Row from "./layout/Row";
import Col from "./layout/Col";

const Hero = () => {
    return (
        <Row>
            <Col>
                <h1 className={"w-full"}>{"Hi, I'm dom the dev"}</h1>
                <p className={"w-full text-2xl mt-4"}>{"A Fullstack JavaScript Developer never tired of learning and always up for new projects."}</p>
            </Col>
        </Row>
    );
};

export default Hero;
