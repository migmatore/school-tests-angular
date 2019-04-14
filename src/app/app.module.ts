import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleDialog, TestDetailComponent } from './components/test-detail/test-detail.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatRadioModule } from '@angular/material';

@NgModule({
      declarations: [
          AppComponent,
          TestDetailComponent,
          ExampleDialog
      ],
      entryComponents: [
          ExampleDialog
      ],
      imports: [
          BrowserAnimationsModule,
          BrowserModule,
          FormsModule,

          MatRadioModule,
          MatButtonModule,
          MatDialogModule
      ],
      providers: [],
      bootstrap: [AppComponent]
})
export class AppModule { }
