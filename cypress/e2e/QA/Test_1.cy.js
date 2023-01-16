describe("Smoke MCM", () => {

        beforeEach( () => {
                const linkForVisit = "https://autotest.pharmahrm.com/";
    
                cy.visit(linkForVisit);
        
                cy.viewport(1920, 1080);

                const userName = 'Administrator';
                const password = 'Hevsys%22';
        
                cy.get('#username').type(userName);
                cy.get('#password').type(password);
                cy.get('.btn').click();
                cy.get('.team_soft_mcm')
                .should('be.visible')
                .click();

        })


        it("Visible diagram 'Total customers in the database CRM'", () => {

                cy.get(".highchart.col-xs-7", {timeout:5000}).should("be.visible");
        })


        it("Visible diagram 'Types of distributions'", () => {

                cy.get(".highchart.col-xs-5").should("be.visible");
        })


        it("Visible diagram 'Target audiences'", () => {

                cy.get(".highchart.height").should("be.visible");
        })


        it("Create Sms content", () => {

                cy.contains("Content")
                .should('be.visible')
                .click();
    
                cy.get('.btn-add')
                .should('be.visible')
                .click();
    
                cy.get('.btn-sms')
                .should('be.visible')
                .click();
    
                cy.get('#sms-name')
                .should('be.visible')
                .type('AutoTestSms_vl');   
            
                cy.get(`#editor-sms-1_ifr`)
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)
                .clear()
                .type('Hello, %FIRSTNAME%  %LASTNAME%, this is AutoTestSms');
                
                cy.get('#edit-sms > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    })
    
        it("Create Viber content", () => {

                cy.contains("Content")
                .should('be.visible')
                .click();

                cy.get('.btn-add')
                .should('be.visible')
                .click();
    
                cy.get('.btn-viber')
                .should('be.visible')
                .click();
    
                 cy.get('#edit-viber > .modal-dialog > .modal-content > .modal-body> .form-group > #viber-name')
                .should('be.visible')
                .type('AutoTestViber_vl');
    
                cy.get(`#editor-viber-1_ifr`)
                .its('0.contentDocument.body')
                .should('be.visible')
                .then(cy.wrap)
                .clear()
                .type('Hello, %FIRSTNAME% %LASTNAME%, this is AutoTestViber');
    
                cy.get('#edit-viber > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
})

       it("Create Target Audience", () => {

                cy.contains("Target Audience")
                .should('be.visible')
                .click();

                cy.get('.btn-add')
                .should('be.visible')
                .click();

                cy.get('#name')
                .should('be.visible')
                .type('TAforAutoTest_vl');

                cy.contains("Add filter")
                .should('be.visible')
                .click();

                cy.contains(" Contacttype ")
                .should('be.visible')
                .click();

                cy.get('.select2-selection__rendered').click().wait(500);

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains('test_for_mcm')
                .should('have.text', 'test_for_mcm')
                .click();

                cy.get('.btn.btn-primary.ng-binding')
                .should('be.visible')
                .click();

        })

        it("Create Distribution SMS", () => {

                cy.contains("Distribution")
                .should('be.visible')
                .click();  
                
                cy.get('.btn-add')
                .should('be.visible')
                .click();

                cy.get('.btn-sms')
                .should('be.visible')
                .click();

                cy.get('#distribution_name')
                .should('be.visible')
                .type('AutoTestSms_vl');
                
      
                cy.get('[ng-model ="ctrl.distribution.sendNow"]').check()
                .should('be.checked')
                cy.wait(500);


                let test = `#edit-target-form > [ng-class="{'has-error': ctrl.validation && ctrl.validation.targetAudiences}"]`
                cy.get(test).then((res)=>{
                        let resElements = res[0].parentNode[26]
                        cy.wrap(resElements).click();
                });
                

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains(' TAforAutoTest_vl ')
                .click();
       

                cy.get('[ng-show="ctrl.formData.mcmcontent && ctrl.formData.mcmcontent.length"] > .select2 > .selection > .select2-selection')
                .click();
           

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains('AutoTestSms_vl')
                .should('have.text', 'AutoTestSms_vl')
                .click();

                cy.get('#distribution > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
               .should('be.visible')
               .click();
        })

        it("Create Distribution Viber", () => {

                cy.contains("Distribution")
                .should('be.visible')
                .click();  
                
                cy.get('.btn-add')
                .should('be.visible')
                .click();

                cy.get('.btn-viber')
                .should('be.visible')
                .click();

                cy.get('#distribution_name')
                .should('be.visible')
                .type('AutoTestViber_vl');
                
      
                cy.get('[ng-model ="ctrl.distribution.sendNow"]').check()
                .should('be.checked')
                cy.wait(500);


                let test = `#edit-target-form > [ng-class="{'has-error': ctrl.validation && ctrl.validation.targetAudiences}"]`
                cy.get(test).then((res)=>{
                        let resElements = res[0].parentNode[26]
                        cy.wrap(resElements).click();
                });
                

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains(' TAforAutoTest_vl ')
                .click();
       

                cy.get('[ng-show="ctrl.formData.mcmcontent && ctrl.formData.mcmcontent.length"] > .select2 > .selection > .select2-selection')
                .click();
           

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains('AutoTestViber_vl')
                .should('have.text', 'AutoTestViber_vl')
                .click();

                cy.get('#distribution > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
               .should('be.visible')
               .click();
        })

        it("Create Distribution Email", () => {

                cy.contains("Distribution")
                .should('be.visible')
                .click();  
                
                cy.get('.btn-add')
                .should('be.visible')
                .click();

                cy.get('.btn-email')
                .should('be.visible')
                .click();

                cy.get('#distribution_name')
                .should('be.visible')
                .type('AutoTestEmail_vl');
                
      
                cy.get('[ng-model ="ctrl.distribution.sendNow"]').check()
                .should('be.checked')
                cy.wait(500);


                let test = `#edit-target-form > [ng-class="{'has-error': ctrl.validation && ctrl.validation.targetAudiences}"]`
                cy.get(test).then((res)=>{
                        let resElements = res[0].parentNode[26]
                        cy.wrap(resElements).click();
                });
                

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains(' TAforAutoTest_vl ')
                .click();
       

                cy.get('[ng-show="ctrl.formData.mcmcontent && ctrl.formData.mcmcontent.length"] > .select2 > .selection > .select2-selection')
                .click();
           

                cy.get('.select2-results > .select2-results__options  > .select2-results__option')
                .contains('Beta Ginecologie Post visit')
                .should('have.text', 'Beta Ginecologie Post visit')
                .click();

                cy.get('#distribution > .modal-dialog > .modal-content > .modal-footer > .btn-primary')
               .should('be.visible')
               .click();
        })
})