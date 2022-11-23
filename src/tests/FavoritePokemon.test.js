import { render, screen } from '@testing-library/react';
import { FavoritePokemon } from '../pages';

describe('Será avaliado se o arquivo teste FavoritePokemon.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  test('É exibido na tela a mensagem No favorite pokemon found', () => {
    render(<FavoritePokemon />);
    const pFavorite = screen.getByText(/no favorite pokémon found/i);
    expect(pFavorite).toBeInTheDocument();
  });
});
