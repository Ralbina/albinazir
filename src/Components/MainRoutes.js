import React from "react";
import Home from "./Home/Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/Hello" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;
