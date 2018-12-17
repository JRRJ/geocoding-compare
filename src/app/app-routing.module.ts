import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UploadCsvComponent } from './upload-csv/upload-csv.component';

const routes: Routes = [
  { path: 'upload',      component: UploadCsvComponent },
  {
    path: '',
    redirectTo: 'upload',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
