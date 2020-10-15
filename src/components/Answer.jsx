import React from "react";
import styled from "styled-components";

const EightBallAnswer = styled.div`
    background: #2a2a2d;
    border: solid 2px black;
    border-radius: 50%;
    color: whitesmoke;
    font-size: 2rem;
    font-weight: bold;
    height: 20rem;
    margin: 2rem auto auto;
    padding: 32px;
    width: 20rem;
    `;

    const NumberEight = styled.div`
    background-color: white;
    border-radius: 50%;
    color: black;
    height: 5rem;
    line-height: 1.5;
    font-size: 3rem;
    margin: 1rem auto 2rem;
    padding: 1rem;
    width: 5rem;
    `;

    const Answer = (props) => {
    return (
        <>
        <EightBallAnswer>
            <NumberEight>8</NumberEight>{props.answer}
        </EightBallAnswer>
        </>
    );
};

export default Answer;
