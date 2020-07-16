
import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Signup from '../../../../../components/BCFirebaseAuth/Signup/SignupForm/index';


describe('<Signup/>',()=>{

    const signup=mount(<Signup/>)

    test('test del renderizado de Signup',()=>{

        expect(signup.length).toEqual(1);
    });
});


describe('Signup Snapshot',()=>{

    test('comprobar la UI del componente Signup',()=>{
        const signup= create(<Signup/>);
        expect(signup.toJSON()).toMatchSnapshot();
    });

});