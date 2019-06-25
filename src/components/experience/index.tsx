import React from 'react';
import Wrapper from '../common/block_wrapper';
import Title from '../common/title';
import Step from './step';

interface Props {

}

interface State {

}

export default class Experience extends React.PureComponent<Props, State> {
    render() {
        return (
            <Wrapper id='experience'>
                <Title title='내가 걸어가고 있는 길...' />
                <div className='step-group'>
                    <Step timing={ 0 } stacks={ 4 } name='문과출신' on_horizontal={ true } on_vertical={ true } />
                    <Step timing={ 750 } stacks={ 3 } name='편입 / 개발입문' on_horizontal={ true } on_vertical={ true } />
                    <Step timing={ 1500 } stacks={ 2 } name='스타트업 경험' on_horizontal={ true } on_vertical={ true } />
                    <Step timing={ 2250 } stacks={ 1 } name='앱 창업 도전' on_horizontal={ true } on_vertical={ true } />
                    <Step timing={ 3000 } stacks={ 0 } name='??' on_horizontal={ true } on_vertical={ false } />
                </div>
            </Wrapper>
        );
    }
}


