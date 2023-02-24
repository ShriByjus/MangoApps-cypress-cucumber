Feature: Simple MangoAppTest

Feature Login into mangoApp & upload pdf file

        Background:
            Given A user login into MangoApp
        Scenario: Upload pdf file
             When A user enter the username "maassignment@yopmail.com"
             When A user enter the password "temp123"
             When A user clicks on Login button
             Then A user should able to login to home page
             When A user selects universal compose box
             When A user selects update option
             When A user selects group name
             When A user selects yourUpdate "myTest"
             When A user click on attach button
             When A user click on upload file button
             When A user click on file upload button
             When A user click on share button
             Then A user will able to see the uploaded pdf in the MangoApp Dasboard key "myTest"
             When A user will open and verify recent uploaded pdf file
             Then A user will able to see the correct uploaded pdf file using view option
             
    


    