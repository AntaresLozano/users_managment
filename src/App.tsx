import { UsersContextProvider } from './context/usersContext';
import { ThemeContextProvider } from './context/ThemeContext';
import AppContent from './components/appContent/AppContent';

function App() {

  return (
    <>
      <ThemeContextProvider>
        <UsersContextProvider>
          <AppContent />
        </UsersContextProvider>
      </ThemeContextProvider>
    </>
  )
}

export default App
