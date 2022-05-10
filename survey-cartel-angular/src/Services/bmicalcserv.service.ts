import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BmicalcservService {

  headers = new HttpHeaders({
    'x-rapidapi-host': 'mega-fitness-calculator1.p.rapidapi.com',
    'x-rapidapi-key': 'c28b36247emsh610ee76f6c4742dp18c50ejsn177f8d5fcb0b'
  });
  
  constructor(private http:HttpClient) { 
    
  }


  public calculateBmi(weight: any, height: any)
  {
    return this.http.get(`https://mega-fitness-calculator1.p.rapidapi.com/bmi?weight=${weight}&height=${height}`,{
      headers:this.headers
    });
  }
}
