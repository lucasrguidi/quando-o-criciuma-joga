import React from "react";
import "./App.css";
import LastMatches from "./Components/LastMatches";
import NextMatch from "./Components/NextMatch";
import NextMatches from "./Components/NextMatches";
import Selector from "./Components/Selector";
import Tabela from "./Components/Tabela";
import Footer from "./Components/Footer";
import { Analytics } from "@vercel/analytics/react";

const NextMatchMemo = React.memo(({ loading, setLoading }) => (
  <NextMatch loading={loading} setLoading={setLoading} />
));

function App() {
  const [statsView, setStatsView] = React.useState("table");
  const [loading, setLoading] = React.useState(null);

  return (
    <>
      <Analytics mode={"production"} />;
      <div className="h-screen bg-yellow-400 max-lg:h-fit">
        <div
          className="container mx-auto flex max-lg:flex-col-reverse max-lg:justify-center max-lg:items-center max-lg:gap-12 max-lg:p-4"
          style={{ height: "95%" }}
        >
          <div className="w-1/2 h-full flex flex-col items-center justify-center p-4 max-lg:p-0 max-lg:w-full max-lg:h-full">
            <div className="bg-white h-full gap-4 flex flex-col max-h-[80%] w-full rounded-2xl items-center p-4  max-lg:gap-4 max-lg:w-100 max-lg:h-screen ">
              <Selector
                setStatsView={setStatsView}
                statsView={statsView}
              ></Selector>
              {statsView === "table" ? (
                <Tabela loading={loading} setLoading={setLoading} />
              ) : null}
              {statsView === "nextMatches" ? (
                <NextMatches loading={loading} setLoading={setLoading} />
              ) : null}
              {statsView === "lastMatches" ? (
                <LastMatches loading={loading} setLoading={setLoading} />
              ) : null}
            </div>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center p-4 max-lg:p-0 max-lg:w-full max-lg:h-full ">
            <NextMatchMemo />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
