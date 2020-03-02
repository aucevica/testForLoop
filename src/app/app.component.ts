import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  title = 'testForLoop';

count = 0;

products = ['product #1','product #2','product #3','product #4',]

ngOnInit() {
  console.log(this.count);
}

func(product: any){
  console.log ('Product =>',product,' COUNT =>', this.count++);
   
}



}
