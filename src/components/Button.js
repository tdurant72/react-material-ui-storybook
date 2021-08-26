import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { colors } from '../styles/ColorStyles';

export const Button = ({ type, txt, bd, label, size, ...props }) => {
    return (
        <StyledButton type={type} txt={txt} bd={bd} size={size}>{label}</StyledButton>
    );
};

const StyledButton = styled.button`
        transition: all 0.2s ease-in-out;
        border-radius: 0.5rem;
        font-weight:500;
        cursor:pointer;
        margin: 0 5px;
        font-size:1rem;
        padding:0.5rem 1rem;

        font-size:${props => props.size === 'small' ? "0.875rem" : props.size === 'medium' ? "1rem" : "1.5rem"};
        background-color:${ props => props.type};
        color:${props => props.txt};
        border:${props => `2px solid ${props.bd}`};
        box-shadow:0px 2px 4px 0px ${colors.neutral["900"]};
        &:hover{
            filter:brightness(0.95);
            box-shadow:0px 5px 7px 0px ${colors.neutral["900"]};
            transform:translateY(-2px);
        }
`

Button.propTypes = {
    type: PropTypes.string,
    bd: PropTypes.string,
    txt: PropTypes.string,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: colors.primary["500"],
    bd: colors.primary["500"],
    txt: colors.primary["50"],
    size: 'medium',
    label: 'Button',
    onClick: undefined,
};
