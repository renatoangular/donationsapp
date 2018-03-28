import { Response } from '@angular/http';
import { ItemService } from '../../services/item.service';
import Item from '../../models/item.model';
import { Component, OnInit } from '@angular/core';
import { Country } from './Country';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  constructor(
    private itemService: ItemService
  ) { }

  public newItem: Item = new Item();

  itemsList: Item[];
  editItems: Item[] = [];
  selectedCountry: Country = new Country(1, 'In Warehouse');

  countries = [
    new Country(1, 'In warehouse'),
    new Country(2, 'Donated')
  ];

  onSelect(statusId) {
    this.selectedCountry = null;
    for (let i = 0; i < this.countries.length; i++) {
      if (this.countries[i].id === statusId) {
        this.selectedCountry = this.countries[i];
      }
    }
  }

  ngOnInit(): void {
    this.itemService.getItems()
      .subscribe(items => {
        this.itemsList = items;
        console.log(items);
      });
  }

  status_New(status: any): void {

    this.newItem.item_Status = status;
  }
  create() {
    this.itemService.createItem(this.newItem)
      .subscribe((res) => {
        console.log(res.data);
        this.itemsList.push(res.data);
        this.newItem = new Item();
      });
  }

  editItem(item: Item) {
    console.log(item);
    if (this.itemsList.includes(item)) {
      if (!this.editItems.includes(item)) {
        this.editItems.push(item);
      } else {
        this.editItems.splice(this.editItems.indexOf(item), 1);
        this.itemService.editItem(item).subscribe(res => {
          console.log('Update Succesful');
        }, err => {
          this.editItem(item);
          console.error('Update Unsuccesful');
        });
      }
    }
  }

  doneItem(item: Item) {
    item.item_Status = 'Donated!';
    this.itemService.editItem(item).subscribe(res => {
      console.log('Update Succesful');
    }, err => {
      this.editItem(item);
      console.error('Update Unsuccesful');
    });
  }

  submitItem(event, item: Item) {
    if (event.keyCode === 13) {
      this.editItem(item);
    }
  }

  deleteItem(item: Item) {
    console.log(item);
    this.itemService.deleteItem(item._id).subscribe(res => {
      this.itemsList.splice(this.itemsList.indexOf(item), 1);
    });
  }



}
