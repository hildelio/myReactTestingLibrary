import { render, screen } from '@testing-library/react';
import { About } from '../pages';

describe('Será avaliado se o arquivo teste About.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  test('É exibido na tela um h2 com texto About Pokédex', () => {
    render(<About />);
    const h2About = screen.getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(h2About).toBeInTheDocument();
  });
  test('O atributo src da imagem é https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
    render(<About />);
    const imgAbout = screen.getByAltText('Pokédex');
    expect(imgAbout.src).toContain('https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
