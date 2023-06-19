import { useEffect, useState } from "react";
import SplashScreen from "./views/SplashScreen";



function App() {

  const [showSplash, setShowSplash] = useState(true);

useEffect(() => {
  // Simulate an asynchronous operation (e.g., loading data)
  setTimeout(() => {
    setShowSplash(false); // Hide the splash screen after a certain duration
  }, 3000); // Adjust the duration (in milliseconds) as needed
}, []);

  return (
    <div className="App">
      {
        showSplash ? <SplashScreen /> :   <iframe
        src="https://tesgpsterbaru.000webhostapp.com/"
        width="100%"
        style={{ height: '100vh' }}
        title="Web Page"
      />
      }
    
    </div>
  );
}

export default App;
