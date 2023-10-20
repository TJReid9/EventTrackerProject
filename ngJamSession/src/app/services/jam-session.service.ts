import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JamSession } from '../models/jam-session';

@Injectable({
  providedIn: 'root'
})
export class JamSessionService {

  private url = environment.baseUrl + 'api/jams';

  constructor(
    private http: HttpClient
  ) { }

    index(): Observable<JamSession[]> {
      return this.http.get<JamSession[]>(this.url).pipe(
        catchError((err: any) => {
          console.log(err);
         return throwError(
           () => new Error('JamSessionService.index(): error retrieving Jam log: ' + err)
           );
         })
         );

    }

}
