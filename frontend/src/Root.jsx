import { Routes, Route } from "react-router-dom";
import App from "./App";
const Root = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/html" element={<App />} />
      <Route path="/html-css" element={<App />} />
      <Route path="/html-css-js" element={<App />} />
      <Route path="/react" element={<App />} />
    </Routes>
  );
};
export default Root;
