import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Computer extends Component {
    render() {
        let { showDatCuoc } = this.props
        let keyframe = `@keyframes randomItem${Date.now()}{
            0%   {top: -30px;}
            25%  {top: 50px;}
            50% {top: -30px;}
            75%   {top: 50px;}
            100% {top: 0px;}
          }`

        return (
            <div className="text-center player">
                <style>
                    {keyframe}

                </style>

                <div className="theThink " style={{ position: 'relative' }}>
                    <img src={showDatCuoc.hinhAnh} alt="" className="w-75 mt-3 " style={{ position: 'absolute',left:'14%' ,animation: `randomItem${Date.now()} 0.5s ` }} />
                </div>
                <div className="speech-bubble "></div>
                <img src="./img/baogiaykeo/playerComputer.png" alt="" className='w-75' />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        showDatCuoc: state.GameReducer.computer
    }

}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Computer)
