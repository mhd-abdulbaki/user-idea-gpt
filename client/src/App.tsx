//@Third Party
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

//@Dev
//#Moudle
import { HomeModule } from "./module/home";
import { LayoutModule } from "./module/layout";

//@Provider
import { StoreProvider } from "./lib/provider";
import { ContentDetailsModule } from "./module/content";

export default function App() {
  return (
    <StoreProvider>
      <Router>
        <LayoutModule>
          <Routes>
            <Route path="/" element={<HomeModule />} />
            <Route path="/idea/:id" element={<ContentDetailsModule />} />
          </Routes>
        </LayoutModule>
        <Toaster position="top-center" />
      </Router>
    </StoreProvider>
  );
}
