import React from 'react';
import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Será avaliado se o arquivo teste App.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  test('É exibido na tela um link com o texto Home', () => {
    renderWithRouter(<App />);
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });
  test('É exibido na tela um link com o texto About', () => {
    renderWithRouter(<App />);
    const aboutLink = screen.getByRole('link', { name: /about/i });
    expect(aboutLink).toBeInTheDocument();
  });
  test('É exibido na tela um link com o texto Favorite Pokemón', () => {
    renderWithRouter(<App />);
    const favoritePokemonLink = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(favoritePokemonLink).toBeInTheDocument();
  });
});
