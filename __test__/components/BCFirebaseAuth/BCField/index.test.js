import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import BCField from '../../../../components/BCFirebaseAuth/BCField/index';

describe('<BCField/>',(props)=>{
    const { type}=props;
    const bcf=mount(<BCField type={"checkbox"}/>);
 
    test('test del renderizado de BCField',()=>{

        expect(bcf.length).toEqual(1);
    });
});


// describe('BCField Snapshot',()=>{

//     test('comprobar la UI del componente BCField',()=>{
//         const bcf= create(<BCField/>);
//         expect(bcf.toJSON()).toMatchSnapshot();
//     });

// });
