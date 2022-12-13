
let mayor = (a,b) => a > b ;
let negativo = (a) => a < 0 ;


describe('para que la página sea más segura necesitaremos integrarle un test E2E utilizando Cypress', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200')
    })

    context('al cargar la página se cargue al menos 1 elemento de la tabla', ()=>{

        it('revisar si la primera linea de la tabla tiene contenido', ()=>{
            cy.get('td').first().contains('1')
            
        })

    })

    context('el primer elemento de la lista sea el que mayor capitalización de mercado tenga (para comprobar ordenación descendente)', ()=>{

        it('comparar los valores de marketcap', ()=>{
            //expect(mayor( cy.get('td').eq(3),cy.get('td').eq(7) )).to.eq(true)

        })

    })

    context('el cambio de precio durante las 24 últimas horas aparezca verde si es positivo o rojo si es negativo (columna 24H %)', ()=>{

        it('comprobar el contenido 24H, si es negativo que se muestre rojo', ()=>{
           //expect(negativo(  cy.get('th').eq(7))).to.eq(true).should('have.attr','style','color: red')
         
        })

    })

    context('comprobar que junto al precio de cada criptomoneda salga el símbolo del dólar ', ()=>{

        it('comprobar el contenido de Price', ()=>{
            cy.get('td').eq(3).contains('$')

        })

    })
})