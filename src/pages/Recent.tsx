import React from 'react';
import Wrapper from '../components/Common/block_wrapper';
import Title from '../components/Common/title';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateHorizontal, showDetailNews } from '../store/recent';

import Card from '../components/Recent/Organisms/blog_card';
import Detail from '../components/Recent/Molecules/blog_detail_card';

interface Props {
    news: Array<object|any>;
    news_idx: number;
    history: any;
    location: any;
    match: any;
    updateNews: Function;
    updateShowRecent: Function;
    active_recent: Boolean;
}

interface State {
    
}

class RecentlyNewsContainer extends React.PureComponent<Props, State> {
    render() {
        const actived = this.props.news[this.props.news_idx];
        return (
            <Wrapper id='recently'>
                <Title title='최근 소식' />
            {
                this.props.active_recent ?
                <Detail title={ actived.title } date={ actived.date } contents={ actived.contents} />
                : null
            }
                <div className='card-wrapper'>
                {
                    this.props.news.map((news:any, index) => (
                            <Card
                                key={ news.id.toString() }
                                goDetail={ () => { this.goDetail(index, news.id); }}
                                title={ news.title }
                                date={ news.date }
                                contents={ news.contents }
                            />
                        )
                    )
                }
                    <div className='clearfix' />
                </div>
            </Wrapper>
        );
    }

    componentDidMount = () => {
        const { pathname } = this.props.location;
        if (pathname.indexOf('recent') !== -1) {
            this.props.updateShowRecent(true);
        }
    }

    goDetail = (idx: number, id:string) => {
        this.props.updateNews(idx);
        this.props.history.push(`/recent/${ id }`);
    }

}

const mapStateToProps = ({ recentReducer }:any) => ({
    news_idx: recentReducer.active_news_idx,
    news: recentReducer.news,
    active_recent: recentReducer.active_recent,
});

const mapDiaptchToProps = (dispatch: any) => ({
    updateNews: (idx: any) => dispatch(updateHorizontal(idx)),
    updateShowRecent: (bool: any) => dispatch(showDetailNews(bool)),
});

export default withRouter(connect(mapStateToProps, mapDiaptchToProps)(RecentlyNewsContainer) as any);