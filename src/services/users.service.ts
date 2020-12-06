import { Injectable } from '@angular/core';
import {RestService} from "./rest.service";
import {Observable} from "rxjs";
import {User} from "../app/models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private commonUrl: string = `api/users`;

  constructor(
    private restService: RestService
  ) { }

  getSupport(): Observable<User[]> {
    return this.restService.get(`${this.commonUrl}/get/all/support`);
  }

}
