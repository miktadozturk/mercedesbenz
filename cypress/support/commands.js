// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import agreeToAll from "../pageObject/agreeToAll"
import buildYourCarAClass from "../pageObject/buildYourCarAClass"

// -- This is for Cookies Agree to All --  
Cypress.Commands.add('agreeAllCookies', () => {
    //Traverse into the shadow DOM of an element
    agreeToAll.agreeToAllCookies()
})

Cypress.Commands.add("logResults", (index, text) => { 
    cy.log(`Result ${index}: ${text}`) 
})

Cypress.Commands.add('filterFuelTypeSelectDiesel', () => {
    buildYourCarAClass.filterFuelType
    .then(() => {
        buildYourCarAClass.selectTypeDiesel
        buildYourCarAClass.filterFuelType
    })
})