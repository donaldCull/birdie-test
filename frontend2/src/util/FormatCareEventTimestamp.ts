export default function FormatCareEventTimestamp(eventTimestamp: string): string {
  const dtFormat = new Intl.DateTimeFormat('en-GB', {
    hour12: true,
    timeStyle: 'short',
    dateStyle: 'full',
  });
  let t = eventTimestamp.split(/[- : + T .]/);
  let numT = t.map(s => Number.parseInt(s));
  let d = new Date(Date.UTC(numT[0], numT[1]-1, numT[2], numT[3]-1, numT[4], numT[5]));
  return dtFormat.format(d)
}