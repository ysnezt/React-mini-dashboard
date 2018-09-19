import Axios from 'axios';
import * as React from 'react';
import MyForm from './Form';
import styled from 'styled-components';


const Wrapper = styled.div`
padding: 50px 100px ;
`;

const Div = styled.div`
padding: 30px 30px ;
background-color: white;
border-radius: 2px ;
border: 1px solid #ccc ;
`;


export default class EditForm extends React.Component<any,any>{

  constructor(props : any){
    super(props);
    
    this.state = {
      id: '',
      tmpSerial: '',
      tmpName: '',
      tmpNote: '',
      deviceName: ''
    }
  
  }

  public componentDidMount(){

    document.title = "Edit Page";
    const id = this.props.match.params.id ;
    Axios.get(`https://7rheg02jaa.execute-api.ap-southeast-2.amazonaws.com/dev/devices/${id}`)
    .then((response) => {

    this.setState({

        id: this.props.match.params.id,
        tmpSerial: response.data.serial,
        tmpName: response.data.name ,
        tmpNote: response.data.note,
        deviceName: response.data.name
        
    })
    
    }).catch((error)=>{
        global.console.log(error);
    });

  } 

    public render(){
        return(

            <Wrapper>
                <Div>
                    <h3>{ this.state.deviceName }</h3><br/>
                    <MyForm id={this.state.id} serial={this.state.tmpSerial} name={this.state.tmpName} note={this.state.tmpNote}  />
                </Div>
            </Wrapper> 

        );
    }
}