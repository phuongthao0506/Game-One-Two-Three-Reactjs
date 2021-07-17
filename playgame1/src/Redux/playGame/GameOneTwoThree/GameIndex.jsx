import React, { Component } from 'react'
import { connect } from 'react-redux'
import './PlayGame.css'
import Player from './Player'
 import ThongTinTroChoi from './infoGame'
 import Computer from './Computer'
 import {END_GAME, RANDOM_GAME} from './Action/type.js'

 class BTGameBuaGiayKeo extends Component {
    render() {
        let {playGame}=this.props
        return (
            <div className="gameKeoBuaBao text-center ">
                <h1 className="text-white m-5">
                      GAME BÚA GIẤY KÉO !
                </h1>
                
                <div className="row  m-5">
                    <div className="col-3">
                        <Player/>
                    </div>
                    <div className="col-6">
                       <ThongTinTroChoi/>
                       <button className="btn btn-danger" onClick={()=>{playGame()}}>PLAY GAME</button>
                    </div>
                    <div className="col-3">
                    <Computer/>
                    </div>

                </div>
                
            </div>
        )
    }
}



const mapDispatchToProps = dispatch =>{
    return {
        playGame : ()=>{
            let count = 10 
            // hàm lặp đi lặp lại 
            let random = setInterval(()=>{
                dispatch({
                    type : RANDOM_GAME
                })
                count ++ ;
                if(count>25){
                    // dừng lại việc lặp 
                    clearInterval(random)
                    dispatch({
                        type : END_GAME
                    })
                    
                }
            },100)
            
        }
        
    }
    
}

export default connect(null, mapDispatchToProps)(BTGameBuaGiayKeo)
