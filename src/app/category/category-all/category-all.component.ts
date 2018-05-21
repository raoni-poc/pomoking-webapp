import {Component, OnInit} from '@angular/core';
import {AllComponent} from '../../abstract-component/all/all.component';
import {Entity} from '../../abstract-component/entity';
import {Category} from '../category';
import {BaseService} from '../../abstract-component/base.service';
import {ActivatedRoute} from '@angular/router';
import {CategoryService} from '../category.service';
import construct = Reflect.construct;

@Component({
    selector: 'app-category-all',
    templateUrl: './category-all.component.html',
    styleUrls: ['../../abstract-component/all/all.component.css']
})

export class CategoryAllComponent extends AllComponent {
    // service: CategoryService;
    public entities: Category[];
    title = 'All Categories';
    linkBase = 'category/all/';

    constructor(service: CategoryService,
                activatedRoute: ActivatedRoute) {
        super(service, activatedRoute);
    }

}
