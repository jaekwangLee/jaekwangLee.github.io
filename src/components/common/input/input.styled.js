import styled from 'styled-components';
import { gray } from '../../../styles/pallete';

export const InputStyledWrapper = styled.div`
    height: 40px;
    width: 100%;
    text-align: left;
    text-indent: 8px;
    vertical-align: center;
    border-bottom: 1px solid ${gray[2]};
    margin-right: 4px;
`;

export const Input = styled.input`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.11px;
    color: rgba(0, 0, 0, 0.7);
    width: 100%;
    height: 100%;
    border: 0px;
    font-weight: 600;
`;

export const TextareaWrapper = styled.div`
    width: 100%;
    height: 200px;
    text-align: left;
    text-indent: 8px;
    vertical-align: top;
    border: 1px solid ${gray[2]};
    margin-right: 4px;
`;

export const Textarea = styled.textarea`
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0.11px;
    color: rgba(0, 0, 0, 0.7);
    width: calc(100% - 12px);
    height: calc(100% - 12px);
    overflow: scroll;
    border: 0px;
    fontweight: 600;
`;
