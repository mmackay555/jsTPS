class jsTPS_Controller{
    constructor(){
        this.registerEventHandler("jstps_submit", "click", this["processReadInput"]);
        this.registerEventHandler("jstps_assert_button", "click", this["processAssert"]);

    }
    registerEventHandler(id, eventName, callback){
        // GET THE CONTROL IN THE GUI WITH THE CORRESPONDING id
        let control = document.getElementById(id);

        // AND SETUP THE CALLBACK FOR THE SPECIFIED EVENT TYPE
        control.addEventListener(eventName, callback);
    }
    processReadInput(){
        let inputTextField = document.getElementById("jstps_textbox");
        let value = inputTextField.value;
        let testDiv = document.getElementById("jstps_test_input");
        let showcaseDiv = document.getElementById("jstps_updated_info");
        if(value == "1"){
            testDiv.removeChild(showcaseDiv);
            let extraDiv = window.jstps.view.addTransaction();
            testDiv.appendChild(extraDiv);
        }
        else if(value == "2"){
            testDiv.removeChild(showcaseDiv);
            if(window.jstps.getSize() == 0){
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
            else{
                window.jstps.undoTransaction();
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
        }
        else if(value == "3"){
            testDiv.removeChild(showcaseDiv);
            if(window.jstps.getSize() == 0){
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
            else{
                window.jstps.doTransaction();
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
        }
        else if(value == "4"){
            testDiv.removeChild(showcaseDiv);
            if(window.jstps.getSize() == 0){
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
            else{
                window.jstps.clearAllTransactions();
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
        }
        else if(value == "5"){
            testDiv.removeChild(showcaseDiv);
            if(window.jstps.getSize() == 0){
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
            else{
                window.jstps.clearAllTransactions();
                window.num.setNum(0);
                showcaseDiv = window.jstps.view.showUpdate();
                testDiv.appendChild(showcaseDiv);
            }
        }
    }
    processAddTransaction(){
        let num = window.num;
        let jsTPSTest = window.jstps
        let numAmountText = document.getElementById("jstps_extra_textbox");
        let numAmountTextVal = numAmountText.value;
        let addToNum = new AddToNum_Transaction(num, numAmountTextVal);
        let transaction = addToNum;
        jsTPSTest.addTransaction(transaction);
        let testDiv = document.getElementById("jstps_test_input");
        let extraInputDiv = document.getElementById("jstps_extra_input")
        testDiv.removeChild(extraInputDiv);
        let showcaseDiv = window.jstps.view.showUpdate();
        testDiv.appendChild(showcaseDiv);
    }
    processAssert(){
        let buttonDiv = document.getElementById("jstps_assert");
        window.jstps.unit.setParentDiv(buttonDiv);
        window.jstps.unit.testAdd();
        window.jstps.unit.testAndMask();
        window.jstps.unit.testUndo();
        window.jstps.unit.testRedo();
        window.jstps.unit.testClear();
    }
}