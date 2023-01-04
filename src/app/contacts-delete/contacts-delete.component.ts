import { ActivatedRoute } from '@angular/router';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts-delete',
  templateUrl: './contacts-delete.component.html',
  styleUrls: ['./contacts-delete.component.css']
})
export class ContactsDeleteComponent implements OnInit {
msg:string|any
  constructor(private _cs:ContactsService,private route:ActivatedRoute ) {}

  ngOnInit(): void {
    this._cs.deleteContact(this.route.snapshot.paramMap.get('id')).subscribe(c=>this.msg=c)
  }

}
