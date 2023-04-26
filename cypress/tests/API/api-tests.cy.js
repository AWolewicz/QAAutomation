describe('API tests', () => {

    it('GET tests', () => {

    //Step 1
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/#/'
        }).as('detailsGET');
        cy.log('Request was sent.')
    
    //Step 2
        cy.get('@detailsGET').its('status').should('eq',200);
        cy.get('@detailsGET').its('body').should('not.be.empty');
       
    //Debug   
        cy.get('@detailsGET').then((response) => {
            cy.log('Response was: ' + JSON.stringify(response.body))
        })

    //Test duration
       cy.get('@detailsGET').then((response) => {
        assert.isTrue(response.duration <= 150)
    })
})
    
    it('POST test 1', () => {

    //Step 1
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/anything',
            body: {
                author: 'Andrzej Ziemiański',
                book: 'Achaia',
            },
        }).as('detailsPOST');
        cy.log('Request was sent.');
        
    //Step 2    
        cy.get('@detailsPOST').its('status').should('eq', 200);
        cy.get('@detailsPOST').its('body').should('not.be.empty');
        cy.log('Request status is correct and response body is not empty.');

    // Step 3
        cy.get('@detailsPOST').then((response) => {
        cy.wrap(JSON.stringify(response.body))
            .should('include', 'Andrzej Ziemiański')
            .should('include', 'Achaia');
    })

    //Test duration
    cy.get('@detailsPOST').then((response) => {
        assert.isTrue(response.duration <= 150)
    })
})

    it('POST test 2', () => {

    // Step 1
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/anything',
            body: {
                author: 'Jarosław Grzędowicz',
                title: 'Pan lodowego ogrodu',
            },
        }).as('detailsPOST');
        cy.log('Request was sent.');
        
    //Step 2    
        cy.get('@detailsPOST').its('status').should('eq', 200);
        cy.get('@detailsPOST').its('body').should('not.be.empty');
        cy.log('Request status is correct and response body is not empty.');

    // Step 3
        cy.get('@detailsPOST').then((response) => {
        cy.wrap(JSON.stringify(response.body))
            .should('include', 'Jarosław Grzędowicz')
            .should('include', 'Pan lodowego ogrodu');
    })

    //Test duration
    cy.get('@detailsPOST').then((response) => {
        assert.isTrue(response.duration <= 150)
    })
})

    it('POST test 3', () => {

        // Step 1
            cy.request({
                method: 'POST',
                url: 'https://httpbin.org/anything',
                body: {
                    author: 'Jacek Piekara',
                    title: 'Ja inkwizytor',
                },
            }).as('detailsPOST');
            cy.log('Request was sent.');
            
        //Step 2    
            cy.get('@detailsPOST').its('status').should('eq', 200);
            cy.get('@detailsPOST').its('body').should('not.be.empty');
            cy.log('Request status is correct and response body is not empty.');
    
        // Step 3
            cy.get('@detailsPOST').then((response) => {
            cy.wrap(JSON.stringify(response.body))
                .should('include', 'Jacek Piekara')
                .should('include', 'Ja inkwizytor');
        })

        //Test duration
       cy.get('@detailsPOST').then((response) => {
        assert.isTrue(response.duration <= 150)
    })
    })
 
    it('test random ids', () => {
        for(let i = 0; i < 10; i++) {
          const randomId = getRandomInt(10000000);
    
          cy.request({
            url: 'https://httpbin.org/headers',
            id: randomId
          }).as('randomID');
    
          cy.get('@randomID').its('status').should('eq', 200)
    
        }
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
          }
    })
    
    it('Test header', () => {
      
        //Step 1
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers',
            headers: {
                'header1': 'value1', 
            }
        }).as('header1')
        cy.log('Request was send.');

        //Step 2
        cy.get('@header1').its('status').should('eq', 200)
        cy.get('@header1').its('body').should('not.be.empty');
        cy.log('Request status is correct and response body is not empty.')

        //Debug
        cy.get('@header1').then((response) => {
            cy.wrap(JSON.stringify(response.body))
                .should('include', 'value1')
    })

    it('Test header 2', () => {
      
        //Step 1
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers',
            headers: {
                'header2': 'value2', 
            }
        }).as('header2')
        cy.log('Request was send.');

        //Step 2
        cy.get('@header2').its('status').should('eq', 200)
        cy.get('@header2').its('body').should('not.be.empty');
        cy.log('Request status is correct and response body is not empty.')

        //Debug
        cy.get('@header2').then((response) => {
            cy.wrap(JSON.stringify(response.body))
                .should('include', 'value2')
    })
})

    it('Test user-agent', () => {
     
        //Step 1
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers',
            headers: {
                'user-agent': 'My test user-agent'
            },
        }).as('userAgent');
        cy.log('Request was send.');

        //Step 2     
        cy.get('@userAgent').its('status').should('eq', 200)
        
        //Debug
        cy.get('@userAgent').then((response) => {
            cy.wrap(JSON.stringify(response.body))
                .should('include', 'My test user-agent')
    })
        
})
      })
})

