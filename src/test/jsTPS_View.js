class jsTPS_View{
    constructor(){

    }
    addTransaction(){
        let extraInputDiv = document.createElement("div");
        extraInputDiv.setAttribute("id", "jstps_extra_input");
        let paragraphDiv = document.createElement("p");
        paragraphDiv.innerHTML = "Enter an amount to add: ";
        let extraTextboxDiv = document.createElement("input");
        extraTextboxDiv.setAttribute("id", "jstps_extra_textbox");
        let extraSubmitDiv = document.createElement("button");
        extraSubmitDiv.setAttribute("id", "jstps_extra_submit");
        this.setupCallback(extraSubmitDiv, "onclick", "window.jstps.controller.processAddTransaction", []);
        extraInputDiv.appendChild(paragraphDiv);
        extraInputDiv.appendChild(extraTextboxDiv);
        extraInputDiv.appendChild(extraSubmitDiv);
        return extraInputDiv;
    }
    showUpdate(){
        let updateDiv = document.createElement("div");
        updateDiv.setAttribute("id", "jstps_updated_info");
        let jsTPSDiv = document.createElement("p");
        jsTPSDiv.innerHTML = "The current jsTPS is: ";
        let jsTPSDivVal = document.createElement("p");
        jsTPSDivVal.setAttribute("id", "jstps_div_val");
        jsTPSDivVal.innerHTML = window.jstps.toString();
        let numDiv = document.createElement("p");
        numDiv.innerHTML = "The current number is: ";
        let numDivVal = document.createElement("p");
        numDivVal.innerHTML = window.num.toString();
        updateDiv.appendChild(jsTPSDiv);
        updateDiv.appendChild(jsTPSDivVal);
        updateDiv.appendChild(numDiv);
        updateDiv.appendChild(numDivVal);
        return updateDiv;

    }
    setupCallback(element, elementCallbackName, callbackFunctionName, args) {
        let functionCallText = callbackFunctionName + "(";
        for (let i = 0; i < args.length; i++) {
            functionCallText += "'" + args[i] + "'";
            if (i < (args.length - 1)) {
                functionCallText += ", ";
            }
        }
        functionCallText += ")";
        element.setAttribute(elementCallbackName, functionCallText);
        return functionCallText;
    }
}