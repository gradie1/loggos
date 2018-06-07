import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContentImagesPage } from './content-images';

@NgModule({
  declarations: [
    ContentImagesPage,
  ],
  imports: [
    IonicPageModule.forChild(ContentImagesPage),
  ],
  exports: [
    ContentImagesPage
  ]
})
export class ContentImagesPageModule {}
