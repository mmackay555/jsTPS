class jsTPS_Controller{
    constructor(){
        this.registerEventHandler("jstps_submit", "click", this["processReadInput"]);
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
        if(value == "1"){
            let extraDiv = window.jstps.view.addTransaction();
            let testDiv = document.getElementById("jstps_test_input");
            testDiv.appendChild(extraDiv);
        }
    }
    processAddTransaction(){
        let num = window.num;
        let numAmountText = document.getElementById("jstps_extra_textbox");
        let numAmountTextVal = numAmountText.value;
        window.addtonum.setNumber(num);
        window.addtonum.setAmountToAdd(numAmountTextVal);
        let transaction = window.addtonum;
        window.jstps.addTransaction(transaction);
        let testDiv = document.getElementById("jstps_test_input");
        let extraInputDiv = document.getElementById("jstps_extra_input")
        testDiv.removeChild(extraInputDiv);
        let showcaseDiv = window.jstps.view.showUpdate();
        testDiv.appendChild(showcaseDiv);
    }
}