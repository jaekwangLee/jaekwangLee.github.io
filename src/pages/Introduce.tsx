import React from 'react';
import Wrapper from '../components/Common/block_wrapper';
import Title from '../components/Common/title';
import Contents from '../components/Common/contents';

interface Props {

}

interface State {

}

export default class Introduce extends React.PureComponent<Props, State> {
    render() {
        return (
            <Wrapper id='introduce'>
                <Title title='저는 이런사람입니다.' />
                <Contents 
                    contents={`
                        남들과는 다른, 조금은 특별한 인생을 살아가고 있는 웹,앱 개발자 이재광입니다. 
                        먼저, 주로 다루는 기술 스택으로는 Javascript, react-native, react.js, node.js, aws 등이 있으며 현재 react, react-native를 주력으로 하고 있습니다. 
                        최근, react-native를 활용하여 만든 '공무원 시험일정, 공시생 SNS: 공투공'이라는 앱을 론칭한 경험이 있습니다. 제가 처음부터 개발자의 길을 얼어온 것은 아닙니다. 
                        꼭 하고싶은 일을 하면서 살아야 겠다고 생각하는 저는 웨딩플래너, 매장관리자, 배관설비 등 다양한 일을 하며 도전정신을 가지고 꿈을 찾아 헤맸습니다. 
                        그리고 결국 군 전역 후 '진정한 나를 찾아' 호주로 워킹 홀리데이를 떠났습니다. 
                        그 곳에서 최대한 많은 사람들과 만나고 대화하며 식견을 넓히고, 진정 내가 하고자 하는것에대해 생각을 정리한 뒤, 한국에 돌아와 소프트웨어공학을 전공하기위해 대학에 재입학을 하였습니다. 
                        학교를 다니며 IoT전문 스타트업에 취업해 실무 경력을 함께 쌓았습니다. 
                        운 좋게도 그곳의 개발환경이 react, nodejs, postgresql, aws등 당시 최신기술이자 최고의 개발환경이라 불리는 것들을 채택하고 있었던 덕에 좋은 커리어를 쌓아왔습니다. 
                        최근에는 Typescript, Redux 등에 관심을 가지고 집중적으로 습득하고있습니다.
                    `}
                />
            </Wrapper>
        )
    }
}