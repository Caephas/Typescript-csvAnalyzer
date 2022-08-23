import { CsvFileReader } from "./CsvFileReader";
import { MatchResult } from "./MatchResults";
import { dateStringToDate } from "./utils";


export class MatcheReader extends CsvFileReader{
    mapRow(row: string[]): [Date, string, string, number, number, MatchResult, string] {
        (row: string[]): MatchData{
            return [
                dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,  //can be 'H'  or 'A' or 'D'
                row[6]
            ]
        }
    }
}