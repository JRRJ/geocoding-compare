import { Injectable } from '@angular/core';
import * as Papa from 'papaparse';

@Injectable({
  providedIn: 'root'
})
export class CsvReadService {
  constructor() {
  }

  public processCsv(csvFile: File) {
    const result = Papa.parse(csvFile, { header: true, complete: function(results, file) {
      console.log('Parsing complete:', results, file);
    }, skipEmptyLines: true });
  }
}
