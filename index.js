// code your solution here
const record = [
    {year: "2024", result: "L"},
    {year: "2023", result: "L"},
    {year: "2022", result: "N/A"},
    {year: "2021", result: "L"},
    {year: "2020", result: "N/A"},
    {year: "2019", result: "N/A"},
    {year: "2018", result: "N/A"},
    {year: "2017", result: "N/A"},
    {year: "2016", result: "N/A"},
    {year: "2015", result: "W"},
    {year: "2014", result: "L"},
    {year: "2013", result: "N/A"},
    {year: "2012", result: "L"},
    {year: "2011", result: "L"},
    {year: "2010", result: "L"},
]

function superbowlWin(record){
    const winningRecord = record.find(item => item.result === 'W');
    return !winningRecord
        ? undefined
        : winningRecord.year
}
