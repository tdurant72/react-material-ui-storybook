
import './App.css';
import SideMenu from './components/SideMenu'
import styled from 'styled-components';
import MainContent from './components/MainContent'
import Section from './components/Section';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { colors } from './styles/ColorStyles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: colors.primary["500"],
      light: colors.primary["300"],
      dark: colors.primary["700"],
      contrastText: colors.primary["50"]
    },
    secondary: {
      main: colors.secondary["500"],
      light: colors.secondary["300"],
      dark: colors.secondary["700"],
      contrastText: colors.secondary["50"]
    },
  }
})

const AppWrapper = styled.div`
  display: grid;
  grid-template-columns:1fr 3fr;
  grid-gap: 10px;
`
function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <SideMenu panelColor="dark" title="My Side" titleColor="light" />
        <MainContent pageColor="light" titleColor="primary">
          {/* <Navbar title="My app" titleColor="dark" navBorder="primary" /> */}
          <Header />
          <Section title="Funding for a Secure Tomorrow" titleColor="primary" sectionColor="light">
            <p>Despite rising traffic and freight travel in our state, the funds available to maintain our transportation system have not kept pace due to shrinking gas tax and federal revenues. Our investment needs are outgrowing our current funding, and this gap gets worse every year. That's why we're launching a new program — PennDOT Pathways. Through this program, we'll analyze new future-focused sources of funding for our transportation system that could better serve our communities and all Pennsylvanians for the next generation.</p>
          </Section>
          <Section title="How Did We Get Here?" titleColor="dark" sectionColor="primary">
            <p>Many of Pennsylvania's highways and bridges are in need of replacement or rehabilitation. As of 2019, more than 2,500 bridges were rated in poor condition. The average bridge age is 50 years, and with a typical life span of approximately 75 years, this need is not going away anytime soon. Repairs are critical to maintain safety and our economy, and making these repairs on our critical interstate bridges has required diverting funds from regional projects.</p>
          </Section>
          <Section title="What Have We Done So Far?" titleColor="primary" sectionColor="light">
            <p>We've worked hard to make the most of our available funding and have found some ways to secure additional funding. For example, with the help of Act 44 and Act 89, we were able to generate revenue from the Pennsylvania Turnpike and gas taxes, allowing us to complete nearly 4,000 projects worth more than $10 billion since its passage in 2013. We have more than 500 projects underway worth more than $4.5 billion, and roughly 1,700 projects on our four or 12-year plans. While Act 89 was a significant achievement, it did not meet the needs identified at the time and those needs have grown over time.</p>
          </Section>
        </MainContent>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;
