import {Component, OnInit} from '@angular/core';
import {ListComponent} from '../../abstract-component/list/list.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-category-list',
    templateUrl: '../../abstract-component/list/list.component.html',
    styleUrls: ['../../abstract-component/list/list.component.css']
})
export class CategoryListComponent extends ListComponent {
    urlBase = './category/';
    field = 'category';

    constructor(router: Router) {
        super(router);
    }
}
