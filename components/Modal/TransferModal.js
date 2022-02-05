import React, { useState } from 'react';
import styled from 'styled-components';
import Transfer from './Transfer';

const TransferModal = ({ sanityTokens, thirdWebTokens, walletAddress }) => {
    const [action, setAction] = useState('send');
    const [selectedToken, setSelectedToken] = useState(sanityTokens[0]);

    const selectedStyle = {
        color: '#3773f5',
    }

    const unselectedStyle = {
        border: '1px solid #282b2f',
    }

    const selectedModal = option => {
        switch (option) {
            case 'send':
                return (
                    <Transfer
                        selectedToken={sanityTokens}
                        setAction={setAction}
                        thirdWebTokens={thirdWebTokens}
                        walletAddress={walletAddress}
                    />
                )
            case 'receive':
                return <h3>Receive</h3>
            default:
                return <h3>Send</h3>
        }
    }

    return (
        <Wrapper>
            <Selector>
                <Option
                    style={action === 'send' ? selectedStyle : unselectedStyle}
                    onClick={() => setAction('send')}>
                    <p>Send</p>
                </Option>
                <Option
                    style={action === 'receive' ? selectedStyle : unselectedStyle}
                    onClick={() => setAction('receive')}>
                    <p>Receive</p>
                </Option>
            </Selector>
            <ModalMain>
                {selectedModal(action)}
            </ModalMain>
        </Wrapper>
    );
};

export default TransferModal;

const Wrapper = styled.div`
height: 35rem;
width: 27rem;
color: white;
border: 1px solid #282b2f;
display: flex;
flex-direction: column;
`

const Selector = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 4rem;
`

const Option = styled.div`
height: 100%;
width: 100%;
display: grid;
place-items: center;
font-size: 1rem;
font-weight: 600;

&:hover {
    cursor: pointer;
    background-color: #111214;
}
`

const ModalMain = styled.div`
padding : 1rem;
flex: 1;
`