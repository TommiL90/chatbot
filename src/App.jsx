
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Chatbot from './components/Chatbot'


function App() {
  return (
    <ThemeProvider theme={theme}>s
      <Chatbot />
    </ThemeProvider>
  )
}

export default App
