import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { AuthService } from './services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './components/app.component';
import { TaskComponent } from './components/task/task.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule, Routes } from '@angular/router';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { HttpModule } from '@angular/http';
import { ContactComponent } from './components/contact/contact.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes =  [
  {path: 'login', component: TaskComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [

    AppComponent,
    TaskComponent,
    NavbarComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()

  ],
  providers: [
    ItemService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
