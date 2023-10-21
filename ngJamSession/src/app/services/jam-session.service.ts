import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JamSession } from '../models/jam-session';

@Injectable({
  providedIn: 'root',
})
export class JamSessionService {
  private url = environment.baseUrl + 'api/jams';

  constructor(private http: HttpClient) {}

  index(): Observable<JamSession[]> {
    return this.http.get<JamSession[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'JamSessionService.index(): error retrieving Jam log: ' + err
            )
        );
      })
    );
  }

  show(jamId: number): Observable<JamSession> {
    return this.http.get<JamSession>(this.url + '/' + jamId).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'JamSessionService.show(): error retrieving JamSession: ' + err
            )
        );
      })
    );
  }

  create(newJam: JamSession): Observable<JamSession> {
    newJam.description = '';
    return this.http.post<JamSession>(this.url, newJam).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error('TodoService.create(): error creating new Todo: ' + err)
        );
      })
    );
  }

  update(jam: JamSession): Observable<JamSession> {
    return this.http.put<JamSession>(this.url + '/' + jam.id, jam).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'JamSessionService.update(): error updating Jam Session: ' + err
            )
        );
      })
    );
  }

  destroy(id: number): Observable<void> {
    console.log(id);
    // return this.http.delete<void>(this.url + "/" + id).pipe(
    return this.http.delete<void>(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () =>
            new Error(
              'JamSessionService.destroy(): error deleting Jam Session: ' + err
            )
        );
      })
    );
  }

}
