
import mangoAppPages from "../../page_objects/mangoAppPages";
let logInPageObjects = new mangoAppPages();
import 'cypress-file-upload';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user login into MangoApp',()=>{
    cy.visit("/")
});
When('A user enter the username {string}',(username)=>{
    logInPageObjects.enterUsername.type(username);
});
When('A user enter the password {string}', (password)=>{
    logInPageObjects.enterPassword.type(password)
})
When('A user clicks on Login button', ()=>{
    logInPageObjects.enterSubmitButton.click();
})
Then('A user should able to login to home page', ()=>{
    cy.url().should('include','user/home')
})
When('A user selects universal compose box', ()=>{
    logInPageObjects.selectPencilOption.click();
})
When('A user selects update option', ()=>{
    logInPageObjects.clickOnUpdateFeature.click();
})
When('A user selects group name', ()=>{
    cy.wait(3000);
    logInPageObjects.selectGroupName.click();
    cy.wait(3000);
    logInPageObjects.selectGroupName.type('{enter}');
})
When('A user selects yourUpdate {string}', (yourUpdate)=>{
    cy.wait(3000);
    logInPageObjects.updateInfo.type(yourUpdate);
})
When('A user click on attach button', ()=>{
    logInPageObjects.selectAttachOption.click();
})
When('A user click on upload file button', ()=>{
    const uploadPdfFile = 'sample.pdf';
    logInPageObjects.uploadFile.attachFile(uploadPdfFile);
})
When('A user click on file upload button', ()=>{
    logInPageObjects.clickOnFileUploadButton.click();
})
When('A user click on share button', ()=>{
    cy.wait(3000);
    logInPageObjects.clickOnShareButton.click();
})
Then('A user will able to see the uploaded pdf in the MangoApp Dasboard key {string}', (key)=>{
    cy.wait(2000);
    logInPageObjects.searchUploadedPDF.click({force: true});
    logInPageObjects.searchUploadedPDF.type(key);
    logInPageObjects.searchUploadedPDF.type('{enter}');
})
When('A user will open and verify recent uploaded pdf file', ()=>{
    cy.wait(3000);
    logInPageObjects.openUploadedPdfFile.click();
})
Then('A user will able to see the correct uploaded pdf file using view option', ()=>{
    cy.wait(3000);
    logInPageObjects.verifyUploadedPdfFile.click();
    logInPageObjects.viewUploadedPdfFile.click();
})
