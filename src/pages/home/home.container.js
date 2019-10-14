import React from 'react';

// components
import Home from './home';
import HomeStyledContainer from './home.styled';

class HomeContainer extends React.PureComponent {
    componentDidMount = () => {};

    render() {
        return (
            <HomeStyledContainer>
                <Home />
            </HomeStyledContainer>
        );
    }
}

export default HomeContainer;
