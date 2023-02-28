import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Transaccion } from 'src/app/Models/Transaccion';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-transaccion',
  templateUrl: './listar-transaccion.component.html',
  styleUrls: ['./listar-transaccion.component.sass']
})
export class ListarTransaccionComponent implements OnInit {

  Transaccions:Transaccion[]| undefined;
  constructor(private service:ServiceService ,private router:Router){ }

  ngOnInit(): void {
    
   
    this.service.getTransaccion().subscribe((resp: any) =>{
      console.log(resp)
      this.Transaccions= resp
   })
  }

}
