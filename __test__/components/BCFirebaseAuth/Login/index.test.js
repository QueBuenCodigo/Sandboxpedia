import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Login from '../../../../components/BCFirebaseAuth/Login/index';

describe('<Login/>',()=>{

    const login=mount(<Login/>)

    test('test del renderizado de login',()=>{

        expect(login.length).toEqual(1);
    });
});


describe('Login Snapshot',()=>{

    test('comprobar la UI del componente Login',()=>{
        const login= create(<Login/>);
        expect(login.toJSON()).toMatchSnapshot();
    });

});
