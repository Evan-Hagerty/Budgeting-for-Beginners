console.log("hi");

function calculateIncome(){
    var monthlyIncome = parseInt(document.budgeting.income.value);
    var necessities = (monthlyIncome * .5);
    var wants = (monthlyIncome * .3);
    var savings = (monthlyIncome * .2); 
    document.getElementById(necessities).value = necessities;
}
