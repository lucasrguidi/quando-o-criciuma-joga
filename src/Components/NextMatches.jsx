import React from "react";
import { AiFillCalendar } from "react-icons/ai";
import { AiFillClockCircle } from "react-icons/ai";
import { MdStadium } from "react-icons/md";
import { Oval } from "react-loader-spinner";
import apiUrls from "../../api";
import useLogoSrc from "../Hooks/useLogo";

const NextMatches = ({ loading, setLoading }) => {
  const apiUrl = apiUrls.nextMatchesApiUrl;
  const logoSrc = useLogoSrc();
  const [nextMacthesData, setNextMatchesData] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    async function getNextMatchesData() {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setNextMatchesData(json);
      } catch (error) {
        return;
      } finally {
        setLoading(false);
      }
    }

    getNextMatchesData();
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

  if (nextMacthesData.length === 0) {
    return null;
  }

  return (
    <div className="overflow-y-scroll bg-slate-200 rounded-xl flex flex-col gap-4 p-4 shadow-lg w-full">
      {nextMacthesData.slice(1).map((match, index) => (
        <div
          key={match.data}
          className="bg-white rounded-2xl flex justify-between items-center w-full p-4 max-lg:gap-3"
        >
          <div className="w-1/4 flex justify-center items-center max-lg:w-1/5">
            <img
              className="w-32"
              src={logoSrc(match.time_mandante.nome)}
              referrerPolicy="no-referrer"
              title={match.time_mandante.nome}
            ></img>
          </div>
          <div className="w-2/4 flex flex-col justify-center items-center gap-1 max-lg:w-3/5">
            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <AiFillCalendar className="text-2xl max-lg:text-lg max-lg:text-center" />
              <span className="text-2xl max-lg:text-lg max-lg:text-center">
                {match.data}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <AiFillClockCircle className="text-xl max-lg:text-sm max-lg:text-center" />
              <span className="text-xl max-lg:text-sm max-lg:text-center">
                {match.horario}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <MdStadium className="text-xl max-lg:text-sm max-lg:text-center" />
              <span className="text-xl max-lg:text-sm max-lg:text-center">
                {match.estadio}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 max-lg:gap-1">
              <h5 className="text-base max-lg:text-xs max-lg:text-center">
                {match.campeonato}
              </h5>
            </div>
          </div>
          <div className="w-1/4 flex justify-center items-center max-lg:w-1/5">
            <img
              className="w-32"
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

export default NextMatches;
