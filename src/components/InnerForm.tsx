import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {  Form , FormikProps } from 'formik';


// Shape of form values
interface FormValues {
    id: any;
    serial: any;
    name: any;
    note: any;   
  }
  
  const InnerForm = (props: FormikProps<FormValues>) => {
    const {  handleChange , values , errors , touched } = props;
    return (
            <Form>
                    <TextField  type="hidden"  name="id" value={values.id}/>
                    <TextField  type="text" name="serial"  label="Serial" InputLabelProps={{ shrink: true }} disabled={true} value={values.serial}/>
                <br/><br/>
                <div>
                    { touched.name && errors.name && <p style={{color:"red"}} >{errors.name}</p> }
                    <TextField  type="text" name="name" label="Device Name" InputLabelProps={{ shrink: true }} onChange={handleChange}  value={values.name}/>
                </div>
                <br/><br/>
                <div>
                    { touched.note && errors.note && <p style={{color:"red"}} >{errors.note}</p> }
                    <TextField  type="text" name="note" fullWidth={true} label="Note" InputLabelProps={{ shrink: true }} onChange={handleChange} value={values.note} />
                </div>
                <br/><br/><br/>
                    <Button type="submit" variant="contained" color="primary" disabled={false}>Save</Button>
          </Form>
    );
  };

  export default InnerForm ;