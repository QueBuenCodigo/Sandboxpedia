import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import BCButton from '../../../../components/BCFirebaseAuth/BCButton/index';

describe('<BCButton/>',()=>{

    const button=mount(<BCButton/>)

    test('test del renderizado de BCButton',()=>{

        expect(button.length).toEqual(1);
    });
});


describe('BCButton Snapshot',()=>{

    test('comprobar la UI del componente BCButton',()=>{
        const button= create(<BCButton/>);
        expect(button.toJSON()).toMatchSnapshot();
    });

});

