import React, { Component } from 'react'
import { connect } from 'react-redux'

import { DAT_CUOC_GAME } from './Action/type.js'

export class Player extends Component {
     renderDatCuoc = item=>{
        return (
          <img src={item.hinhAnh} alt="" className="w-75 mt-3"/>
        )
    }
    render() {
        let { datCuoc, datCuocGame } = this.props
     
      

        return (
            <div className='player'>
                <div className="theThink">
                {this.renderDatCuoc(datCuoc)}
                </div>
                <div className="speech-bubble "></div>
                <img src="./img/baogiaykeo/player.png" alt="" className='w-75' />
                <div className="row">
                    <div className="col-4">
                        <button className="btnItem btn-secondary" onClick={() => {datCuocGame('bao') }}>
                            <img src="/img/baogiaykeo/bao.png" alt="" width={50} height={50} />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem btn-success" onClick={() => { datCuocGame('bua') }}>
                            <img src="/img/baogiaykeo/bua.png" alt="" width={50} height={50} />
                        </button>
                    </div>
                    <div className="col-4">
                        <button className="btnItem btn-info" onClick={() => { datCuocGame('keo') }}>
                            <img src="/img/baogiaykeo/keo.png" alt="" width={50} height={50} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        datCuoc: state.GameReducer.datCuoc
    }


}

const mapDispatchToProps = dispatch => {
    return {
        datCuocGame: (value) => {
            dispatch({
                type: DAT_CUOC_GAME,
                value
            })
        }
    }


}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
