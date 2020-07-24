var visible=false;
function ToggleNavItems(){
   visible = !visible;
    let navItems = document.querySelectorAll('nav > a');
    for(let i=0; i < navItems.length; i++){
        navItems[i].style.display = visible ? 'inherit' : 'none';
    }
}

