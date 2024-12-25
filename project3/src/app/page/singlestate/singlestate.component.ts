import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';


@Component({
  selector: 'app-singlestate',
  imports: [],
  templateUrl: './singlestate.component.html',
  styleUrl: './singlestate.component.scss'
})
export class SinglestateComponent {
  constructor(public activated:ActivatedRoute,public api:ApiService){}

  // api :any
  data:any
  
    ngOnInit(){
      let id=this.activated.snapshot.paramMap.get('id');
      this.data=this.api.getStatesByID(id);
    }
  

}

