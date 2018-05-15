import { Component } from '@angular/core';

@Component({
  selector: 'mascota',
  // template: `<p>{{name}}</p>`,
  templateUrl: './mascota.component.html',
  styleUrls: ['./../app.component.css']
})

export class MascotaComponent {
  name = 'ole';
}
