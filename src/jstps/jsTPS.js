class jsTPS{
    constructor()
    {
        this.transactions = [];
        this.mostRecentTransaction = -1;
        this.performingDo = false;
        this.performingUndo = false;
    }
    isPerformingDo(){
        return this.performingDo;
    }
    isPerformingUndo(){
        return this.performingUndo;
    }
    addTransaction(transaction){
        if(this.mostRecentTransaction < 0 || 
            this.mostRecentTransaction < (this.transactions.length-1))
        {
            let i;
            for(i = (this.transactions.length-1); i > this.mostRecentTransaction; i--){
                this.transactions.splice(i, 1);
            }
        }
        this.transactions.push(transaction);
        this.doTransaction();
    }
    hasTransactionToRedo(){
        return (this.mostRecentTransaction < (this.transactions.length - 1));
    }
    hasTransactionToUndo(){
        return (this.mostRecentTransaction >= 0);
    }
    doTransaction(){
        if(this.hasTransactionToRedo()){
            this.performingDo = true;
            let transaction = this.transactions[(this.mostRecentTransaction+1)];
            transaction.doTransaction();
            this.mostRecentTransaction++;
            this.performingDo = false;
        }
    }
    peekUndo(){
        if(this.hasTransactionToUndo()){
            return this.transactions[this.mostRecentTransaction];
        }
        else{
            return null;
        }
    }
    peekDo(){
        if(this.hasTransactionToRedo()){
            return this.transactions[(this.mostRecentTransaction+1)];
        }
        else{
            return null;
        }
    }
    undoTransaction(){
        if(this.hasTransactionToUndo()){
            this.performingUndo = false;
            let transaction = this.transactions[this.mostRecentTransaction];
            transaction.undoTransaction();
            this.mostRecentTransaction--;
            this.performingUndo = false;
        }
    }
    clearAllTransactions(){
        this.transactions.splice(0, this.transactions.length);
        this.mostRecentTransaction = -1;
    }
    getSize(){
        return this.transactions.length;
    }
    getRedoSize(){
        return (this.getSize() - this.mostRecentTransaction - 1);
    }
    getUndoSize(){
        return (this.mostRecentTransaction + 1);
    }
    
}