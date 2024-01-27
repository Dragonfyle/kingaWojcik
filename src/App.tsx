import { GlobalStyles } from "./styles/GlobalStyles";
import Layout from "./components/Layout/Layout";
import { DeviceContextProvider } from "./components/DeviceContext/DeviceContext";

function App() {
  return (
    <>
      <DeviceContextProvider>
        <GlobalStyles />
        <Layout />
      </DeviceContextProvider>
    </>
  );
}

export default App;
