import React from "react";
import * as Minesweeper from "../minesweeper";
// constructor(board, pos) {
//     this.board = board;
//     this.pos = pos;
//     this.bombed = false;
//     this.explored = false;
//     this.flagged = false;
// }
class Tile extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.stopPropagation();
        let t = this.props.tile;

        if(t.explored){
            return;
        }
        this.props.updateGame(t, e.altKey);
        
    }

    render(){
        // 💣💣💣💣
        // 🚩🚩🚩🚩
        let graphic = " ";
        let classType = "";
        if (!this.props.tile.explored) {
            if (this.props.tile.flagged) {
                graphic = "🚩";
                classType = "flagged";
            }
        }
        else { // explored
            if(this.props.tile.bombed){
                graphic = "💣";
                classType = "bombed";
            }
            else {
                const bombs = this.props.tile.adjacentBombCount();
                if (bombs) {
                    graphic = bombs.toString();//
                }
                classType = "revealed";
            }
        }

        return(
            <div className={`tile ${classType}`} onClick={this.handleClick} >
                {
                    graphic
                }
            </div>
        )
    }
}
export default Tile;