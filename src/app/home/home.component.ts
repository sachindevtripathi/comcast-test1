import {Component, OnInit} from '@angular/core';

import { CommonService } from '../services/common.service';
import { SorterPipe } from '../pipes/sorter.pipe';

@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

  private mydata: any[] = [];
  
  private nameAsc : SortObj ;
  private categoryAsc : SortObj ;
  private amountAsc : SortObj;

  private sorter: SortObj ;

  constructor( private commonService: CommonService) {
    
  }

  ngOnInit(){
    this.nameAsc    =    { sortField: "name",      sortAsc: true};
    this.categoryAsc =    { sortField: "category",  sortAsc: true};
    this.amountAsc   =    { sortField: "amount",    sortAsc: true};
    this.sorter = { sortField: "name", sortAsc: true};
    
    this.loadData();
  }

  loadData(){

    this.commonService.getData()
      .subscribe( (res : any) => {
        this.mydata = res;
        console.log( res);
      })
  } 

  private doSort( field:string, sorter: SortObj){
   // sorter.sortAsc = sorter.sortAsc?;
    this.sorter = {sortField: sorter.sortField, sortAsc: !sorter.sortAsc};
    console.log("field: "+ field);
  }

}

interface SortObj {
  sortField: string;
  sortAsc : boolean
}
