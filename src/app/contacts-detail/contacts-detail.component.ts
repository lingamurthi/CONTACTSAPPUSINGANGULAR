import { Observable } from 'rxjs';
import { Contact } from './../models/Contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit{


  contact:Contact|any
  constructor(private contactsService:ContactsService,
    private route:ActivatedRoute) 
    {

     }


     
     ngOnInit()
     {
     this.contactsService.getContact(this.route.snapshot.paramMap.get('id')).subscribe(c=>this.contact=c)
    
     }
 
}
