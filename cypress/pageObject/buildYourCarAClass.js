class BuildYourCarAClass {
    get filterFuelType() {
        return cy.get('owcc-car-configurator[class]').shadow()
        .find("cc-motorization-filters-form").should('be.visible')
        .find('.cc-motorization-filters-form__primary').should('be.visible')
        .find('[data-primary-filter-id="technicalInformation.engine.fuelType"]').should('be.visible')
        .find('.cc-motorization-filters-primary-filters--multi-select.wb-multi-select.hydrated').should('be.visible').contains('Fuel type').click({force:true})

    }

    get selectTypeDiesel() {
        return cy.get('ccwb-checkbox').shadow()
        .find('input[type="checkbox"]').eq(0).click({force:true})
    }

    get dieselAClassCarPrices() {
        return cy.get('.cc-motorization-header__price.cc-text.ng-star-inserted.wb-text.hydrated')
    }
}

export default new BuildYourCarAClass();