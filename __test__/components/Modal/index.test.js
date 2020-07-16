import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Modal from '../../../components/Modal/index';

describe('<Modal/>',()=>{

    const modal=mount(<Modal/>)

    test('test del renderizado de Modal',()=>{

        expect(modal.length).toEqual(1);
    });
});



describe(' AccountListItemAccountListItem Modal',()=>{

    test('comprobar la UI del componente Modal',()=>{
        const modal= create(<Modal/>);
        expect(modal.toJSON()).toMatchSnapshot();
    });

});
 

