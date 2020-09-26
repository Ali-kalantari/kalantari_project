import React from 'react';
import { Br } from './utiliti';
import iconX from './img/x.svg';
import iconO from './img/o.svg';
import { Container, Row, Col, Button } from 'reactstrap';
import { ModalStart, ModalNotStarted, ModalWinner, ModalGameover, ModalEndGame } from './start_game';

export default class Game extends React.Component {

    constructor() {
        super();
        this.helper = {
            ultimateWinner1: 0,
            ultimateWinner2: 0,
        };
    }

    state = {
        boardGame: [
            { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }
        ],
        playerOne: {
            name: 'player one',
            NumberOfWins: 0
        },
        playerTwo: {
            name: 'player two',
            NumberOfWins: 0
        },
        started: false,
        move: 0,
        round: 0,
        numberRound: 3,
        winnerStatus: false,
        winnerName: '',
        losserStatus: false,
        activeUser: true,
        txtButtonStart: 'Start Game',
        modal: false,
        modalNotStarted: false,
        modalWinner: false,
        modalGameover: false,
        modalEndGame: false,
        input_new: '',
        input_new2: '',
        endGame: false,
        ultimateWinner: '',
    };
    toggle = () => {
        if (this.state.txtButtonStart === 'Start Game') {
            this.setState(prevState => ({ modal: !prevState.modal }))
        }
        else {
            this.startAgain();
            this.setState({ txtButtonStart: 'Start Game' });
        }
    }

    toggleClose = () => {
        this.setState(prevState => ({ modalNotStarted: !prevState.modalNotStarted }))
    }

    toggleCloseWinner = () => {
        this.setState(prevState => ({ modalWinner: !prevState.modalWinner }))
        this.newRound();
    }

    toggleCloseGameover = () => {
        this.setState(prevState => ({ modalGameover: !prevState.modalGameover }))
        this.newRound();
    }

    toggleModalEndGame = () => {
        this.setState(prevState => ({ modalEndGame: !prevState.modalEndGame }))
    }

    startGame = () => {
        const { input_new, input_new2, playerTwo, playerOne } = this.state;
        this.setState({
            playerOne: {
                ...this.state.playerOne,
                name: input_new ? input_new : playerOne.name
            },
            playerTwo: {
                ...this.state.playerTwo,
                name: input_new2 ? input_new2 : playerTwo.name
            },
            started: true,
            modal: false,
            round: 1,
            txtButtonStart: 'Restart',
            ultimateWinner: ''
        });
        if (this.state.winnerStatus || this.state.losserStatus || this.state.started) {
            this.startAgain();
        }
    }

    startAgain = () => {
        let boardGame = [{ cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }];
        this.setState({
            boardGame,
            started: false,
            move: 0,
            winnerStatus: false,
            winnerName: '',
            losserStatus: false,
            activeUser: true,
            playerOne: {
                ...this.state.playerOne,
                name: 'player one',
                NumberOfWins: 0
            },
            playerTwo: {
                ...this.state.playerOne,
                name: 'player two',
                NumberOfWins: 0
            },
            round: 0,
        });
    }

    handelChange(index) {
        const { boardGame, move, winnerStatus, started, activeUser } = this.state;
        if (!boardGame[index].cell && move < 9 && !winnerStatus && started) {
            let boardGame = [...this.state.boardGame];
            boardGame[index].cell = activeUser ? iconX : iconO;
            this.setState((prevState) => ({
                boardGame,
                move: prevState.move + 1,
                activeUser: !prevState.activeUser,
                txtButtonStart: 'Restart',

            }));
            this.winner(index);
        }

        else if (!started) {
            this.setState(prevState => ({ modalNotStarted: !prevState.modalNotStarted }));
        }
    }

    winner(index) {
        const { boardGame, move } = this.state;
        const { cell } = boardGame[index];
        if (move >= 4) {
            if (boardGame[0].cell === boardGame[1].cell && boardGame[1].cell === boardGame[2].cell && boardGame[1].cell) {
                this.result(cell);
            }
            else if (boardGame[3].cell === boardGame[4].cell && boardGame[4].cell === boardGame[5].cell && boardGame[4].cell) {
                this.result(cell);
            }
            else if (boardGame[6].cell === boardGame[7].cell && boardGame[7].cell === boardGame[8].cell && boardGame[7].cell) {
                this.result(cell);
            }
            else if (boardGame[0].cell === boardGame[3].cell && boardGame[3].cell === boardGame[6].cell && boardGame[3].cell) {
                this.result(cell);
            }
            else if (boardGame[1].cell === boardGame[4].cell && boardGame[4].cell === boardGame[7].cell && boardGame[4].cell) {
                this.result(cell);
            }
            else if (boardGame[2].cell === boardGame[5].cell && boardGame[5].cell === boardGame[8].cell && boardGame[5].cell) {
                this.result(cell);
            }
            else if (boardGame[0].cell === boardGame[4].cell && boardGame[4].cell === boardGame[8].cell && boardGame[4].cell) {
                this.result(cell);
            }
            else if (boardGame[2].cell === boardGame[4].cell && boardGame[4].cell === boardGame[6].cell && boardGame[4].cell) {
                this.result(cell);
            }
            else if (move === 8) {
                this.gameover();
            }
        }
    }

    result(cell) {
        var resultNameWinner = '';

        if (cell === iconX) {
            resultNameWinner = this.state.playerOne.name;
            this.setState((prevState) => ({
                playerOne: {
                    ...this.state.playerOne,
                    NumberOfWins: prevState.playerOne.NumberOfWins + 1
                }
            }));
            this.helper.ultimateWinner1 = this.helper.ultimateWinner1 + 1;
        }
        else {
            resultNameWinner = this.state.playerTwo.name;
            this.setState((prevState) => ({
                playerTwo: {
                    ...this.state.playerTwo,
                    NumberOfWins: prevState.playerTwo.NumberOfWins + 1
                }
            }));
            this.helper.ultimateWinner2 = this.helper.ultimateWinner2 + 1;
        }
        this.setState((prevState) => ({
            winnerStatus: true,
            winnerName: resultNameWinner,
            round: prevState.round + 1,
            modalWinner: !prevState.modalWinner,
        }));
        this.endGame();
    }

    newRound() {
        let boardGame = [{ cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }, { cell: '' }];
        this.setState({
            boardGame,
            move: 0,
            winnerStatus: false,
            losserStatus: false,
            activeUser: true
        });
    }

    gameover() {
        this.setState((prevState) => ({
            losserStatus: true,
            round: prevState.round + 1,
            modalGameover: !prevState.modalGameover,
        }));
        this.endGame();
    }

    endGame() {
        const { playerOne, playerTwo, round, numberRound } = this.state;

        if (round === Number(numberRound)) {
            var ultimateWin = '';
            if (this.helper.ultimateWinner1 > this.helper.ultimateWinner2) {
                ultimateWin = playerOne.name;
            }
            else if (this.helper.ultimateWinner2 > this.helper.ultimateWinner1) {
                ultimateWin = playerTwo.name;
            }
            else {
                ultimateWin = 'The result of your game is equal';
            }

            this.setState((prevState) => ({
                ultimateWinner: ultimateWin,
                started: false,
                endGame: true,
                modal: false,
                modalNotStarted: false,
                modalWinner: false,
                modalGameover: false,
                modalEndGame: !prevState.modalEndGame,
                round: this.state.numberRound,
                numberRound: 3
            }));
            this.helper.ultimateWinner1 = 0;
            this.helper.ultimateWinner2 = 0;
        }
    }

    componentDidMount(){
        document.title='Game X/O (Two Player)';
    }

    render() {
        const { boardGame, playerTwo, playerOne, round } = this.state;
        return (
            <React.Fragment>
                <ModalStart that={this} />
                <ModalNotStarted that={this} />
                <ModalWinner that={this} />
                <ModalGameover that={this} />
                <ModalEndGame that={this} />
                {/*  */}
                <main className='main'>
                    <Container >
                        <Row className='main__row'>
                        <Col md={3} className='main__right'>
                                <div className='main__score'>
                                    <div className='main__text-score'>
                                        <p>score</p>
                                    </div>
                                    <div className='main__player-score'>
                                        <div className='main__player'>
                                            <p className='main__player-p'>{playerOne.name}</p>
                                            <span className='main__player-span'>{playerOne.NumberOfWins}</span>
                                        </div>
                                        <div className='main__player'>
                                            <p className='main__player-p'>{playerTwo.name}</p>
                                            <span className='main__player-span'>{playerTwo.NumberOfWins}</span>
                                        </div>
                                    </div>
                                    <div className='main__round-game'>
                                        <div className='main__round'>
                                            <p>round</p>
                                            <span className='main__round-span'>{round}</span>
                                        </div>
                                    </div>
                                    <div className='main__btn-start'>
                                        <Button className='main--btn-start' color="success" onClick={this.toggle}>
                                            {this.state.txtButtonStart}
                                        </Button>
                                    </div>
                                </div>
                            </Col>
                            <Col md={9} className='main__left'>
                                <div className='main__board-game'>
                                    {
                                        boardGame.map((item, index) => {
                                            return (
                                                <React.Fragment key={index}>
                                                    <Br index={index} key={index} />
                                                    <div className='main__board-table' key={index + 2}>
                                                        <button className={'main--board-btn ' + item.cell} key={index + 1} onClick={(e) => this.handelChange(index, e)}>
                                                            <img className='main__board-img ' src={item.cell} alt={this.resultNameWinner} key={index} />
                                                        </button>
                                                    </div>
                                                </React.Fragment>
                                            )
                                        })
                                    }
                                </div>
                            </Col>
                            
                        </Row>
                    </Container>
                </main>
            </React.Fragment>
        )
    }
}