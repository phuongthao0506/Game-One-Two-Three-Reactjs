import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ThongTinTroChoi extends Component {
    render() {
        let {tongSoBan,soBanThang,ketQua}=this.props
        return (
            <div>
                <div className="display-4 text-danger"><span>{ketQua}</span></div>
                <div className="display-4 text-warning"> Số Bàn Thắng: <span> {soBanThang}</span> </div>
                <div className="display-4 text-primary"> Tổng số bàn chơi   <span> {tongSoBan}</span></div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soBanThang:state.GameReducer.soBanThang,
        tongSoBan:state.GameReducer.tongSoBan,
        ketQua:state.GameReducer.ketQua
    }
    
}


export default connect(mapStateToProps)(ThongTinTroChoi)
