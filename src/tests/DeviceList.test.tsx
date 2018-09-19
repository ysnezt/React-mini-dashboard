
import * as React from 'react'
import Wrapper from '../components/DevicesList' 
import * as renderer from 'react-test-renderer'
import 'jest-styled-components'
 

 
test('it works', () => {
  const tree = renderer.create(<Wrapper/>).toJSON();
  expect(tree).toMatchSnapshot();
})