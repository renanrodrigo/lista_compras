describe('Abre a pagina', () => {
  it('verifica se os elementos estão lá', () => {
    cy.visit('./index.html')
    cy.get("button").contains("Adicionar")
    cy.get("input[placeholder=Item]")
  })

  it('preenche os campos e confere os valores', () => {
    cy.visit('./index.html')
    cy.get("input[placeholder=Item]").type("Banana")
    cy.get("input[placeholder=Quantidade]").type("2")
    cy.get("input[placeholder='Preço Unitário']").type("10")
    cy.get("button").contains("Adicionar").click()
    cy.get(".total-value").contains("R$20")
    cy.get("button").contains("Adicionar").click()
    cy.get(".total-value").contains("R$40")   
  })
})
