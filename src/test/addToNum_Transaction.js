class AddToNum_Transaction extends jsTPS_Transaction{
    constructor(){
        super();
        this.num = null;
        this.amt = 0;
    }
    setNumber(num){
        this.num = num;
    }
    setAmountToAdd(amt){
        this.amt = amt;
    }
    doTransaction(){
        let oldNum = num.getNum();
        let newNum = +oldNum + +this.amt;
        this.num.setNum(newNum);
    }
    undoTransaction(){
        let oldNum = num.getNum();
        let newNum = +oldNum - +this.amt;
        this.num.setNum(newNum);
    }
    toString(){
        return "Add " + this.amt;
    }
}