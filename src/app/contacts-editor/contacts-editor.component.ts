import { Contact } from './../models/Contact';
import {Router, ActivatedRoute } from '@angular/router';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacts-editor',
  templateUrl: './contacts-editor.component.html',
  styleUrls: ['./contacts-editor.component.css']
})
export class ContactsEditorComponent implements OnInit {
  

displaymessage: string='';
con:Contact|any

 



  
  constructor(private _ser :ContactsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this._ser.getContact(this.route.snapshot.paramMap.get('id')).subscribe(c=>this.con=c)
  }

save(userRegForm: NgForm)
{
  
  console.log("QQQQQQQQQQQQQQQQQQQ",userRegForm.form.value);
  
  this._ser.updateContact(userRegForm.form.value).subscribe(c=>this.con=c)

  this.displaymessage="YOU UPDATED THE CONTACT SUCCESSFULLY"
}
}
