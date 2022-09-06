import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  InputLabel,
  Select,
  TextField,
} from '@material-ui/core';

export enum InputVariant {
  Radio = 'radio',
  Select = 'select',
  Text = 'text',
  Checkbox = 'checkbox',
}

interface InputProps {
  variant: InputVariant;
  options: { value: string; label: string }[];
  label: string;
  name: string;
  value: string | string[];
  onChange: (e: React.ChangeEvent<any>) => void;
}

export const Input: React.FC<InputProps> = ({ variant, options, label, name, value, onChange }) => {
  if (variant === InputVariant.Radio) {
    return (
      <FormControl component="fieldset">
        <FormLabel component="legend">{label}</FormLabel>
        <RadioGroup name={name} value={value}>
          <FormGroup row>
            {options.map((option: any) => (
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
          {options.map((option: any) => (
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
          {options.map((option: any) => (
            <FormControlLabel
              key={option.value}
              control={<Checkbox name={name} value={option.value} onChange={onChange} />}
              label={option.label}
            />
          ))}
        </FormGroup>
        <FormHelperText>You can display an error</FormHelperText>
      </FormControl>
    );
  } else {
    return null;
  }
};
