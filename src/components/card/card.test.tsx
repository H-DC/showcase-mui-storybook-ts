import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Card } from './card';

describe('FormRow', () => {
  it('Should display card', async () => {
    let clicked = false;
    const { queryByText, findByText } = render(
      <Card
        title={{
          label: 'Lorem ipsum dolor sit amet',
          subtitle: 'Velit esse cillum dolore eu fugiat nulla pariatur',
          avatar: 'R',
        }}
        headerActions={[
          { label: 'External action', onClick: () => null },
          { label: 'Other action', onClick: () => null },
        ]}
        primaryFooterAction={{ label: 'Envoyer le formulaire' }}
        secondaryFooterActions={{
          label: 'Enregistrer',
          onClick: () => {
            clicked = true;
          },
        }}
      >
        <div>child</div>
        <div>child</div>
      </Card>
    );

    expect(queryByText('Lorem ipsum dolor sit amet')).toBeTruthy();
    expect(queryByText('Velit esse cillum dolore eu fugiat nulla pariatur')).toBeTruthy();
    expect(queryByText('R')).toBeTruthy();
    expect(queryByText('Envoyer le formulaire')).toBeTruthy();

    fireEvent.click(await findByText('Enregistrer'));
    expect(clicked).toBe(true);
  });
});
