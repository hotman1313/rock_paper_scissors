import { Routes, Route, useLocation } from "react-router-dom";
import {Home} from "./views/home";
import { Game } from "./views/game";

export function Main() {
  return (
    <Routes>
      <Route path="pfc/" element={<Home />} />
      <Route path="pfc/game" element={<Game />} />
    </Routes>
  );
}
