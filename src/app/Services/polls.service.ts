import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddPoll, PollResponse, PollsAddRequest } from '../Models/polls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PollsService {
  private readonly BaseUrl = 'http://localhost/4000/views'

  constructor(private http:HttpClient) { }
   views:AddPoll[]=[{
    Id: '1',
   
    Title: 'Sample Title 1',
    Options: ['Option 1', 'Option 2', 'Option 3'],
    Description: 'visited malindi'
  }
    
  ]
  
  
  
  
  addPoll(newView:PollsAddRequest):Observable<PollResponse> {
    return this.http.post<PollResponse>(this.BaseUrl, newView);
  }
  getPoll(Id: string): Observable<AddPoll> {
    return this.http.get<AddPoll>(this.BaseUrl+Id);
  }
  getpolls(): Observable<AddPoll[]> {
    return this.http.get<AddPoll[]>(this.BaseUrl);
  }

  updatePoll(updatedPoll: PollsAddRequest, Id: string): Observable<{ Message: string, Id: string }> {
    return this.http.put<{ Message: string, Id: string }>(this.BaseUrl+Id, updatedPoll);
  }

  deletePoll(Id: string): Observable<{ Message: string }> {
    return this.http.delete<{ Message: string }>(this.BaseUrl+Id);
  }
}



 

