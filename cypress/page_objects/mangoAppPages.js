class mangoAppPages {

    get enterUsername() {
        return cy.get("#user_id", { timeout: 20000 });
    }

    get enterPassword() {
        return cy.get("#password", { timeout: 20000 });
    }

    get enterSubmitButton() {
        return cy.get("button[type='submit']", { timeout: 20000 });
    }

    get selectPencilOption() {
        return cy.get("i[class='far fa-pen-to-square']", { timeout: 20000 });
    }

    get clickOnUpdateFeature() {
        return cy.get("a[class='waves-effect waves-light update_mssg_dialog']", { timeout: 20000 });
    }

    get selectGroupName() {
        return cy.get("#token-input-myTeams", { timeout: 30000 });
    }

    get updateInfo() {
        return cy.get("#team_update", { timeout: 20000 });
    }

    get selectAttachOption() {
        return cy.get("a[class='attachLinkonDialog']", { timeout: 20000 });
    }

    get uploadFile() {
        return cy.get('#fileupload', { timeout: 30000 });
    }

    get clickOnFileUploadButton() {
        return cy.get("#btn_file_upload", { timeout: 20000 });
    }

    get clickOnShareButton() {
        return cy.get('#ms-feed-btn', { timeout: 30000 });
    }

    get validateSuccessMessage() {
        return cy.get("#postSuccessMsg");
    }

    get verifyUploadedPdfFile() {
        return cy.get("div[class='ms-doc-actions madn-button']", { timeout: 30000 });
    }

    get viewUploadedPdfFile() {
        return cy.get("a[class='attachment_file view detailsMenu']", { timeout: 30000 });
    }

    get searchUploadedPDF() {
        return cy.get("#web-search-box", { timeout: 30000 });
    }

    get openUploadedPdfFile() {
        return cy.get("div[class='beta-search-list todo-feed-reader -bound']:nth-child(1)", { timeout: 30000 });
    }

    get verifyUploadedPdfFile() {
        return cy.get("div[class='ms-doc-actions madn-button']", { timeout: 30000 });
    }

    get viewUploadedPdfFile() {
        return cy.get("a[class='attachment_file view detailsMenu']", { timeout: 30000 });
    }


}
export default mangoAppPages
