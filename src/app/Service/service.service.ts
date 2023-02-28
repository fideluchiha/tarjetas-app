import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tarjetas } from '../Models/Tarjetas';
import { Transaccion } from '../Models/Transaccion';
 
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  url='http://127.0.0.1:8080/tarjetas'

  getTarjetas(){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get<Tarjetas[]>(this.url+"/all",{
      headers: header
    });
  }

  createTarjetas(form:any){

    
      let header = new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
        
      });
      return this.http.post(this.url+"/saveTarjetas",form,{
      headers: header
    });
  

  }


  urlTransaccion='http://127.0.0.1:8080/transaccion'

  getTransaccion(){

    let header = new HttpHeaders().set('Content-Type','application/json')
    return this.http.get<Transaccion[]>(this.urlTransaccion+"/all",{
      headers: header
    });
  }

  createTransaccion(form:any){

    
    let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
      
    });
    return this.http.post(this.urlTransaccion+"/saveTransaccion",form,{
    headers: header
  });
}

}
