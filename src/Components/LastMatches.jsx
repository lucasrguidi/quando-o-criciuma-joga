import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { Oval } from "react-loader-spinner";
import apiUrls from "../../api";
import useLogoSrc from "../Hooks/useLogo";

const LastMatches = ({ loading, setLoading }) => {
  const apiUrl = apiUrls.lastMatchesApiUrl;
  const logoSrc = useLogoSrc();
  const [lastMatchesData, setLastMatchesData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getLastMatchesData() {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setLastMatchesData(json);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }

    getLastMatchesData();
  }, []);

  if (loading === true)
    return (
      <div className="h-full flex justify-center items-center">
        <Oval
          color="#FACC15"
          secondaryColor="#FDE047"
          strokeWidth={3}
          height={150}
          width={150}
        />
      </div>
    );
  return (
    <div className="overflow-y-scroll bg-slate-200 rounded-xl flex flex-col gap-4 p-4 shadow-lg w-full">
      {lastMatchesData.map((match) => (
        <div
          key={match.data}
          className="bg-white rounded-2xl flex justify-between items-center w-full p-4 max-lg:gap-3"
        >
          <div className="w-1/4 flex justify-center items-center max-lg:w-1/5">
            <img
              className="w-32 small-h-matches-img"
              src={logoSrc(match.time_mandante.nome)}
              referrerPolicy="no-referrer"
              title={match.time_mandante.nome}
            ></img>
          </div>
          <div className="w-2/4 flex flex-col justify-center items-center gap-2 max-lg:w-3/5">
            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <AiFillCalendar className="text-2xl max-lg:text-lg max-lg:text-center" />
              <span className="text-2xl max-lg:text-lg max-lg:text-center">
                {match.data.slice(0, -6)}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <span className="text-4xl max-lg:text-2xl max-lg:text-center">
                {match.placar.replace("-", " - ")}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <h5 className="text-base max-lg:text-xs text-center whitespace-nowrap">
                {match.campeonato}
              </h5>
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center max-lg:w-1/5">
            <img
              className="w-32 small-h-matches-img"
              src={logoSrc(match.time_visitante.nome)}
              referrerPolicy="no-referrer"
              title={match.time_visitante.nome}
            ></img>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LastMatches;
