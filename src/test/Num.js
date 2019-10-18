class Num{
    constructor(){
        this.num = 0;
    }
    setNum(number){
        this.num = number;
    }
    getNum(){
        return this.num;
    }
    andMask(mask){
        this.num = (this.num & mask);
    }
    orMask(mask){
        this.num = (this.num | mask);
    }
    toString(){
        return this.num + " ";
    }
}