import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserNameComponent } from './component/user-name/user-name.component';
import { PrimaryButtonComponent } from './component/primary-button/primary-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserNameComponent,
    PrimaryButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
