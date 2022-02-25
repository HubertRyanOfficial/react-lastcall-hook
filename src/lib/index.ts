function useLastCall(
  ms: number,
  lastCallTime: number,
  functionToCall: () => void
): any {
  if (!ms || !lastCallTime || !functionToCall)
    throw "All proprety are required to useLastCall hook work";

  const NOW_DATE = new Date();
  const LAST_TIME_DATE = new Date(lastCallTime);

  const getSecondsDifference =
    (LAST_TIME_DATE.getTime() - NOW_DATE.getTime()) / 1000;
  const msToSeconds = ms / 1000;

  if (getSecondsDifference >= msToSeconds) {
    return functionToCall;
  }

  return () => null;
}

export { useLastCall };
