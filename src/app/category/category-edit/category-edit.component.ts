import {Component, OnInit} from '@angular/core';
import {EditComponent} from '../../abstract-component/edit/edit.component';
import {BaseService} from '../../abstract-component/base.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';

@Component({
    selector: 'app-category-edit',
    templateUrl: './category-edit.component.html',
    styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent extends EditComponent {

    constructor(service: CategoryService,
                activatedRoute: ActivatedRoute) {
        super(service, activatedRoute);
    }


}
