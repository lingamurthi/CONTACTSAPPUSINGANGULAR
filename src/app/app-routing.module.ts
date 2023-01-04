
import { ContactsCreatorComponent } from './contacts-creator/contacts-creator.component';
import { ContactsEditorComponent } from './contacts-editor/contacts-editor.component';
import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDeleteComponent } from './contacts-delete/contacts-delete.component';

const routes: Routes = [
  {path:'',component:ContactsListComponent},
  {path:'contact/new',component:ContactsCreatorComponent},
  {path:'contacts/:id',component:ContactsDetailComponent},
  {path:'contact/:id/edit', component:ContactsEditorComponent},
  {path:'contact/:id/delete',component:ContactsDeleteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const APP_ROUTES=[ContactsListComponent,ContactsDetailComponent,ContactsEditorComponent,ContactsCreatorComponent,ContactsDeleteComponent]