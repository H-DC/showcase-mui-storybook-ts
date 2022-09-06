import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/grid';
import Box from '@material-ui/core/box';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';

const styles = makeStyles((theme) => ({
  footerActions: {
    padding: '1rem',
  },
}));

function Original() {
  const classes = styles();

  return (
    <Formik
      initialValues={{
        fieldA: '',
        fieldB: '',
        fieldC: '',
        fieldD: '',
        fieldE: '',
        fieldF: '',
        fieldG: '',
      }}
      onSubmit={(values, { setSubmitting }) => {}}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => {
        console.log('========>', values);

        return (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader
                avatar={<Avatar aria-label="recipe">R</Avatar>}
                action={
                  <Button size="small" variant="text">
                    External action
                  </Button>
                }
                title="Lorem ipsum dolor sit amet"
                subheader="Velit esse cillum dolore eu fugiat nulla pariatur"
                style={{ borderBottom: '1px solid #eee' }}
              />
              <CardContent>
                <Box style={{ marginBottom: '1rem' }}>
                  <Typography
                    variant="subtitle1"
                    color="textSecondary"
                    component="p"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>

                <Grid container direction="column" spacing={2}>
                  <Grid item xs>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Field A</FormLabel>
                      <RadioGroup
                        name="fieldA"
                        classes={{ children: classes.radioGroupChildren }}
                      >
                        <FormGroup row>
                          <FormControlLabel
                            value="fieldA.1"
                            control={
                              <Radio onChange={handleChange} name="fieldA" />
                            }
                            label="Field A.1"
                          />
                          <FormControlLabel
                            value="fieldA.2"
                            control={
                              <Radio onChange={handleChange} name="fieldA" />
                            }
                            label="Field A.2"
                          />
                          <FormControlLabel
                            value="fieldA.3"
                            control={
                              <Radio onChange={handleChange} name="fieldA" />
                            }
                            label="Field A.3"
                          />
                        </FormGroup>
                      </RadioGroup>
                    </FormControl>
                  </Grid>
                  <Grid item>
                    <FormControl variant="outlined" fullWidth>
                      <InputLabel id="select" htmlFor="select">
                        Field B
                      </InputLabel>
                      <Select
                        labelId="select"
                        id="select"
                        name="fieldB"
                        label="Field B"
                        onChange={handleChange}
                        autoWidth
                        size="small"
                        native
                        fullWidth
                      >
                        <option value="" />
                        <option value="fieldB.1">Field B.1</option>
                        <option value="fieldB.2">Field B.2</option>
                        <option value="fieldB.3">Field B.3</option>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs>
                    <Grid container direction="row" spacing={2}>
                      <Grid item xs>
                        <TextField
                          value={values.fieldC}
                          label="Field C"
                          variant="outlined"
                          name="fieldC"
                          fullWidth
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs>
                        <TextField
                          value={values.fieldD}
                          label="Field D"
                          variant="outlined"
                          name="fieldD"
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                      <Grid item xs>
                        <TextField
                          value={values.fieldE}
                          label="Field E"
                          variant="outlined"
                          name="fieldE"
                          onChange={handleChange}
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item xs>
                    <TextField
                      label="Field F"
                      variant="outlined"
                      name="fieldF"
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs>
                    <FormControl required component="fieldset">
                      <FormLabel component="legend">Field G</FormLabel>
                      <FormGroup row>
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fieldG"
                              value="fieldG.1"
                              onChange={handleChange}
                            />
                          }
                          label="Field G.1"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fieldG"
                              value="fieldG.2"
                              onChange={handleChange}
                            />
                          }
                          label="Field G.2n"
                        />
                        <FormControlLabel
                          control={
                            <Checkbox
                              name="fieldG"
                              value="fieldG.3"
                              onChange={handleChange}
                            />
                          }
                          label="Field G.3"
                        />
                      </FormGroup>
                      <FormHelperText>You can display an error</FormHelperText>
                    </FormControl>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions classes={{ root: classes.footerActions }}>
                <Grid
                  container
                  direction="row"
                  spacing={4}
                  justifyContent="space-between"
                >
                  <Grid item>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      Some text
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Button color="primary" variant="contained">
                      Enregistrer
                    </Button>
                  </Grid>
                </Grid>
              </CardActions>
            </Card>
          </form>
        );
      }}
    </Formik>
  );
}

export default Original;
