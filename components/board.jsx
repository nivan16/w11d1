import React from "react";
import * as Minesweeper from "../minesweeper";
import Tile from "./tile";

class Board extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="board">
                {this.props.board.grid.map( (r, i) => {
                    return(
                        <div key={i} >
                            {r.map((t, i2) => {
                                return (
                                    <Tile key={i2} tile={t} updateGame={this.props.updateGame} />
                                )
                            })}
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default Board;