import { Card, Input, FormRow, InputVariant } from './components';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';

const formSchema = yup.object().shape({
    fieldA: yup.string().oneOf(['fieldA.1', 'fieldA.2', 'fieldA.3']),
    fieldB: yup.string().oneOf(['fieldB.1', 'fieldB.2', 'fieldB.3']),
    fieldC: yup.string(),
    fieldD: yup.string(),
    fieldE: yup.string(),
    fieldF: yup.string().when('fieldA', { is: 'fieldA.2', then: yup.string().required() }),
    fieldG: yup
        .array()
        .of(yup.string().oneOf(['fieldG.1', 'fieldG.2', 'fieldG.3']))
        .min(1)
        .required(),
});

const INITIAL_VALUES = {
    fieldA: 'fieldA.3',
    fieldB: 'fieldB.2',
    fieldC: 'initial value',
    fieldD: '',
    fieldE: '',
    fieldF: '',
    fieldG: [],
};

function Target() {
    const [errors, setErrors] = useState<string[]>([]);

    return (
        <Formik
            onSubmit={async (values) => {
                formSchema
                    .validate(values)
                    .then(() => {
                        setErrors([]);
                        console.log('Send http request');
                    })
                    .catch((err) => {
                        setErrors(err.errors);
                    });
            }}
            initialValues={INITIAL_VALUES}
        >
            {({ values, handleChange, handleSubmit, ...rest }) => (
                <Card
                    title={{
                        label: 'Lorem ipsum dolor sit amet',
                        subtitle: 'Velit esse cillum dolore eu fugiat nulla pariatur',
                        avatar: 'R',
                    }}
                    headerActions={[
                        { label: 'External action', onClick: () => console.log('ext') },
                        { label: 'Other action', onClick: () => console.log('other') },
                    ]}
                    primaryFooterAction={{ label: 'Envoyer le formulaire' }}
                    secondaryFooterActions={{ label: 'Enregistrer', onClick: handleSubmit }}
                >
                    <Input
                        variant={InputVariant.Radio}
                        options={[
                            { value: 'fieldA.1', label: 'Field A.1' },
                            { value: 'fieldA.2', label: 'Field A.2' },
                            { value: 'fieldA.3', label: 'Field A.3' },
                        ]}
                        label="Field A"
                        name="fieldA"
                        value={values.fieldA}
                        onChange={handleChange}
                    />
                    <Input
                        variant={InputVariant.Select}
                        options={[
                            { value: '', label: '' },
                            { value: 'fieldB.1', label: 'Field B.1' },
                            { value: 'fieldB.2', label: 'Field B.2' },
                            { value: 'fieldB.3', label: 'Field B.3' },
                        ]}
                        label="Field B"
                        name="fieldB"
                        value={values.fieldB}
                        onChange={handleChange}
                    />
                    <FormRow>
                        <Input
                            variant={InputVariant.Text}
                            label="Field C"
                            name="fieldC"
                            onChange={handleChange}
                            value={values.fieldC}
                        />
                        <Input
                            variant={InputVariant.Text}
                            label="Field D"
                            name="fieldD"
                            onChange={handleChange}
                            value={values.fieldD}
                        />
                        <Input
                            variant={InputVariant.Text}
                            label="Field E"
                            name="fieldE"
                            onChange={handleChange}
                            value={values.fieldE}
                        />
                    </FormRow>
                    <Input
                        variant={InputVariant.Text}
                        label="Field F"
                        name="fieldF"
                        onChange={handleChange}
                        value={values.fieldF}
                    />
                    <Input
                        variant={InputVariant.Checkbox}
                        options={[
                            { value: 'fieldG.1', label: 'Field G.1' },
                            { value: 'fieldG.2', label: 'Field G.2' },
                            { value: 'fieldG.3', label: 'Field G.3' },
                        ]}
                        label="Field G"
                        name="fieldG"
                        errors={errors}
                        onChange={handleChange}
                        value={values.fieldG}
                    />
                </Card>
            )}
        </Formik>
    );
}

export default Target;
