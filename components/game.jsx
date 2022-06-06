import React from "react";
import * as Minesweeper from "../minesweeper";
//Minesweeper.Board, Minesweeper.Tile
import Tile from "./tile";
import Board from "./board";

class Game extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            board: new Minesweeper.Board(12,10)
        };

        this.updateGame=this.updateGame.bind(this);
        this.restartGame=this.restartGame.bind(this);
    }

    updateGame(tile, flagging){
        flagging ? tile.toggleFlag() : tile.explore();
        this.setState({
            board: this.state.board
        });
    }

    restartGame(){
        this.setState({
            board: new Minesweeper.Board(12, 10)
        });
    }
  
    render(){

        let gameOver;
        const won = this.state.board.won();
        const lost = this.state.board.lost();
        
        if(won || lost){
            const msg = won ? "You won!!" : "You lose";
            gameOver = (
                <div className="game-over-panel">
                    <div className="game-over-modal">
                        {msg}
                        
                        <button onClick={this.restartGame}>Play Again?</button>
                    </div>
                </div>
            )
        }

        return(
            <div>
                <h1 className="title">Minesweeper</h1>
                <Board board={this.state.board} updateGame={this.updateGame} />
                {gameOver}
            </div>
        );
    }

}
export default Game;