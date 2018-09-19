
import * as Yup from 'yup';
import { withFormik } from 'formik';
import { putData } from './ApiFunctions';
import  InnerForm  from './InnerForm';

 // Shape of form values
interface FormValues {
  id: any;
  serial: any;
  name: any;
  note: any;  
}


// The type of props MyForm receives
interface MyFormProps {
  id: any;
  serial: any;
  name: any;
  note: any; 
}

  // Transform outer props into form values
const MyForm = withFormik<MyFormProps, FormValues>({

  enableReinitialize: true,
  mapPropsToValues: (props:any) => {

    return {
      id: props.id,
      serial: props.serial,
      name: props.name,
      note: props.note,  
    };
  },
  validationSchema: Yup.object().shape({
    
      name: Yup.string().max(64).required(),
      note: Yup.string().max(512)
      
  }),
  handleSubmit: (values:any) => {

    putData(values.id,values.name,values.note);

  },
})(InnerForm);


export default MyForm;