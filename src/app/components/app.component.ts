import { Response } from '@angular/http';
import { ItemService } from '../services/item.service';
import Item from '../models/item.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(

  ) { }


  itemList: Item[];
  editItems:Item[] = [];

  ngOnInit(): void {
  }


}




