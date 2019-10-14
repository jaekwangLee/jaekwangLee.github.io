import React from 'react';

// styled
import { InputStyledWrapper, Input, TextareaWrapper, Textarea } from './input.styled';

export const CustomInput = ({ labelConfig, inputConfing }) => (
    <InputStyledWrapper>
        <label {...labelConfig} />
        <Input {...inputConfing} />
    </InputStyledWrapper>
);

export const CustomInputToText = ({ value, style, valueConfing }) => (
    <InputStyledWrapper style={style}>
        <p {...valueConfing}>{value}</p>
    </InputStyledWrapper>
);

export const CustomTextarea = ({ labelConfig, textConfig }) => (
    <TextareaWrapper>
        <label {...labelConfig} />
        <Textarea {...textConfig} />
    </TextareaWrapper>
);
