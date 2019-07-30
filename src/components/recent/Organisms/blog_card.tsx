import React from 'react';

interface Props {
    title: string;
    date: string;
    contents: string;
    goDetail: Function;
}

const BlogCard:React.SFC<Props> = ({ title, date, contents, goDetail }) => (
    <div className='blog-card-wrapper' onClick={ () => { goDetail(); }}>
        <div className='blog-card-title'>
            <p>{ title }</p>
            <p>{ date }</p>
        </div>
        <div className='blog-card-body'>
            <p>{ contents.length >= 150 ? contents.slice(0, 100)+'...' : contents }</p>
        </div>
    </div>
);
export default BlogCard;