import { render, screen } from '@testing-library/react';
import { NotFound } from '../pages';

describe('Será avaliado se o arquivo teste NotFound.test.js contempla 100% dos casos de uso criados pelo Stryker', () => {
  test('É exibido na tela um h2 com o texto Page requested not found', () => {
    render(<NotFound />);
    const h2NotFound = screen.getByRole('heading', {
      level: 2,
      name: /page requested not found/i,
    });
    expect(h2NotFound).toBeInTheDocument();
  });
  test('Existe uma imagem com o src https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    render(<NotFound />);
    const imgNotFound = screen.getByAltText('Pikachu crying because the page requested was not found');
    expect(imgNotFound.src).toContain('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
