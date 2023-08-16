import homePage from "../../pageObject/homepage"
import modelHatchbacks from "../../pageObject/modelHatchbacks";
import buildYourCarAClass from "../../pageObject/buildYourCarAClass";

const carClass = require('../../fixtures/carClass.json')
const models = require('../../fixtures/models.json') 

describe('Build your Car - Model A-Class Hatchbacks, Fuel Type Diesel', () => {   
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
        homePage.navigate()
        cy.agreeAllCookies()
    });
    
    it('Navigate to market, then Select A Class Hatchbacks models and filter fuel type Diesel', () => {
        //-- Selected models and validate length --
        homePage.getModels.each(($el, index) => {
            // -- Logged all Mercedes models --
            cy.logResults(index, $el.text()) 
            // -- Clicked when contains "Hatchbacks" --           
            if ($el.text().includes(models.hatchbacks)) {
                cy.wrap($el).should('be.visible').click()
            }
        })

        //-- Selected Build your car for A Class Hatchbacks and click --
        modelHatchbacks.resultOfHatchbacksModels.each(($el) => {
            //-- Mouseover just for A-Class from the models --
            if ($el.text().includes(carClass.aClass)) {
                cy.wrap($el).should('be.visible')
                .trigger('mouseover')
                //-- Click if the Build your car option is displayed --
                modelHatchbacks.hoverMenu.each(($ele) => {
                    if ($ele.text().includes("Build your car")) {
                        cy.wrap($ele).contains('a').should('be.visible')
                        .invoke('removeAttr', 'target').click()                         
                    }       
                })
            }
        })

        //-- Filter Diesel --
        cy.filterFuelTypeSelectDiesel()

        //-- Take a screenshots of results --
        cy.screenshot('Prices Of Filtered Diesel Vehicles')
        
        //-- Get Price to text file --
        const results = [];
        buildYourCarAClass.dieselAClassCarPrices.each(($el, index) => {
            //-- Logged all diesel prices --
            cy.logResults(index, $el.text()) 
            results.push($el.text())
        }).then(() => {
            //-- Create results.txt file and get the results --
            cy.writeFile('results.txt', results);
        });
    });
});
