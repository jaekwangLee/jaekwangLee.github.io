import React from 'react';
import Highlighter from 'react-highlight-words';

interface Props {
    contents: string;
}

const contents: React.SFC<Props> = ({ contents }) => (
    <Highlighter
        autoEscape={true}
        caseSensitive={true}
        unhighlightClassName='common-contents'
        highlightClassName='common-contents'
        highlightStyle={{ color: "#546E7A" , backgroundColor: 'white', fontWeight: 'bold' }}
        sanitize={(text: string) => text}
        searchWords={[
            "Javascript, react-native, react.js, node.js, aws", "react-native를 활용", "공투공", "앱을 론칭", "소프트웨어공학을 전공", "스타트업에 취업해 실무 경력", "Typescript, Redux 등에 관심",
            "주력 언어는 javascript(es6+)", "react, react native 환경 위에서 개발하는데 능숙", "새로운 언어를 익히기도", "aws의 프리티어를 활용"
        ]}
        textToHighlight={ contents }
        unhighlightStyle={{ color: "#616161" }}
    />
);

export default contents;