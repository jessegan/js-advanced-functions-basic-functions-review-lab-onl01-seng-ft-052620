// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair = "*"){
    return function(attr = "special"){
        return `You are ${flair+attr+flair}!`
    }
}

let Calculator = {
    add: function(a,b){return a+b},
    subtract: function(a,b){return a-b},
    multiply: function(a,b){return a*b},
    divide: function(a,b){return a/b},
}

function actionApplyer(num,actions){
    return actions.reduce(function(res,action){
        return action(res)
    },num)
}


