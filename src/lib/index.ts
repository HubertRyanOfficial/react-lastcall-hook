import { useState, useEffect } from "react";

function useLastCall(ms: number, lastCallTime: number, functionToCall: any) {
  const [value, setValue] = useState(null);
  function verifyLastCall() {
    if (!ms || !lastCallTime || !functionToCall)
      throw "All proprety are required to useLastCall hook work";

    const NOW_DATE = new Date();
    const LAST_TIME_DATE = new Date(lastCallTime);

    const getSecondsDifference =
      (NOW_DATE.getTime() - LAST_TIME_DATE.getTime()) / 1000;
    const msToSeconds = ms / 1000;

    if (
      getSecondsDifference >= msToSeconds ||
      NOW_DATE.getTime() == LAST_TIME_DATE.getTime() ||
      getSecondsDifference < 1
    ) {
      setValue(functionToCall);
    }
  }

  useEffect(() => {
    verifyLastCall();
  }, []);

  return value;
}

export { useLastCall };
