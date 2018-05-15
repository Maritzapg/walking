import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { MascotaService } from './mascota/mascota.service';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Walking';
    mascotaList: any;
    mascota: any;

    constructor(private mascotaService: MascotaService) { }

    ngOnInit() {
        this.getMascotas();
        this.getMascota();
    }

  getMascotas() {
      this.mascotaService.getMascotas().subscribe(
      // the first argument is a function which runs on success
      data => { this.mascotaList = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('dataList', this.mascotaList)
    );
  }

  getMascota() {
    this.mascotaService.getMascotaById(1).subscribe(
      // the first argument is a function which runs on success
      data => { this.mascota = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('data', this.mascota)
    );
  }
    // Read all REST Items
    /*getRestItems(): void {
        this.restItemsServiceGetRestItems()
            .subscribe(
              restItems => {
                  this.restItems = restItems;
                  console.log(this.restItems);
              }
            )
    }

    // Rest Items Service: Read all REST Items
    restItemsServiceGetRestItems() {
        return this.http
            .get<any[]>(this.restItemsUrl)
            .pipe(map(data => data));
    }*/
}
