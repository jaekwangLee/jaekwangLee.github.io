import React from 'react';
import Subtitle from '../../components/common/subtitle';

interface Props {
    title: string;
    date: string;
    contents: string;
}

const BlogDetail: React.SFC<Props> = ({ title, date, contents }) => (
    <div className='blog-card-detail-wrapper'>
        <div className='detail-title'>
            <Subtitle subtitle={ title } />
            <Subtitle subtitle={ '<'+date+'>' } />
        </div>
        <div className='detail-contents'>
            {/* <Contents contents={ contents } /> */}
            <p>{ contents.split('\n').map(line => ( <span>{line}<br/></span>) )}</p>
        </div>
    </div>
);

export default BlogDetail;