import {Component, OnInit} from '@angular/core';
import {ViewComponent} from '../../abstract-component/view/view.component';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseService} from '../../abstract-component/base.service';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {CarbonDate} from '../../interfaces/CarbonDate';

@Component({
    selector: 'app-category-view',
    templateUrl: '../../abstract-component/view/view.component.html',
    styleUrls: ['./category-view.component.css']
})
export class CategoryViewComponent extends ViewComponent {
    urlBase = './category/';
    viewTitle = 'Category View';
    entity: Category;

    constructor(service: CategoryService,
                activatedRoute: ActivatedRoute,
                router: Router) {
        super(service, activatedRoute, router);

    }

    instanceEmptyEntity(): Category {
        return {
            category: '',
            id: 0,
            created_at: '',
            updated_at: '',
            completed_at: '',
        };
    }

    viewTemplateData() {
        const templateData = [];
        templateData[0] = this.entity.category;
        return templateData;
    }
}
