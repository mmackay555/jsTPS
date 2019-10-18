class AndMask_Transaction extends jsTPS_Transaction{
    constructor(initNum, initIntNum, initMask){
        super();
        this.num = initNum;
        this.intNum = initIntNum;
        this.mask = initMask;
    }
    getNumber(){
        return this.num;
    }
    setNum(num){
        this.num = num;
    }
    setIntNum(intNum){
        this.intNum = intNum;
    }
    setMask(mask){
        this.mask = mask;
    }
    doTransaction(){
        this.num.andMask(this.mask);
    }
    undoTransaction(){
        this.num.setNum(this.intNum);
    }
    toString(){
        return "And Mask" + this.mask;
    }
}