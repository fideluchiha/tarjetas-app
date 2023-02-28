import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.sass']
})
export class AgregarComponent implements OnInit{

  tarjetaForm=  new FormGroup({

    idTipo: new FormControl(Validators.required),
    titular: new FormControl('',Validators.required),
    cedula: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    pan: new FormControl('',[Validators.maxLength(19),Validators.minLength(16),Validators.required]),
   
   
  });
  

  constructor(private service:ServiceService ,private router:Router){}

  ngOnInit(): void {
    
   
  
  }

  Guardar(){

    console.log('Form ->',this.tarjetaForm.value);
    this.service.createTarjetas(this.tarjetaForm.value).subscribe((res:any)=>{

     
      console.log(res.codigoRespuesta);
      if (res.codigoRespuesta=="00"){

        alert('se agrego');
        this.router.navigate(["listarTarjetas"]);

      }else{

        alert("Error "+res.mensaje);
      }
     
    },
    (error:any) => {
        console.log(error);
        console.log(error.Errors);
        
        console.log(error.Errors);
        alert( error.Errors );
    })
}
}
