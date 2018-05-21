import { Component, OnInit } from '@angular/core';
import {AddComponent} from '../../abstract-component/add/add.component';
import {BaseService} from '../../abstract-component/base.service';
import {CategoryService} from '../category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent extends AddComponent{

    constructor(service: CategoryService) {
        super(service);
    }

}
