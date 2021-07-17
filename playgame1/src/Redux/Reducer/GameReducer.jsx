
import { DAT_CUOC_GAME, END_GAME, RANDOM_GAME } from '../Action/type.js'
const stateBuaGiayKeo = {
    datCuoc: { ma: 'keo', hinhAnh: "./img/baogiaykeo/keo.png" },



    ketQua: "",
    soBanThang: 0,
    tongSoBan: 0,
    computer: {
        ma: 'bua', hinhAnh: "./img/baogiaykeo/bua.png"
    }
}
const GameReducer = (state = stateBuaGiayKeo, action) => {
    switch (action.type) {
        case DAT_CUOC_GAME:
            state.datCuoc = { ma: action.value, hinhAnh: `./img/baogiaykeo/${action.value}.png` }
            return { ...state }
        case RANDOM_GAME:

            const datCuocComputer = showComputerDatcuoc()
            state.computer = { ma: datCuocComputer, hinhAnh: `./img/baogiaykeo/${datCuocComputer}.png` }
            return { ...state }
        case END_GAME:
            state.tongSoBan++

            const ma = state.datCuoc.ma;
            const computer = state.computer.ma
            if (
                ma == 'keo' && computer == 'bao' ||
                ma == 'bao' && computer == 'bua' ||
                ma == 'bua' && computer == 'keo'
            ) {

                state.soBanThang++
                state.ketQua = "You Win !!! "
            } else if (computer != ma) {
                state.ketQua = "Bạn Thua !!! "
            } else {
                state.ketQua = "Hoà rồi ! chơi lại nào "
            }

            return { ...state }
        default: return { ...state }
    }


}
const showComputerDatcuoc = () => {
    const arrDatCuoc = [
        'bao', 'bua', 'keo'
    ];

    const datCuocComputer = arrDatCuoc[Math.floor(Math.random() * 3)]
    return datCuocComputer
}
export default GameReducer