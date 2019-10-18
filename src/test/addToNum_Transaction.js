class AddToNum_Transaction{
    constructor(initNum, initAmt){
        this.num = initNum;
        this.amt = initAmt;
    }
    getNumber(){
        return this.num
    }
    getAmt(){
        return this.amt
    }
    setNumber(num){
        this.num = num;
    }
    setAmountToAdd(amt){
        this.amt = amt;
    }
    doTransaction(){
        let oldNum = this.num.getNum();
        let newNum = +oldNum + +this.amt;
        this.num.setNum(newNum);
    }
    undoTransaction(){
        let oldNum = this.num.getNum();
        let newNum = +oldNum - +this.amt;
        this.num.setNum(newNum);
    }
    toString(){
        return "Add " + this.amt;
    }
}