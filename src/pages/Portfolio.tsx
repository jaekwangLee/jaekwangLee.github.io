import React from 'react';
import Wrapper from '../components/Common/block_wrapper';
import Title from '../components/Common/title';
import Subtitle from '../components/Common/subtitle';
import Contents from '../components/Common/contents';
import Block from '../components/Portfolio/Atoms/block';

interface Props {
    name: string;
}

interface State {

}

export default class Portfolio extends React.PureComponent<Props, State> {
    render() {
        return (
            <Wrapper id='portfolio'>
                <Title title='이런 것들을 해봤습니다' />
                <div className='port-block-groups'>
                    <Block>
                        <Subtitle subtitle='원격제어 및 관리 시스템 개발' />
                        <Contents contents='IoT전문기업 엠투엠테크에 종사하며 클라이언트 개발자로서 엘리베이터 및 주차타워 원격관리 시스템인 ELSA 개발에 참여하였습니다. UI/UX부터 개발까지 클라이언트를 전체적으로 책임지고 개발한 경험이 있습니다.'/>
                    </Block>
                    <Block>
                        <Subtitle subtitle='React Native 앱 서비스 배포 및 운영' />
                        <Contents contents="
                            최근, RN을 활용하여 '공무원 시험일정, 공시생 SNS: 공투공' 이라는 앱을 제작 및 출시한 이력이 있습니다. 
                            두명의 팀으로 구성되어 클라이언트와 서버사이드를 나누어 개발하였으며, 클라이언트를 전적으로 전담하였습니다.
                            마케팅, 서비스 기획, UI/UX 등은 함께 만들어 갔으며, 현재는 안드로이드 IOS에서 모두 안정적으로 운영중에 있습니다.
                        "/>
                        <p><a href="https://play.google.com/store/apps/details?id=com.photuris&hl=ko">플레이스토어 바로가기</a></p>
                    </Block>
                    <Block>
                        <Subtitle subtitle='창업 공모전' />
                        <Contents contents='
                            19년 2월, (주)하이트진로에서 주관한 창년창업리그에 도전한 경험이 있습니다. 3명의 팀으로 구성하여 주류관련 SNS 볼빨간 술고래를 개발하였습니다(RN).
                            마찬가지로, 클라이언트를 전담하였고 그외의 주요사항들은 함께 논의하여 진행하였습니다. 서류전형에 합격하였으나 발표전형에서 떨어지는 아쉬움을 겪기도 하였습니다.
                        ' />
                    </Block>
                    <Block>
                        <Subtitle subtitle='홈페이지 외주제작' />
                        <Contents contents='
                            스타트업에서 퇴사 후, 재는기부 사이트를 통해 홈페이지를 외주제작한 경험이 있습니다. react + nodejs + aws를 기본 구성으로 하여 제작 및 납품하였습니다.
                            기업의 제품으로 납품한 경우들로 링크를 노출할 수는 없으나, gitlab에 private 레포지토리로 소스코드를 관리하고 있습니다.
                        ' />
                    </Block>
                    <div className='clearfix' />
                </div>
            </Wrapper>
        );
    }
}