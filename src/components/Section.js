import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H3 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';

const Section = ({ title, txtColor, titleColor, sectionColor, children, ...props }) => {
    return (
        <StyledSection sectionColor={sectionColor} txtColor={txtColor}>
            <SectionTitle titleColor={titleColor}>{title}</SectionTitle>
            {children}
        </StyledSection>
    )
}
const StyledSection = styled.div`
    background-color:${ props => props.sectionColor};
    color:${props => props.txtColor};
    padding:10px;
`;
const SectionTitle = styled(H3) `
text-align:center;
    color: ${ props => props.titleColor};
    margin: 10px;
`;


Section.propTypes = {
    sectionColor: PropTypes.string,
    titleColor: PropTypes.string,
    title: PropTypes.string,
    txtColor: PropTypes.string,
}
Section.defaultProps = {
    sectionColor: colors.neutral["50"],
    titleColor: colors.neutral["900"],
    title: '',
    txtColor: colors.neutral["900"],
}

export default Section;
