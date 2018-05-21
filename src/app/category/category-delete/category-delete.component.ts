import {Component, DoCheck, OnInit} from '@angular/core';
import {DeleteComponent} from '../../abstract-component/delete/delete.component';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {BaseService} from '../../abstract-component/base.service';
import {CategoryService} from '../category.service';
import {Category} from '../category';

@Component({
    selector: 'app-category-delete',
    templateUrl: '../../abstract-component/delete/delete.component.html',
    styleUrls: ['../../abstract-component/delete/delete.component.css']
})
export class CategoryDeleteComponent extends DeleteComponent {

    protected entity;
    entityTitle = 'Category';
    deleteConfirmation = '';
    service: CategoryService;
    goBackUrl = 'category/all/5/1';

    constructor(service: CategoryService,
                activatedRoute: ActivatedRoute,
                router: Router,
                location: Location) {
        super(service, activatedRoute, router, location);
    }

    getOne(): void {
        this.activatedRoute.params.subscribe(params => {
            this.service.getOne(parseInt(params['id'], 10))
                .subscribe(entity => {
                    this.entity = entity;
                    this.deleteConfirmation = entity.category;
                });
        });
    }

    private isCategory(){

    }


    // ngOnInit() {
    //     super.ngOnInit();
    //     console.log(this.entity);
    //
    // }


}
