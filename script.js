
// Get Values from DOM
const billInput = document.getElementById('billInput');
const tipPercent = document.querySelectorAll('.tipPercent');
const peopleCount = document.getElementById('peopleCount');
const totalAmt = document.querySelectorAll('.totalAmt');
const reset = document.querySelector('.reset');

let billVal = 0;
let personCount = 1;
let tipVal = 0.15;

// Validate Input bill
billInput.addEventListener('input', validateInput);

function validateInput() {
    if (billInput.value.includes(',')) {
        billInput.value.replace(',', '.')
    }
    billVal = parseFloat(billInput.value);
    console.log(billVal);
}


// Set Peoples Count
peopleCount.addEventListener('input', setpersonCount);

function setpersonCount() {
    personCount = parseFloat(peopleCount.value)
        if(personCount <= 0 ) {
            warn.innerHTML = 'Number of Peoples must be more than ZERO...!'
            setTimeout(function(){
                warn.innerHTML = ''
            },5000)
        }      
}


// Set Tip Percentage
tipPercent.forEach(tipPercent => {
    tipPercent.addEventListener('click', setTipVal)
});

function setTipVal(event){
    tipPercent.forEach(tipPercent => {
        tipPercent.classList.remove('active')
        if(event.target.innerHTML === tipPercent.innerHTML){
            tipPercent.classList.add('active');
            tipVal = parseFloat(tipPercent.innerHTML)/100
        }
    })
}


// Calculate Bill Spill
function generateBill() {
    if (personCount >= 1) {
        let tip = billVal * tipVal / personCount;
        let totalAmount = billVal * (tipVal + 1) / personCount;
        totalAmt[0].innerHTML = '₹' + tip.toFixed(2);
        totalAmt[1].innerHTML = '₹' + totalAmount.toFixed(2);
    }
}


// Reset Application
reset.addEventListener('click', handleReset);

function handleReset(){
    billInput.value = 0.0;
    validateInput()

    tipPercent[2].click();
    peopleCount.value = 1;
    setpersonCount()
    generateBill()
}

