import { Component, OnInit } from '@angular/core';
//import {PlacesService} from './places.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {
  //places = []
  data = []
  //constructor(private placeService: PlacesService, private http: HttpClient) { }
  constructor(private http: HttpClient) { }
  ngOnInit() {
    //this.places = this.placeService.getPlaces()
    //this.http.get<any>('https://rickandmortyapi.com/api/character')
    this.http.get<any>('https://web.ecoplaza.com.pe/api/rutabraysen')
    .subscribe(res => {
      /*console.log('Se accedio a la data del API!');
      this.data = res.results;
      console.log(this.data);*/
      //console.log(res);
      console.log('Se accedio a la data del API!');
      console.log(res);
      this.data = res;
    })
  }

}
