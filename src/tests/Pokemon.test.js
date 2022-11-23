import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Será avaliado se o arquivo teste Pokemon.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const imgPikachu = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPikachu.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('A imagem do pokemon possui o alt <name> sprite', () => {
    renderWithRouter(<App />);
    const imgPikachu = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(imgPikachu.alt).toBe('Pikachu sprite');
  });
  test('A imagem de favorito star possui o src /star-icon.svg e A imagem de favorito star possui o alt <name> is marked as favorite', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
    const checkFavorite = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(checkFavorite);
    const isFavorite = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(isFavorite).toBeInTheDocument();
    expect(isFavorite.alt).toBe('Pikachu is marked as favorite');
    expect(isFavorite.src).toContain('/star-icon.svg');
  });
  test('É exibido na tela um texto com o tipo do pokemon', () => {
    renderWithRouter(<App />);
    const type = screen.getByTestId('pokemon-type');
    expect(type).toHaveTextContent('Electric');
  });
  test('É exibido na tela um link com o href /pokemon/<id>', () => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    expect(moreDetails.href).toContain('/pokemon/25');
  });
});
