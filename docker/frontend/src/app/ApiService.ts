import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {
    constructor(private http: HttpClient){}
    
    getBooks(): Observable<any[]> {
        return this.http.get<any[]>('http://localhost:4000/books');
    }
}