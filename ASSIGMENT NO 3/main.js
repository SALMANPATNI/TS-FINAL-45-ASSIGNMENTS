"use strict";
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.//
let personName = "SALMAN PATNI";
//tolower case //
console.log(personName.toLowerCase());
//toupper case//
console.log(personName.toUpperCase());
//to title case//
let firstletter = personName.charAt(0).toUpperCase();
let resttletter = personName.slice(1).toLowerCase();
let titlecase = firstletter + resttletter;
console.log(titlecase);
