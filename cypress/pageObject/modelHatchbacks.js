class ModelHatchbacks {
    get resultOfHatchbacksModels() {
        return cy.get('dh-io-vmos[class]').shadow()
        .find("section")
        .find(".dh-io-vmos_dsRAb")
        .find('a[href^="https"]')
    }

    get hoverMenu() {
        return cy.get('dh-io-vmos[class]').shadow()
        .find("section")
        .find(".dh-io-vmos_2j9SM")
        .find('ul li')
    }
}

export default new ModelHatchbacks();