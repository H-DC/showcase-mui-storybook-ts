import { fireEvent, render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Target from './target';

describe('Target', () => {
    it('Should require field G', async () => {
        const { findByTestId, findByText } = render(<Target />);

        fireEvent.click(await findByText('Enregistrer'));
        expect(findByTestId('error-tag')).toBeTruthy();
    });

    it('Should send http request when form is valid', async () => {
        const { findByText, queryByTestId, queryAllByRole } = render(<Target />);

        const radios = queryAllByRole('radio');
        fireEvent.click(radios[0]);
        const selects = queryAllByRole('combobox');
        fireEvent.change(selects[0], { target: { value: 'fieldB.2' } });
        const textFields = queryAllByRole('textbox');
        fireEvent.change(textFields[0], { target: { value: 'testFieldC' } });
        const checkboxes = queryAllByRole('checkbox');
        fireEvent.click(checkboxes[1]);

        fireEvent.click(await findByText('Enregistrer'));
        expect(queryByTestId('error-tag')).toBeFalsy();
    });
});
