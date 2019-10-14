import styled from 'styled-components';
import { gray } from '../../styles/pallete';

const PostStyleWrapper = styled.div`
    background: ${gray[3]};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PostStyledBlock = styled.div`
    background: white;
    width: 430px;
    box-shadow: 1px 5px 12px ${gray[3]};
    padding: 16px;
`;

export default PostStyleWrapper;
