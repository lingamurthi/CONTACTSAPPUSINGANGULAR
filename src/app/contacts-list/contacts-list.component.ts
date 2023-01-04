import { debounceTime, distinctUntilChanged, Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Contact } from './../models/Contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{

  private terms$= new Subject<string>()
  

  constructor(private _cs:ContactsService,private route:ActivatedRoute)
  {

  }


  contacts:Observable<Array<Contact>>=this._cs.getContacts()
  // ngOnInit()
  // {
  //   this._cs.getContacts().subscribe(c=>this.contacts=c);
  // }

 


  //contacts: Array<Contact> = CONTACT_DATA
  //title = 'ContactsAppComponent';
s=''

  sear(event:any)
  {
this.s=event.target.value
console.log(this.s);

this.contacts=this._cs.search(this.s)
  }


  ngOnInit(){
      this.terms$.pipe(
        debounceTime(400),
        distinctUntilChanged()
      ).subscribe(term=>this.sear(term))



      
  }
  
}
