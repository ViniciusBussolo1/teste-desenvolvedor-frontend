import { AuthProvider } from "./contexts/BularioPageContext";
import { RoutesMain } from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </div>
  );
}

export default App;

