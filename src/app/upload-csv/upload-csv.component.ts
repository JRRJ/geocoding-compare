import { Component, OnInit, ViewChild } from '@angular/core';
import { CsvReadService } from '../csv-read.service';

@Component({
  selector: 'app-upload-csv',
  templateUrl: './upload-csv.component.html',
  styleUrls: ['./upload-csv.component.scss']
})
export class UploadCsvComponent implements OnInit {
  @ViewChild('fileInput') fileInput;

  constructor(private csvReadService: CsvReadService) { }

  ngOnInit() {
  }

  onFileUpload(files: FileList) {
    const file: File = files.item(0);
    this.csvReadService.processCsv(file);
  }

}
