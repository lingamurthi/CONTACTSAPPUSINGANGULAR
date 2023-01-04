import { Contact } from './models/Contact';
import { CONTACT_DATA } from './data/contact-data';
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})



export class ContactsService {

  private _url:string="./assets/data/ee.json"
  
  private API_ENDPOINT = 'http://localhost:3000/mypost'
  private API_ENDPOINT2 = 'http://localhost:3000'
  constructor(private http:HttpClient) { }



  // getContacts()
  // {
  //   return CONTACT_DATA
  // }
  
  getContacts():Observable<Contact[]>
  {
   // return this.http.get<Contact[]>(this.API_ENDPOINT)
    return this.http.get<Contact[]>("http://localhost:8080/api/users")
  }

// getContact(id:any)
// {
//  return this.getContacts().find(contact=>String(contact.id)===id)
// }
// }


getContact(id:any):Observable<Contact>
{
return this.http.get<Contact>(`http://localhost:8080/api/user/${id}`)
}

updateContact(contact:Contact):Observable<Contact>
{
const url=`http://localhost:8080/api/update/${contact.id}`
return this.http.put<Contact>(url,contact)
}




search(s:string)
{
const searchUrl=`http://localhost:3000/mypost?id=${s.trim()}`
console.log(searchUrl);

return this.http.get<Contact[]>(searchUrl)
}


addContact(contact: Contact):Observable<Contact>
  {
    const urll="http://localhost:8080/api/user"
    return this.http.post<Contact>(urll,contact)
  }

  deleteContact(id:any)
  {
       return this.http.delete(`http://localhost:8080/api/delete/${id}`)
  }
}