class HomePage {
    navigate() {
        cy.visit('/')
    }

    get getModels() {
        return cy.get("div > dh-io-vmos").shadow()
        .find("section")
        .find("button.dh-io-vmos_1DO_4")
    }

    get modelsLenght() {
        return cy.get('.dh-io-vmos_1DO_4')
    }
}

export default new HomePage();