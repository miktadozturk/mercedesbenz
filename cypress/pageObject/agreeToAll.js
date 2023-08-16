class AgreeToAll {
    agreeToAllCookies() {
        return cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]', {timeout: 10000}).shadow()
        .find("cmm-buttons-wrapper[class='hydrated']").should('be.visible')
        .find("[data-test='handle-accept-all-button']").should('be.visible').contains("Agree to all").click()
    }
}

export default new AgreeToAll();