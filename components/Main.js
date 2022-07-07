import React from 'react';
import Portfolio from './portfolio';
import styled from 'styled-components';
import Promos from './promos';

const Main = ({ thirdWebTokens, sanityTokens, walletAddress }) => {
    return (
        <Wrapper>
            <Portfolio
                walletAddress={walletAddress}
                sanityTokens={sanityTokens}
                thirdWebTokens={thirdWebTokens}
            />
            <Promos />
        </Wrapper>
    )
};

export default Main;

const Wrapper = styled.div`
display: flex;
max-height: calc(100vh - 64px);
overflow: hidden;

& div {
    border-radius: 0.4rem;
}
`
