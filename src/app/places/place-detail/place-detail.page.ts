import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
/*import { Place } from '../places.model';
import { PlacesService } from '../places.service';*/
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {
  profileID: String;
  character;
  //constructor(private activatedRoute: ActivatedRoute, private placesService: PlacesService) { }
  constructor(private activatedRoute: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
    this.profileID = this.activatedRoute.snapshot.paramMap.get('id');
    this.http.get('https://web.ecoplaza.com.pe/api/rutabraysen/'+ this.profileID)
    .subscribe(res => {
      this.character = res;
      console.log(res);
      
    });
  }
}
