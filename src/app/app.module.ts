import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CKEditorModule } from 'ng2-ckeditor';
import { CkeditorToolComponent } from './ckeditor-tool/ckeditor-tool.component';
import { SafePipe } from './safe.pipe';

@NgModule({
  declarations: [AppComponent, CkeditorToolComponent, SafePipe],
  imports: [BrowserModule, AppRoutingModule, CKEditorModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
