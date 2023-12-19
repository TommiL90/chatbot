
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Chatbot from './components/Chatbot'
import { Container } from './styles/styles'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Chatbot />
      </Container>
    </ThemeProvider>
  )
}

export default App
