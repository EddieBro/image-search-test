import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

let params = new HttpParams()
  .set('key', '17959661-5566f7ce2ab71e0ea3ee20df0')
  .set('image_type', 'photo')
  .set('pretty', 'true');

@Injectable({
  providedIn: 'root'
})
export class ImageSearchService {
  constructor(
    private http: HttpClient) {
  }
  public getImages(term): Observable<any> {
    params = params.append('q', term);
    return this.http.get(environment.imageSearch.apiUrl, {params});
  }
}