var dataset=[100,50,60,80,30,80,150,130,110,80,120,170,200,180]

var waitUntilIncrease=true;
var waitUntilDecrease=false;
var profitLossState=0;
var amount=0;

var buy= (a) => {
    if(profitLossState>0){
        amount=profitLossState/dataset[a];
    }
    else{
        amount=1;
    }
    profitLossState-=dataset[a]*amount;
    console.log("buy calisti."+a+" "+profitLossState);
}

var sell=(b) => {
    profitLossState+=dataset[b]*amount;
    amount=0;
    console.log("sell calisti."+b+" "+profitLossState);
}

for(i=0;i<dataset.length;i++){
    if(i!==dataset.length-1&&waitUntilIncrease&&dataset[i]<dataset[i+1]){
        buy(i);
        waitUntilIncrease=false;
        waitUntilDecrease=true;
    }
    if(i!==dataset.length-1&&waitUntilDecrease&&dataset[i]>dataset[i+1]){
        sell(i);
        waitUntilIncrease=true;
        waitUntilDecrease=false;
    }
    if(i==dataset.length-1&&waitUntilDecrease){
        sell(i);
    }
}

console.log(profitLossState);