import { Component } from '@angular/core';

declare var firebase:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  
  foodType : String = "carbo"
  foodName : String = ""

  constructor() {
  }

  ngOnInit(){
  }

  ngAfterViewInit(){
  }

  addFood(){
    console.log(this.foodType+' '+this.foodName);
    const foodRef = firebase.database().ref(this.foodType+'/');
    const newRef = foodRef.push();
      newRef.set({
        name: this.foodName
      });
    alert('Your request has been sent.');
    this.foodName = '';
  }
    
}
