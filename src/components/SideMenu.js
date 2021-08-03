import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types'
// import { styled, makeStyles } from '@material-ui/core/styles';
import { Container, Typography } from '@material-ui/core';
import { colors } from '../styles/ColorStyles';
import { H3 } from '../styles/TextStyles';


function SideMenu({ title, titleColor, panelColor, ...props }) {
    return (
        <StyledSide panelColor={panelColor}>
            <SidemenuTitle titleColor={titleColor}>{title}</SidemenuTitle>
        </StyledSide>
    )
}

const StyledSide = styled.div`
    /* left: 0; */
    
    min-width: 320px;
    /* position: absolute; */
    height: 100vh;
    border-right:2px solid ${colors.neutral["900"]};
    background-color:${ props => props.panelColor === 'primary' ? colors.primary["500"] : props.panelColor === 'secondary' ? colors.secondary["500"] : props.panelColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
    box-shadow: 4px 0px 6px 0px rgb(0 6 30 / 25%);
`;

const SidemenuTitle = styled(H3) `
    color: ${ props => props.titleColor === 'primary' ? colors.primary["500"] : props.titleColor === 'secondary' ? colors.secondary["500"] : props.titleColor === 'light' ? colors.neutral["50"] : colors.neutral["900"]};
    margin: 10px;
`;

SideMenu.propTypes = {
    panelColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
    title: PropTypes.string,
    titleColor: PropTypes.oneOf(['light', 'dark', 'primary', 'secondary']),
}
SideMenu.defaultProps = {
    panelColor: 'light',
    title: 'Sidemenu',
    titleColor: 'primary'
}

export default SideMenu

