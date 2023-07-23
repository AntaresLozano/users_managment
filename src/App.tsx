import { UsersContextProvider } from './context/usersContext';
import AppContent from './components/appContent/AppContent';
import { ThemeContextProvider } from './context/ThemeContext';

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
