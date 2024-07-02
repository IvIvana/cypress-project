describe('PokeAPI Berry Tests', () => {
  const baseUrl = 'https://pokeapi.co/api/v2';

  it('Should get expected response using a valid berry ID', () => {
    cy.request(`${baseUrl}/berry/1`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'cheri');
    });
  });

  it('Should return an error for an invalid berry ID', () => {
    cy.request({
      url: `${baseUrl}/berry/9999`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Should get expected response using a valid berry name', () => {
    cy.request(`${baseUrl}/berry/cheri`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('Should return an error for an invalid berry name', () => {
    cy.request({
      url: `${baseUrl}/berry/invalidBerryName`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
    });
  });

  it('Should get expected response using a valid berry flavor name', () => {
    cy.request(`${baseUrl}/berry-flavor/spicy`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('name', 'spicy');
    });
  });

  it('Should find the berry with the highest potency for spicy flavor and get its details', () => {
    cy.request(`${baseUrl}/berry-flavor/spicy`).then((response) => {
      expect(response.status).to.eq(200);

      const berries = response.body.berries;
      let highestPotencyBerry = berries[0];

      berries.forEach((berry) => {
        if (berry.potency > highestPotencyBerry.potency) {
          highestPotencyBerry = berry;
        }
      });

      cy.request(`${baseUrl}/berry/${highestPotencyBerry.berry.name}`).then((berryResponse) => {
        expect(berryResponse.status).to.eq(200);
        expect(berryResponse.body).to.have.property('name', highestPotencyBerry.berry.name);
      });
    });
  });
});
