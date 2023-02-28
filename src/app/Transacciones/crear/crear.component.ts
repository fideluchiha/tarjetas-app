import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.sass']
})
export class CrearComponent implements OnInit{

  transaccionForm=  new FormGroup({

    identificador: new FormControl('',Validators.required),
    referencia: new FormControl('',Validators.required),
    compra: new FormControl('',Validators.required),
    direccion: new FormControl('',Validators.required)
   
   
  });
  

  constructor(private service:ServiceService ,private router:Router){}

  ngOnInit(): void {
    
   
  
  }

  Guardartransaccion(){

    console.log('Form ->',this.transaccionForm.value);
    this.service.createTransaccion(this.transaccionForm.value).subscribe((res:any)=>{

     
      console.log(res.codigoRespuesta);
      if (res.codigoRespuesta=="00"){

        alert('se agrego');
        this.router.navigate(["listarTransaccion"]);

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
