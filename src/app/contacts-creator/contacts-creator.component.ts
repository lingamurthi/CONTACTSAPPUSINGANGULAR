import { FormControl, FormGroup, NgForm ,Validators,FormBuilder} from '@angular/forms';
import { Contact, Data } from './../models/Contact';
import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contacts-creator',
  templateUrl: './contacts-creator.component.html',
  styleUrls: ['./contacts-creator.component.css']
})
export class ContactsCreatorComponent implements OnInit {
  displaymessage=''
  
  address:FormGroup|any
  con: Contact|any ;
  cont:Contact|any



  userForm=this.fb.group({
    id:[''],
    name:['', [Validators.required,Validators.minLength(3)]],
    email:['',  [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    phone:[''],
    birthday:[''],
    website:[''],
    image:[''],
    address:this.fb.group({
      street:[''],
      zip:[''],
      city:[''],
      country:['']
    })

   
  })


  
  get userName()
  {
    return this.userForm.get('name');
  }


  get userEmail()
  {
    return this.userForm.get('email');
  }

  constructor(private _ser:ContactsService,private fb: FormBuilder) { 
    this.userForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(),
      email: new FormControl(),
      phone: new FormControl(),
      birthday: new FormControl(),
      website: new FormControl(),
      image: new FormControl(),
       address:new FormGroup({
        street:new FormControl(),
        zip:new FormControl(),
        city:new FormControl(),
        country:new FormControl()
       })
    });
  }



  ngOnInit(): void {
  }
  
  saveData()
  {  
 
   console.log("AAAAAAAAAAAAAAAAAAAA",this.userForm.value);
   this.cont=this.userForm.value
this._ser.addContact(this.cont).subscribe(c=>this.con=c)

this.displaymessage="YOU CREATED THE CONTACT SUCCESSFULLY"
  }
}
