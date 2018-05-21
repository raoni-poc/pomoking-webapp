import {Component, Input, OnInit} from '@angular/core';
import {FormComponent} from '../../abstract-component/form/form.component';
import {Router} from '@angular/router';
import {Location} from '@angular/common';
import {BaseService} from '../../abstract-component/base.service';
import {CategoryService} from '../category.service';
import {Category} from '../category';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-category-form',
    templateUrl: './category-form.component.html',
    styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent extends FormComponent {
    viewUrl = './category/view/';
    @Input() title = 'Category';

    constructor(location: Location,
                service: CategoryService,
                router: Router) {
        super(location, service, router);
        this.entity = this.instanceEmptyEntity();
    }

    protected formatEntity(form: FormGroup): Category {
        const category = this.instanceEmptyEntity();
        if (form.value.category) {
            category.category = form.value.category;
        }
        if (this.entity.id) {
            category.id = this.entity.id;
        }
        return category;
    }

    instanceEmptyEntity(): Category {
        return {
            id: 0,
            category: '',
            created_at: '',
            updated_at: '',
            completed_at: '',
        };
    }

    protected makeForm(): FormGroup {
        return new FormGroup({
            'category': new FormControl(null, [Validators.required]),
        });
    }
}
