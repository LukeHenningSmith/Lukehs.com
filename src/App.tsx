import "./App.css";
import SkiTracks from "./components/SkiTracks";
import { ThemeProvider } from "./components/theme/theme-provider";
import { PageContainer } from "./components/layout/PageContainer";
import { Footer } from "./components/layout/Footer";
import Header from "./components/layout/Header";
import ScrollTop from "./components/layout/ScrollTopButton";

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <SkiTracks />

      <Header />

      <PageContainer />

      <ScrollTop />

      <Footer />
    </ThemeProvider>
  );
}

export default App;
