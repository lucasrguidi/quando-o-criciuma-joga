import React from 'react';

const Countdown = ({ nextMatchData }) => {
  const [timeLeft, setTimeLeft] = React.useState(calculateTimeLeft());

  function transformDate(nextMatchData) {
    const date = nextMatchData.data.slice(0, 5);
    const hour = nextMatchData.horario;
    const [dateString, timeString] = [date, hour];
    const [hours, minutes] = timeString.split(':');
    const [day, month] = dateString.split('/');
    const year = new Date().getFullYear();
    const formattedMatchDay = `${year}-${month}-${day}T${hours}:${minutes}:00`;
    let transformedMatchDay = new Date(formattedMatchDay);

    return transformedMatchDay;
  }

  function calculateTimeLeft() {
    const target = new Date(transformDate(nextMatchData));
    const currentDate = new Date();

    const timeDifference = target.getTime() - currentDate.getTime();

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60),
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <div className="flex gap-5 max-lg:gap-2">
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl max-lg:text-3xl">
            {timeLeft.days.toString().padStart(2, '0')}
          </span>
          <span className="text-base max-lg:text-sm">Dias</span>
        </div>
        <span className="flex items-center">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl max-lg:text-3xl">
            {timeLeft.hours.toString().padStart(2, '0')}
          </span>
          <span className="text-base max-lg:text-sm">Horas</span>
        </div>
        <span className="flex items-center">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl max-lg:text-3xl">
            {timeLeft.minutes.toString().padStart(2, '0')}
          </span>
          <span className="text-base max-lg:text-sm">Minutos</span>
        </div>
        <span className="flex items-center">:</span>
        <div className="flex flex-col items-center justify-center">
          <span className="text-4xl max-lg:text-3xl">
            {timeLeft.seconds.toString().padStart(2, '0')}
          </span>
          <span className="text-base max-lg:text-sm">Segundos</span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
