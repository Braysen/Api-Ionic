import { Injectable } from '@angular/core';
import {Place} from './places.model'
//import {HttpClientModule} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  constructor() { }
  private places: Place[] = [
    {
      id: '1',
      title: 'Lima',
      imageURL: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_04.jpg',
      comments: ['Awesome Place', 'Wonderful experience']
    },
    {
      id: '2',
      title: 'Distrito Federal de México',
      imageURL: 'https://s03.s3c.es/imag/_v3/Evasion/640x450/df.jpg',
      comments: ['Awesome Place', 'Wonderful experience']
    },
    {
      id: '3',
      title: 'Ribiera Maya',
      imageURL: 'https://lifestyle.americaeconomia.com/sites/lifestyle.americaeconomia.com/files/styles/gallery_image/public/riviera_maya.jpg?itok=RNf3wciI',
      comments: ['Awesome Place', 'Wonderful experience']
    },
    {
      id: '4',
      title: 'Santiago de Chile',
      imageURL: 'https://onestep4ward.com/wp-content/uploads/2015/01/Sky-Costanera.jpg',
      comments: ['Awesome Place', 'Wonderful experience']
    },
    {
      id: '5',
      title: 'Hawaii',
      imageURL: 'https://www.msccruisesusa.com/-/media/global-contents/destinations/ports/hawaii/honolulu/cruise-to-honolulu-hawaii.jpg?bc=transparent&as=1&dmc=0&iar=0&mh=537&mw=806&sc=0&thn=0&udi=0&hash=C9A831672CBD727FE8927916BE296728',
      comments: ['Awesome Place', 'Wonderful experience']
    }
  ]
  getPlaces(){
    return [...this.places]
  }
  getPlace(placeId: string){
    return{
      ...this.places.find(place => {
        return place.id === placeId
      })
    }
  }
  /*getData(){
    return new Promise(resolve => {
      this.http.get('/').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      })
    })
  }*/
  addPlace(title: string, imageURL: string){
    this.places.push({
      title,
      imageURL,
      comments:[],
      id: this.places.length + 1 + ""
    });
  }
  deletePlace(placeId: string){
    this.places = this.places.filter(place => {
      return place.id !== placeId
    })
  }
}
