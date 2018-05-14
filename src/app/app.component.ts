import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { enableProdMode } from '@angular/core';
enableProdMode();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    title = 'Walking';
    restItems: any;
    restItemsUrl = 'http://localhost:3000/empleado/empleadomodel'//'https://public-api.wordpress.com/rest/v1.1/sites/vocon-it.com/posts';

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.getRestItems();
    }

    // Read all REST Items
    getRestItems(): void {
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
    }
}
