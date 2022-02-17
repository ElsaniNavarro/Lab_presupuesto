import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pregutnas',
  templateUrl: './pregutnas.component.html',
  styleUrls: ['./pregutnas.component.css']
})
export class PregutnasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  registro(){
    alert('Gracias por tu suscripción');
  }
}
