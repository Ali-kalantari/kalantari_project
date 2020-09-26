import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { HandleChange } from './utiliti';

export const ModalStart = props => {
    const { that } = props;
    return (
        <div>
            <Modal isOpen={that.state.modal} toggle={that.toggle}>
                <ModalHeader toggle={that.toggle}>Choose a name for each player (: </ModalHeader>
                <ModalBody className='modal__modal-body'>
                    <p className='modal__p'>Name Player one </p>
                    <Input type='text' placeholder='example: Farshad' name='input_new' onChange={HandleChange.bind(that)} />
                    <p className='modal__p'>Name Player Two </p>
                    <Input type='text' placeholder='example: Ali' name='input_new2' onChange={HandleChange.bind(that)} />
                    <p className='modal__p'>You want to play a few rounds ?? </p>
                    <Input defaultValue='3' type='select' name='numberRound' onChange={HandleChange.bind(that)}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                        <option value='8'>8</option>
                        <option value='9'>9</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button className='modal--Btn' color='success' onClick={that.startGame}>START</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export const ModalNotStarted = props => {
    const { that } = props;
    return (
        <div>
            <Modal isOpen={that.state.modalNotStarted} toggle={that.toggleClose}>
                <ModalHeader toggle={that.toggleClose}>Not starting the game ): </ModalHeader>
                <ModalBody>
                    <p className='modal_nostart'>Click the 'Start Game' button to start the game</p>
                </ModalBody>
                <ModalFooter>
                    <Button className='modal--Btn' color='primary' onClick={that.toggleClose} >OK</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export const ModalWinner = props => {
    const { that } = props;
    return (
        <div>
            <Modal isOpen={that.state.modalWinner}>
                <ModalHeader className='modal__winner-header' toggle={that.toggleCloseWinner}>Bravo! You're the winner </ModalHeader>
                <ModalBody className='modal__winner-body'>
                    <p>player '{that.state.winnerName}' is win in round {that.state.round - 1}</p>
                </ModalBody>
                <ModalFooter>
                    <Button className='modal--Btn' color='primary' onClick={that.toggleCloseWinner} >Continue the competition</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export const ModalGameover = props => {
    const { that } = props;
    return (
        <div>
            <Modal isOpen={that.state.modalGameover}>
                <ModalHeader className='modal__gameover-header' toggle={that.toggleCloseGameover}>No player wins ): </ModalHeader>
                <ModalBody className='modal__gameover-body'>
                    <p className=''>!! No player wins !! <br /> Please click on the 'OK' button to continue</p>
                </ModalBody>
                <ModalFooter className='modal__gameover-footer'>
                    <Button className='modal--Btn' color='primary' onClick={that.toggleCloseGameover} >OK</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export const ModalEndGame = props => {
    const { that } = props;
    return (
        <div>
            <Modal isOpen={that.state.modalEndGame}>
                <ModalHeader className='modal__endGame-header' toggle={that.toggleModalEndGame}>The game is over</ModalHeader>
                <ModalBody className='modal__endGame-body'>
                    <p className=''>{that.state.ultimateWinner !== 'The result of your game is equal' ? 'The final winner is ' : ''}
                        <span> {that.state.ultimateWinner} </span>
                    </p>
                </ModalBody>
                <ModalFooter className='modal__endGame-footer'>
                    <Button className='modal--Btn' color='warning' onClick={that.toggleModalEndGame} >Fine</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}