import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Será avaliado se o arquivo teste Pokedex.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  test('Os botões de filtragem por tipo possuem o nome correto', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i });
    const electricButton = screen.getByRole('button', { name: /electric/i });
    const fireButton = screen.getByRole('button', { name: /fire/i });
    const bugButton = screen.getByRole('button', { name: /bug/i });
    const poisonButton = screen.getByRole('button', { name: /poison/i });
    const psychicButton = screen.getByRole('button', { name: /psychic/i });
    const normalButton = screen.getByRole('button', { name: /normal/i });
    const dragonButton = screen.getByRole('button', { name: /dragon/i });
    expect(allButton).toHaveTextContent('All');
    expect(electricButton).toHaveTextContent('Electric');
    expect(fireButton).toHaveTextContent('Fire');
    expect(bugButton).toHaveTextContent('Bug');
    expect(poisonButton).toHaveTextContent('Poison');
    expect(psychicButton).toHaveTextContent('Psychic');
    expect(normalButton).toHaveTextContent('Normal');
    expect(dragonButton).toHaveTextContent('Dragon');
  });
  test('Os botões de filtragem por tipo possuem o data-testid=pokemon-type-button exceto o botão All', () => {
    renderWithRouter(<App />);
    const filterButton = screen.getAllByTestId('pokemon-type-button');
    // console.log(filterButton);
    expect(filterButton[0]).toHaveTextContent('Electric');
    expect(filterButton[1]).toHaveTextContent('Fire');
    expect(filterButton[2]).toHaveTextContent('Bug');
    expect(filterButton[3]).toHaveTextContent('Poison');
    expect(filterButton[4]).toHaveTextContent('Psychic');
    expect(filterButton[5]).toHaveTextContent('Normal');
    expect(filterButton[6]).toHaveTextContent('Dragon');
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const allButton = screen.getByRole('button', { name: /all/i });
    userEvent.click(allButton);
    expect(allButton).toBeInTheDocument();
  });
});
