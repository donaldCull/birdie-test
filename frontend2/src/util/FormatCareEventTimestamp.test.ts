import FormatCareEventTimestamp from "./FormatCareEventTimestamp"

describe('FormatCareEventTimestamp', () => {
  test('should format a timestamp', () => {
    expect(FormatCareEventTimestamp('2019-05-11T17:07:15.489Z')).toEqual("Saturday, 11 May 2019 at 05:07 pm");
   })
 })