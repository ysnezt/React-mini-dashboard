import Axios from 'axios';
import * as React from 'react';
import styled from 'styled-components';
import  Table  from './Table';
 

const Wrapper = styled.div`
padding: 50px 100px ;
height: 100%;
`;


export default class Devices extends React.Component<any,any>{

  constructor(props : any){
    super(props);
    
    this.state = {
      devices : [],
    }
   
  }

  public componentDidMount(){

    document.title = "Devices List";
    Axios.get('https://7rheg02jaa.execute-api.ap-southeast-2.amazonaws.com/dev/devices')
    .then((response) => {

    this.setState({
        devices: response.data.member 
    })
   
  }).catch((error)=>{
      global.console.log(error);
  });

  }

    public render(){
        return(
            <Wrapper>
                <Table item={this.state.devices} />
            </Wrapper>
        );
    }

}
