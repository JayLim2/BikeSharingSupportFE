import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {RestService} from "./rest.service";
import {User} from "../app/models/user.model";
import {Ticket} from "../app/models/ticket.model";

@Injectable({
  providedIn: 'root'
})
export class TicketsService {

  private commonUrl: string = `api/tickets`;

  constructor(
    private restService: RestService
  ) {
  }

  public getByUser(user: User): Observable<Ticket[]> {
    return this.restService.get(`${this.commonUrl}/get/patient/${user.phone}`);
  }


  public getAll(): Observable<Ticket[]> {
    return this.restService.get(`${this.commonUrl}/get/all`);
  }

  public save(ticket: any): Observable<any> {
    return this.restService.put(`${this.commonUrl}/save`, ticket);
  }

  public delete(ticket: Ticket): Observable<any> {
    return this.restService.delete(`${this.commonUrl}/delete/${ticket.order.id}`);
  }

}
