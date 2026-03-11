import { PageRoutes } from "./routes/PageRoutes"
import { AuthProvider } from "./contexts/useAuth"

function App() {
  return (
    <AuthProvider>
      <PageRoutes />
    </AuthProvider>
  )
}
export default App
