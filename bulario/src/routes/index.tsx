import { Routes, Route } from "react-router-dom";
import { SearchPage } from "../pages/SearchPage";


export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<SearchPage />} />
  </Routes>
);
