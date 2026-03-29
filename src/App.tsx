import { BrowserRouter as Router } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AppLayout } from "./AppLayout";

function App() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Router>
        <AppLayout />
      </Router>
    </>
  );
}

export default App;
