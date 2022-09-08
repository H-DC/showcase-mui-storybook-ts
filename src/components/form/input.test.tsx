import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Input, InputVariant } from './input';

describe('Radio input', () => {
    it('Should render input', () => {
        const { queryByText } = render(
            <Input
                variant={InputVariant.Radio}
                options={[
                    { value: 'fieldA.1', label: 'Field A.1' },
                    { value: 'fieldA.2', label: 'Field A.2' },
                    { value: 'fieldA.3', label: 'Field A.3' },
                ]}
                label="Field A"
                name="fieldA"
            />
        );

        expect(queryByText('Field A.1')).toBeTruthy();
        expect(queryByText('Field A.2')).toBeTruthy();
        expect(queryByText('Field A.3')).toBeTruthy();
    });

    it('Should change on click', () => {
        let value = '';
        const changeValue = (evt: any) => {
            value = evt.target.value;
        };
        const { queryByText, queryAllByRole } = render(
            <Input
                variant={InputVariant.Radio}
                options={[
                    { value: 'fieldA.1', label: 'Field A.1' },
                    { value: 'fieldA.2', label: 'Field A.2' },
                    { value: 'fieldA.3', label: 'Field A.3' },
                ]}
                label="Field A"
                name="fieldA"
                value={value}
                onChange={changeValue}
            />
        );
        expect(queryByText('Field A.1')).toBeTruthy();
        expect(queryByText('Field A.2')).toBeTruthy();
        expect(queryByText('Field A.3')).toBeTruthy();
        expect(value).toBe('');
        const fields = queryAllByRole('radio');
        fireEvent.click(fields[1]);
        expect(value).toBe('fieldA.2');
    });
});
