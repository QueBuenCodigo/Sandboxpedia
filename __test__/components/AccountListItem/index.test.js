import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import AccountListItem from '../../../components/AccountListItem/index'

describe('<AccountListItem/>',()=>{

    const accountlistitem=mount(<AccountListItem></AccountListItem>)

    test('test del renderizado de AccountListItem',()=>{

        expect(accountlistitem.length).toEqual(1);
    });
});



describe(' AccountListItemAccountListItem Snapshot',()=>{

    test('comprobar la UI del componente AccountListItem',()=>{
        const account= create(<AccountListItem/>);
        expect(account.toJSON()).toMatchSnapshot();
    });

});

