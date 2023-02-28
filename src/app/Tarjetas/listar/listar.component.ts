import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarjetas } from 'src/app/Models/Tarjetas';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.sass']
})
export class ListarComponent implements OnInit {

  Tarjetas:Tarjetas[]| undefined;
  constructor(private service:ServiceService ,private router:Router){ }

  ngOnInit(): void {
    
   
    this.service.getTarjetas().subscribe((resp: any) =>{
      console.log(resp)
      this.Tarjetas= resp
   })
  }

}
