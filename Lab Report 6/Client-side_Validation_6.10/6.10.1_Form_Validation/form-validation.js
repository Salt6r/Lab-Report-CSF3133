function validateForm(){
    let fname = document.forms["myForm"]["fname"].value;
    if(fname === ""){
        alert("Name must be filled out");
        return false;
    }
}