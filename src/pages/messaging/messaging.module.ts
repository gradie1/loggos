import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagingPage } from './messaging';

@NgModule({
  declarations: [
    MessagingPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagingPage),
  ],
  exports: [
    MessagingPage
  ]
})
export class MessagingPageModule {}
