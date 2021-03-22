const nume = document.getElementById('name');
const email = document.getElementById('email');
const text = document.getElementById('msg');
const sub = document.querySelector('.submit');
class UI {
    constructor() {
        this.AllElementsAreValid = true;
        this.submitNumbers = 0;
    }

    showError(elem) {		
		elem.classList.add('error');
    }

	showSuccess(elem) {
		elem.classList.remove('error');
		elem.classList.add('success');
	}
}

sub.addEventListener('click', insertInputs);

function insertInputs() {
    let ui = new UI();
    if ( nume.value.length < 5){
        ui.showError(nume);
    } else 
        ui.showSuccess(nume);

    if (email.value.length < 6){
        ui.showError(email);
    } else  ui.showSuccess(email);

    if (text.value.length < 15) {
        ui.showError(text);
    } else ui.showSuccess(text);
}
