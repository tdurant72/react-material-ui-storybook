import React, { Children } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import { H2 } from '../styles/TextStyles';
import { colors } from '../styles/ColorStyles';


function MainContent({ title, titleColor, pageColor, children, ...props }) {
    return (
        <StyledPage pageColor={pageColor}>
            <PageTitle titleColor={titleColor}>{title}</PageTitle>{children}
        </StyledPage>
    )
}

const StyledPage = styled.div`
    width:100%;
    margin:0;
    padding:0;
    background-color:${ props => props.pageColor};
`;
const PageTitle = styled(H2) `
text-align:center;
    color: ${ props => props.titleColor};
`;

MainContent.propTypes = {
    pageColor: PropTypes.string,
    title: PropTypes.string,
    titleColor: PropTypes.string,
}
MainContent.defaultProps = {
    pageColor: colors.neutral["50"],
    title: '',
    titleColor: colors.neutral["900"]
}
export default MainContent;

