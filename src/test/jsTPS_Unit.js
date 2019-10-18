class jsTPS_Unit{
    constructor(){
        this.parentDiv = null;
    }
    setParentDiv(parentDiv){
        this.parentDiv = parentDiv;
    }
    testAdd(){
        let jsTPSTest = new jsTPS();
        let num = new Num();
        let testAndMaskDiv = document.createElement("p");
        testAndMaskDiv.innerHTML = "Add Transaction Tests:\n"
        this.parentDiv.appendChild(testAndMaskDiv);
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: False";
            this.parentDiv.appendChild(div);
        }
        let test = new AddToNum_Transaction(num, 5);
        jsTPSTest.addTransaction(test);
        num.setNum(test.getNumber().getNum());
        if(num.getNum() == 5){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        test = (new AddToNum_Transaction(num, 10));
        jsTPSTest.addTransaction(test);
        num.setNum(test.getNumber().getNum());
        if(num.getNum() == 15){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        test = (new AddToNum_Transaction(num, 20));
        jsTPSTest.addTransaction(test);
        num.setNum(test.getNumber().getNum());
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
    }
    testAndMask(){
        let jsTPSTest = new jsTPS();
        let num = new Num();
        let testAndMaskDiv = document.createElement("p");
        testAndMaskDiv.innerHTML = "And Mask Tests\n:"
        this.parentDiv.appendChild(testAndMaskDiv);
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: False";
            this.parentDiv.appendChild(div);
        }
        let test = (new AddToNum_Transaction(num, 12));
        jsTPSTest.addTransaction(test);
        num.setNum(test.getNumber().getNum());
        test = (new AndMask_Transaction(num, num.getNum(), 4));
        jsTPSTest.addTransaction(test);
        num.setNum(test.getNumber().getNum());
        if(num.getNum() == 4){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        if(num.getNum() == 12){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
    }
    testUndo(){
        let jsTPSTest = new jsTPS();
        let num = new Num();
        let testAndMaskDiv = document.createElement("p");
        testAndMaskDiv.innerHTML = "Undo Tests:\n"
        this.parentDiv.appendChild(testAndMaskDiv);
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: False";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        let test = (new AddToNum_Transaction(num, 5));
        jsTPSTest.addTransaction(test);
        num.setNum(test.getNumber().getNum());
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 10));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 20));
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if((jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: true";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 15){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if((jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: true";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 5){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        if(!(jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: False";
            this.parentDiv.appendChild(div);
        }
        if((jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: true";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        if(!(jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: False";
            this.parentDiv.appendChild(div);
        }
        if((jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: true";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
    }
    testRedo(){
        let jsTPSTest = new jsTPS();
        let num = new Num();
        let testAndMaskDiv = document.createElement("p");
        testAndMaskDiv.innerHTML = "Redo Tests:\n"
        this.parentDiv.appendChild(testAndMaskDiv);
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: False";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 5));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 10));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 20));
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        jsTPSTest.doTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if((jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 15){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 1){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 2){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.undoTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        jsTPSTest.doTransaction();
        if((jsTPSTest.hasTransactionToUndo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Undo: True";
            this.parentDiv.appendChild(div);
        }
        if(!(jsTPSTest.hasTransactionToRedo())){
            let div = document.createElement("p");
            div.innerHTML = "Has Transaction to Redo: False";
            this.parentDiv.appendChild(div);
        }
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
    }
    testClear(){
        let jsTPSTest = new jsTPS();
        let num = new Num();
        let testAndMaskDiv = document.createElement("p");
        testAndMaskDiv.innerHTML = "Clear Tests:\n"
        this.parentDiv.appendChild(testAndMaskDiv);
        if(num.getNum() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "Inital Number Test: False";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 5));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 10));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 20));
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.clearAllTransactions();
        if(num.getNum() == 35){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 5));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 10));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 20));
        if(num.getNum() == 70){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.clearAllTransactions();
        if(num.getNum() == 70){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 5));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 10));
        jsTPSTest.addTransaction(new AddToNum_Transaction(num, 20));
        if(num.getNum() == 105){
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: True";
            this.parentDiv.appendChild(div);
        }
        else{
            let div = document.createElement("p");
            div.innerHTML = "New Number Test: False";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "jsTPSTest Size Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getRedoSize() == 0){
            let div = document.createElement("p");
            div.innerHTML = "Num of Redos Test: True";
            this.parentDiv.appendChild(div);
        }
        if(jsTPSTest.getUndoSize() == 3){
            let div = document.createElement("p");
            div.innerHTML = "Num of Undos Test: True";
            this.parentDiv.appendChild(div);
        }
    }
}