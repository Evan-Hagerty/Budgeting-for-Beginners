console.log("hi");

function calculateIncome(){
    var monthlyIncome = parseInt(document.budgeting.income.value);
    var necessitiesVar = (monthlyIncome * .5);
    // var wants = (monthlyIncome * .3);
    // var savings = (monthlyIncome * .2); 
    return necessitiesVar
    document.budeting.necessities.value = necessitiesVar;
}
