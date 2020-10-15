import React, { useState } from "react";
import Answer from "./Answer";
import styled from "styled-components";

const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: <div id="2a2a2d"></div>;
`;

const Question = styled.label`
    font-size: 1em;
    text-align: center;
    color: #2a2a2d;
`;

const EightBall = (props) => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    const _handleChange = (question) => {
        setQuestion(question);
    };

    const _handleSubmit = async (event) => {
        event.preventDefault();
        const url = `https://8ball.delegator.com/magic/JSON/${question}`;
        const response = await fetch(url);
        const data = await response.json();

        setAnswer(data.magic.answer);
    };

    return (
        <>
        <Title>
            Magic 8-Ball
        </Title>
        <form onSubmit={(event) => _handleSubmit(event)}>
            <Question>
            Ask a Yes or No Question
            <p>
            <input
                type="text"
                value={question}
                onChange={(event) => _handleChange(event.target.value)}
            />
            </p>
            </Question>
            <button type="submit">Magic 8-Ball says ...</button>
        </form>
        {!!answer ? <Answer answer={answer} /> : null}
        </>
    );
};

export default EightBall;
