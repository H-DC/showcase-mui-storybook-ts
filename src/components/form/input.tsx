import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core';
import { FormHelperText, InputLabel, Select, TextField } from '@material-ui/core';

export enum InputVariant {
    Radio = 'radio',
    Select = 'select',
    Text = 'text',
    Checkbox = 'checkbox',
}

interface InputProps {
    variant: InputVariant;
    options?: { value: string; label: string }[];
    label: string;
    name: string;
    value?: string | string[];
    errors?: string[];
    onChange?: (e: React.ChangeEvent<unknown>) => void;
}

export const Input: React.FC<InputProps> = ({ variant, errors, options, label, name, value, onChange }) => {
    if (variant === InputVariant.Radio) {
        return (
            <FormControl component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup name={name} value={value}>
                    <FormGroup row>
                        {options?.map((option) => (
                            <FormControlLabel
                                key={option.value}
                                value={option.value}
                                control={<Radio onChange={onChange} name={name} />}
                                label={option.label}
                            />
                        ))}
                    </FormGroup>
                </RadioGroup>
            </FormControl>
        );
    } else if (variant === InputVariant.Select) {
        return (
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="select" htmlFor="select">
                    {label}
                </InputLabel>
                <Select
                    labelId="select"
                    id="select"
                    name={name}
                    label={label}
                    onChange={onChange}
                    value={value}
                    autoWidth
                    native
                    fullWidth
                >
                    {options?.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.label}
                        </option>
                    ))}
                </Select>
            </FormControl>
        );
    } else if (variant === InputVariant.Text) {
        return <TextField value={value} label={label} variant="outlined" name={name} fullWidth onChange={onChange} />;
    } else if (variant === InputVariant.Checkbox) {
        return (
            <FormControl required component="fieldset">
                <FormLabel component="legend">{label}</FormLabel>
                <FormGroup row>
                    {options?.map((option) => (
                        <FormControlLabel
                            key={option.value}
                            control={<Checkbox name={name} value={option.value} onChange={onChange} />}
                            label={option.label}
                        />
                    ))}
                </FormGroup>
                {errors?.map((error) => (
                    <FormHelperText error key={error} data-testid="error-tag">
                        {error}
                    </FormHelperText>
                ))}
            </FormControl>
        );
    } else {
        return null;
    }
};
