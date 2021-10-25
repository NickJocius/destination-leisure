import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInUp } from 'react-animations';

const fadeIn = keyframes`${fadeInUp}`;

const CardOverUp = styled.div`
    display: ${props => props.hidden };
    position: absolute;
    width: 100%;
    height: 100%;
    background: white;
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
    animation: 1s ${fadeIn};
    top: 0;
    left:0;
    border-radius: 5px;
`;

const CardOverlay = ({ hidden, children }) => {
    
    return (
        <CardOverUp hidden={hidden}>
            <div className={`w-auto`}>{children}</div>
        </CardOverUp>
    )
}

export default CardOverlay
