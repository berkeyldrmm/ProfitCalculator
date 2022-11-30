class MaxProfitCalculator{
    constructor(waitUntilIncrease,waitUntilDecrease,profitLoss,amount,dataset){
        this.waitUntilIncrease=waitUntilIncrease;
        this.waitUntilDecrease=waitUntilDecrease;
        this.profitLoss=profitLoss;
        this.amount=amount;
        this.dataset=dataset;
    }
    calculate(){
        for(var i=0;i<this.dataset.length;i++){
            if(i!==this.dataset.length-1&&this.waitUntilIncrease&&this.dataset[i]<this.dataset[i+1]){
                this.buy(i);
                this.waitUntilIncrease=false;
                this.waitUntilDecrease=true;
            }
            if(i!==this.dataset.length-1&&this.waitUntilDecrease&&this.dataset[i]>this.dataset[i+1]){
                this.sell(i);
                this.waitUntilIncrease=true;
                this.waitUntilDecrease=false;
            }
            if(i==this.dataset.length-1&&this.waitUntilDecrease){
                this.sell(i);
            }
        }
        return this.profitLoss;
    }
    buy(a){
        if(this.profitLoss>0){
            this.amount=this.profitLoss/this.dataset[a];
        }
        else{
            this.amount=1;
        }
        this.profitLoss-=this.dataset[a]*this.amount;
        console.log("buy calisti."+a+" "+this.profitLoss);
    }
    sell(b){
    this.profitLoss+=this.dataset[b]*this.amount;
    this.amount=0;
    console.log("sell calisti."+b+" "+this.profitLoss);
    }
}

var example=new MaxProfitCalculator(true,false,0,0,[100,50,60,80,30,80,150,130,110,80,120,170,200,180,120,160,180])

//Maximum kazanç
console.log(example.calculate());
