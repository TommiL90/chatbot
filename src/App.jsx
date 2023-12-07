
import { ThemeProvider } from 'styled-components'
import SimpleForm from './components/Chatbot'
import { theme } from './styles/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SimpleForm />
    </ThemeProvider>
  )
}

export default App
