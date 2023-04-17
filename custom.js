
/**
 * Form validation
 * 
 * var          - redeclare and redefine possible
 * let          - redeclare not possible 
 *                but redefine is possible 
 * const        - redeclare and 
 *                redefine is not possible
 * 
 * 
 * CSS Selectors:
 * - global             *
 * - tagname            div
 * - classname          .classname
 * - id                 #idname
 * - :pseudo_classes    *:hover, *:nth-child,       
 *                      *:focus, *:visited
 * - Attribute selector     [attribute*="value"]
 *                          [attribute^="value"]
 * 
 * - group selector         div, .classname, #id
 * 
 * 
 * 
 */
// let fname = document.querySelectorAll("input[name*='fname']");

// let fname = document.getElementById("fname");

//document.form_name.field_name;
let form = document.contact_form,
    fname = form.fname,
    email = form.email;

/**
 * - Empty check on submit
 * - value check on change of field data
 * 
 * .innerText = 
 * .innerHTML = 
 */

form.addEventListener("submit", function(e){
    if(fname.value.length == 0) {
        fname.nextElementSibling.innerText = "Fullname is empty!";
        e.preventDefault();
    } else {
        fname.nextElementSibling.innerText = "";
    }

    if(email.value.length == 0) {
        email.nextElementSibling.innerHTML = "<strong>Email is empty!</strong>";
        e.preventDefault();
    } else {
        email.nextElementSibling.innerHTML = "";
    }
});

email.addEventListener("keyup", function() {
    if(this.value.indexOf("@") == -1 ) {
        this.nextElementSibling.innerText = "One '@' symbol is required!";
    } else if(this.value.indexOf(".") == -1 ) {
        this.nextElementSibling.innerText = "One '.' symbol is required!";
    } else if(this.value.indexOf("@") != this.value.lastIndexOf("@") ) {
        this.nextElementSibling.innerText = "Two or more '@' symbol is not acceptable!";
    } else {
        this.nextElementSibling.innerText = "";
    }
});