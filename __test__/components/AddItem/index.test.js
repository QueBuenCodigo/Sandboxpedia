import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import AddItem from '../../../components/AddItem/index';


describe('<AddItem/>',()=>{

    const additem=mount(<AddItem></AddItem>)

    test('test del renderizado de AddItem',()=>{

        expect(additem.length).toEqual(1);
    });
});



describe(' AddItem Snapshot',()=>{

    test('comprobar la UI del componente AddItem',()=>{
        const additem= create(<AddItem/>);
        expect(additem.toJSON()).toMatchSnapshot();
    });

});
