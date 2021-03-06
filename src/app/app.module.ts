import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RestService} from "../services/rest.service";
import {CreateTicketFormComponent} from './components/create-ticket-form/create-ticket-form.component';
import {TicketsComponent} from './components/tickets/tickets.component';
import {TicketPageComponent} from './components/ticket-page/ticket-page.component';
import {HelpComponent} from './components/help/help.component';
import {ProfileComponent} from './components/profile/profile.component';
import {NotificationComponent} from "./components/notification/notification.component";
import {PopupComponent} from "./components/popup/popup.component";
import {RegisterComponent} from "./components/register/register.component";
import {DatePipe} from "@angular/common";
import {BasicAuthInterceptor} from "./helpers/basic-auth.interceptor";
import {ErrorInterceptor} from "./helpers/error.interceptor";
import {NgxSpinnerModule} from "ngx-spinner";
import {DataFieldComponent} from "./components/data-field/data-field.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {StatusFieldComponent} from './components/status-field/status-field.component';
import {MessageComponent} from './components/message/message.component';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';
import {AdminDataPipe} from './pipes/admin-data.pipe';
import {ToStringPipe} from './pipes/to-string.pipe';

import {FaIconLibrary, FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import {far} from '@fortawesome/free-regular-svg-icons';
import {AdminUtils} from "./common/admin.utils";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    CreateTicketFormComponent,
    TicketsComponent,
    TicketPageComponent,
    HelpComponent,
    ProfileComponent,
    NotificationComponent,
    PopupComponent,
    RegisterComponent,
    DataFieldComponent,
    StatusFieldComponent,
    MessageComponent,
    AdminPanelComponent,
    AdminDataPipe,
    ToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [
    RestService,
    DatePipe,
    AdminUtils,
    {provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private library: FaIconLibrary
  ) {
    library.addIconPacks(fas, far)
  }
}
