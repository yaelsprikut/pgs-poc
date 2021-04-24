describe('My First Test', () => {
    beforeEach(() => {
      cy.visit("/")
    })
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })

    it('Basic math test...', () => {
      expect(1+1).to.equal(2)
    })

    it('gets text from button', () => {
      cy.get('#btn-test').then((btn) => {
        expect(btn[0].innerText).contains("Click me!")
      })
    })

    it('gets text from header', () => {
      cy.get('.App-header > p').then((btn) => {
        expect(btn[0].innerText).contains("Hello Yale!")
      })
    })

  })