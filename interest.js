function nisse(){
    let money = 25000
    for (let i = 0; i < 5; i++)
    money *= 1.05
    console.log(money)
}
nisse()

export {nisse};