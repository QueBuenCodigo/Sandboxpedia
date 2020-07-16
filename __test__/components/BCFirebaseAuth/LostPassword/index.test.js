import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import LostPassword from '../../../../components/BCFirebaseAuth/LostPassword/index';


describe('<LostPassword/>',()=>{

    const lost=mount(<LostPassword/>)

    test('test del renderizado de LostPassword',()=>{

        expect(lost.length).toEqual(1);
    });
});


describe('LostPassword Snapshot',()=>{

    test('comprobar la UI del componente LostPassword',()=>{
        const lost= create(<LostPassword/>);
        expect(lost.toJSON()).toMatchSnapshot();
    });

});