import { Injectable } from '@angular/core';
import { AddView, ViewAddRequest, ViewResponse } from '../Models/Views';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AddIncident, IncidentsAddRequest, IncidentsResponse } from '../Models/Incidents';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {
  private readonly BaseUrl = 'http://localhost/4000/views'

  constructor(private http:HttpClient) { }
   Incidents:AddIncident[]=[{
    Id: '1',
    Image: 'https://example.com/image1.jpg',
    Location:'Nyali',
    Title: 'Sample Title 1',
    Description: 'visited malindi'
  }
    
  ]
  
  
  
  
  addIncident(newIncident:IncidentsAddRequest):Observable<IncidentsResponse> {
    return this.http.post<IncidentsResponse>(this.BaseUrl, newIncident);
  }
  getIncident(Id: string): Observable<AddView> {
    return this.http.get<AddIncident>(this.BaseUrl+Id);
  }
  getViews(): Observable<AddIncident[]> {
    return this.http.get<AddIncident[]>(this.BaseUrl);
  }

  updateIncident(updatedIncident: IncidentsAddRequest, Id: string): Observable<{ Message: string, Id: string }> {
    return this.http.put<{ Message: string, Id: string }>(this.BaseUrl+Id, updatedIncident);
  }

  deleteIncident(Id: string): Observable<{ Message: string }> {
    return this.http.delete<{ Message: string }>(this.BaseUrl+Id);
  }
}


