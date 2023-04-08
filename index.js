const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// const totalBatteries = batteryBatches.reduce(batteryCounter, 0)

// function batteryCounter(total, num){
//     console.log(total, num)
//     return total + num;
// }

// const totalBatteries = batteryBatches.reduce(function(total, currentBatteryNum){
//     return total + currentBatteryNum
// })

const totalBatteries = batteryBatches.reduce((total, currentBatteryNum) =>  total + currentBatteryNum)