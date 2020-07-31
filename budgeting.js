function calculateIncome(){
    var monthlyIncome = parseInt(document.budgeting.income.value);
        if (monthlyIncome > 0 && monthlyIncome <= 1000000) {
            var nec = monthlyIncome * .5;
            var want = monthlyIncome * .3;
            var saving = monthlyIncome * .2; 
            document.getElementById("necessities").value = nec;
            document.getElementById("wants").value = want;
            document.getElementById("savings").value = saving;
        } else if(monthlyIncome <= 0) { 
            alert("You can't create a budget with nothing.");
        } else if (monthlyIncome > 1000000) {
            alert("Congratulations, with that kind of Income get a financial advisor NOW!!");
        };
};

// Adds collapse to nav bar
$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
