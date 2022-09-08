import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { FormRow } from './formRow';

describe('FormRow', () => {
  it('Should wrap elements with display flex', () => {
    render(
      <FormRow>
        <div>A</div>
        <div>B</div>
        <div>C</div> 
      </FormRow>
    );

    expect(screen.getByText('A').parentElement?.parentElement?.classList[1]).toBe('MuiGrid-container');
  });
});
