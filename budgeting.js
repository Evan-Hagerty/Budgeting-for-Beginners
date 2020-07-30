function calculateIncome(){
    var monthlyIncome = parseInt(document.budgeting.income.value);
        if (monthlyIncome >= 0) {
            var nec = monthlyIncome * .5;
            var want = monthlyIncome * .3;
            var saving = monthlyIncome * .2; 
            document.getElementById("necessities").value = nec;
            document.getElementById("wants").value = want;
            document.getElementById("savings").value = saving;
        }
}
