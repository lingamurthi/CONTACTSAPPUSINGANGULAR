import { ContactsService } from './contacts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, APP_ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { ContactsDeleteComponent } from './contacts-delete/contacts-delete.component';




@NgModule({
  declarations: [
    AppComponent,
    ContactsDetailComponent,
    ContactsListComponent,
    ContactsEditorComponent,
    ContactsCreatorComponent,
    ContactsDeleteComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
 
  providers: [ContactsService],
  bootstrap: [AppComponent],


 
})
export class AppModule { }
