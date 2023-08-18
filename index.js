"use strict";

const form_h2 = document.querySelectorAll(".form_h2");

const formContainer = document.querySelectorAll(".form_container");

const containerInput = document.querySelectorAll(".container_input");

const containerIcon = document.querySelectorAll(".container_icon");


containerInput[0].addEventListener("focusin",()=> {
    form_h2[0].classList.add("form_h2-focus");
    formContainer[0].classList.add("form_container-focus");
    containerIcon[0].classList.add("container_icon-focus")
});

containerInput[0].addEventListener("focusout",()=> {
    form_h2[0].classList.remove("form_h2-focus");
    formContainer[0].classList.remove("form_container-focus");
    containerIcon[0].classList.remove("container_icon-focus")
});

containerInput[1].addEventListener("focusin",()=> {
    form_h2[1].classList.add("form_h2-focus");
    formContainer[1].classList.add("form_container-focus");
    containerIcon[1].classList.add("container_icon-focus")
});

containerInput[1].addEventListener("focusout",()=> {
    form_h2[1].classList.remove("form_h2-focus");
    formContainer[1].classList.remove("form_container-focus");
    containerIcon[1].classList.remove("container_icon-focus")
});