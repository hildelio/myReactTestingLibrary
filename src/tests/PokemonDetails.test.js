import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Será avaliado se o arquivo teste PokemonDetails.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  beforeEach(() => {
    renderWithRouter(<App />);
    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);
  });

  test('É exibido na tela um h2 com o texto <name> Details', () => {
    const h2NameDetails = screen.getByRole('heading', { level: 2, name: /details/i });
    expect(h2NameDetails).toBeInTheDocument();
  });
  test('É exibido na tela um h2 com o texto Summary', () => {
    const h2SummaryDetails = screen.getByRole('heading', { level: 2, name: /summary/i });
    expect(h2SummaryDetails).toBeInTheDocument();
  });
  test('É exibido na tela um texto contendo <summary>', () => {
    const pSummary = screen.getByText(/this intelligent pokémon roasts hard berries with electricity to make them tender enough to eat\./i);
    expect(pSummary).toBeInTheDocument();
  });
  test('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
    const h2GameLocationDetails = screen.getByRole('heading', { level: 2, name: /game locations of pikachu/i });
    expect(h2GameLocationDetails).toBeInTheDocument();
  });
  test('São exibidas na tela imagens de localização com o src correto', () => {
    const imgDetails = screen.getAllByRole('img', { name: /Pikachu location/i });
    expect(imgDetails[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgDetails[1].src).toContain('https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  });
  test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
    const labelFavoriteDetails = screen.getByText(/pokémon favoritado\?/i);
    expect(labelFavoriteDetails).toBeInTheDocument();
  });
});
