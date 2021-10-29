import React from 'react';
import PropTypes from 'prop-types';
import Row from "./layout/Row";
import Col from "./layout/Col";

const Hero = ({title, description}) => {
    return (
        <Row>
            <Col>
                <h1>{title}</h1>
            </Col>
            <Col>
                <p>{description}</p>
            </Col>
        </Row>
    );
};

Hero.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
};

export default Hero;
