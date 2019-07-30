
// type
const UPDATE_NEWS = 'UPDATE_NEWS';
const SHOW_NEWS = 'SHOW_NEWS';

// action by type
export const updateHorizontal = (news_idx: string) => ({ type: UPDATE_NEWS, news_idx });
export const showDetailNews = (active: Boolean) => ({ type:SHOW_NEWS, active });

interface stateTypes {
    active_recent: Boolean;
    active_news_idx: number | string;
    news: Array<object>;
};

const initialState: stateTypes = {
    active_recent: false,
    active_news_idx: 0,
    news: [
        {
            id: '1561647600000',
            title: '피칫과 함께',
            date: '2019-06-28',
            contents: ` 공투공의 클라이언트를 담당하는 저 이재광 개발자가 (주)전우행복꿈사람사랑디허브의  "피칫"과 함께하게 되었습니다.
            피칫은 스타트업을 위한 스타트업입니다. 말이 조금 어렵죠?
            피칫은 수차례 창업의 실패와 성공을 경험한 "창업의 고수"들이 모여 만든 회사의 아이템으로, 스타트업들의 겪는 근본적인 문제인 "자금확보 및 투자유치"라는 문제를 해결해주기위한 플랫폼입니다.
            좋은 아이템을 가지고있는 스타트업과 자금과 노하우를 가지고 있는 투자자를 서로 연결해주고, 투자자들 간의 연결고리를 형성해줍니다.
            하나의 거대자본이 된 투자자들의 자금은, 좋은 아이디어와 기술력을 가진 스타트업으로 유입되어 기업의 활력을 찾아줄 것입니다.`,
        },
        {
            id: '1560783600000',
            title: '"공투공", 500다운로드 돌파',
            date: '2019-06-18',
            contents: ` 여러분에 성원에 힘입어, 공투공이 별다른 홍보 없이 500 다운로드를 빠르게 돌파하였습니다. 
            공시생 여러분의 니즈를 모두 충족시키기에는 너무나도 부족한 앱임에도 많은 사랑과 관심 주셔서 정말 감사합니다.
            앞으로의 공투공은 이런 방향으로 발전될것입니다.\n
            1. 유뷰트 동영상 지원
            2. 메모기능 강화
            3. 이미지 핸들링
            4. 유용한 정보 제공
            5. 쪽지\n
            이 외에도 여러분의 이야기를 늘 귀기울여 듣고 발전시켜 나가는 셀프메이드가 되겠습니다. 개발자 이메일로 좋은 의견 제시해 주시면 감사하겠습니다.`,
        },
        {
            id: '1558710000000',
            title: '"공무원 시험일정, 공시생 SNS: 공투공" 서비스 론칭',
            date: '2019-05-25',
            contents: ` 드디어 국내최초의 공무원 시험 준비생 전용 SNS가 출시되었습니다. 
            집에서도, 친구들 사이에서도, 학원에서도 주변의 눈치를 보느냐 개인생활 한 번 제대로 못하고 스트레스를 방출할 출구를 잃어버린 그들. 
            공투공 오직 그들만을 위한 소통의 장입니다. 이제 마음편히 소통하고 나누며 좀 더 효율적인 공시생활을 해보세요.
            셀프메이드는 공시생 여러분들의 수험생활을 응원합니다.`,
        },
        {
            id: '1534345200000',
            title: '(주)엠투엠테크와 함께',
            date: '2018-08-16',
            contents: `IoT 전문기업 엠투엠테크에서 웹 개발자로 함께 하게 되었습니다. 
            Node.js, React, AWS 환경에서 스마트 엘리베이터를 만들기 위해 끊임없이 고민하고 개발해 낼 것입니다.
            빅데이터 수집 환경을 구축, 머신러닝을 접목하여 사고예방 시스템을 구축하는것을 목표로 하여
            재고관리, 수명관리, 원격감시, 원격제어 시스템을 먼저 만들어 나갈 것입니다.`,
        },
    ]
};

// case
export default function (state=initialState, action: any) {
    switch(action.type) {
        case UPDATE_NEWS:
            return {
                ...state,
                active_news_idx: action.news_idx,
            };
        case SHOW_NEWS:
            return {
                ...state,
                active_recent: action.active
            };
        default:
            return state;
    }
};