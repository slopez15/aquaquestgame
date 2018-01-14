//libs
//import * as $ from 'jquery';


//events
window.onload = function () {
    document.getElementById("addIncrement").onload = function (evt) {
        addIncrement();
    }
}
window.onload = function () {
    document.getElementById("progress").onclick = function (evt) {
        hello();
    }
}


//functions to be called




function hello () {
	prompt("how you doing");
}

function addIncrement () {
	var printThis = "hellooooo";
	var messageDialog = new Windows.UI.Popups.MessageDialog(printThis, "Alert");
	messageDialog.showAsync();
}
