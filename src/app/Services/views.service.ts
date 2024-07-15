import { Injectable } from '@angular/core';
import { AddView, ViewAddRequest, ViewResponse } from '../Models/Views';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ViewsService {
  private readonly BaseUrl = 'http://localhost/4000/views'

  constructor(private http:HttpClient) { }
   views:AddView[]=[{
    Id: '1',
    Image: 'https://example.com/image1.jpg',
    Title: 'Sample Title 1',
    Description: 'visited malindi'
  }
    
  ]
  
  
  
  
  addView(newView:ViewAddRequest):Observable<ViewResponse> {
    return this.http.post<ViewResponse>(this.BaseUrl, newView);
  }
  getView(Id: string): Observable<AddView> {
    return this.http.get<AddView>(this.BaseUrl+Id);
  }
  getViews(): Observable<AddView[]> {
    return this.http.get<AddView[]>(this.BaseUrl);
  }

  updateView(updatedHotel: ViewAddRequest, Id: string): Observable<{ Message: string, Id: string }> {
    return this.http.put<{ Message: string, Id: string }>(this.BaseUrl+Id, updatedHotel);
  }

  deleteView(Id: string): Observable<{ Message: string }> {
    return this.http.delete<{ Message: string }>(this.BaseUrl+Id);
  }
}


