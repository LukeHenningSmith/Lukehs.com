import "./App.css";
import SkiTracks from "./components/SkiTracks";
import { ThemeProvider } from "./components/theme/theme-provider";
import { PageContainer } from "./components/layout/PageContainer";
import { Footer } from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="flex flex-col min-h-screen">
        <SkiTracks />

        <Header />

        <PageContainer />

        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
