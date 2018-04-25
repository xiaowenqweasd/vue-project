export default {
    state: {
        show: false,
        resultValue: "",
        userInfoOther: {
            title: "隔壁",
            list: [
                {
                    text: "上次水表",
                    name: "prevWater"
                },
                {
                    text: "本次水表",
                    name: "nowWater"
                },
                {
                    text: "水费单价",
                    name: "perWater"
                }
            ]
        },
        userInfoMy: {
            title: "本人",
            list: [
                {
                    text: "上次电表",
                    name: "myPrevElec"
                },
                {
                    text: "本次电表",
                    name: "myNowElec"
                },
                {
                    text: "电费单价",
                    name: "perElec"
                }
            ]
        },
        others: {
            title: "其他",
            list: [
                {
                    text: "走廊电费-水物业差额",
                    name: "其他",
                    value: "2.5",
                }
            ]
        }
    },
    mutations: {
        calcValueMy(state, payload){
            state.resultValue = payload;
            state.show = true;
        }
    },
    actions: {
        calcValueMy({commit, state}, payload){
           let result = payload.otherInfo - payload.myInfo - state.others.list[0].value;
            commit('calcValueMy', result)
        },
    }
}
