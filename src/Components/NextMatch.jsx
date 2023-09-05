import React from "react";
import Countdown from "./Countdown";
import Teams from "./Teams";
import MatchDetails from "./MatchDetails";
import MatchDate from "./MatchDate";
import { Oval } from "react-loader-spinner";
import apiUrls from "../../api";

const NextMatch = () => {
  const apiUrl = apiUrls.nextMatchesApiUrl;
  const [nextMatchData, setNextMatchData] = React.useState(null);

  React.useEffect(() => {
    async function getNextMatchData() {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        setNextMatchData(json[0]);
      } catch (error) {
        return;
      }
    }

    getNextMatchData();
  }, []);

  if (!nextMatchData)
    return (
      <Oval
        color="#FACC15"
        secondaryColor="#FDE047"
        strokeWidth={3}
        height={150}
        width={150}
      />
    );
  if (nextMatchData)
    return (
      <div className="bg-white h-3/4 w-full flex flex-col justify-center gap-4 p-4 rounded-2xl max-lg:h-fit max-lg:gap-4 max-lg:p-8 max-lg:h-fit">
        <MatchDate nextMatchData={nextMatchData} />
        <Countdown nextMatchData={nextMatchData} />
        <Teams nextMatchData={nextMatchData} />
        <MatchDetails nextMatchData={nextMatchData} />
      </div>
    );
};

export default NextMatch;
