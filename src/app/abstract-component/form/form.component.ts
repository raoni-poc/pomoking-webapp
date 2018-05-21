import {Component, Input, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Entity} from '../entity';
import {BaseService} from '../base.service';

export abstract class FormComponent implements OnInit {

    @Input() entity: Entity;
    form: FormGroup;
    protected abstract viewUrl: string;
    protected location: Location;
    protected service: BaseService;
    protected router: Router;

    constructor(location: Location,
                service: BaseService,
                router: Router) {
        this.location = location;
        this.service = service;
        this.router = router;
    }

    ngOnInit() {
        this.form = this.makeForm();
    }

    goBack(): void {
        this.location.back();
    }

    onSubmit() {
        const entity = this.formatEntity(this.form);
        if (this.entity.id) {
            this.editOnSubmit(entity);
        } else {
            this.addOnSubmit(entity);
        }
    }

    editOnSubmit(entity: Entity) {
        this.service.update(entity)
            .subscribe(() => this.goBack());
    }

    addOnSubmit(entity: Entity) {
        // console.log('entity: ');
        // console.log(entity);
        this.service.addNew(entity)
            .subscribe((t) => {
                setTimeout(() => {
                        this.router.navigateByUrl(this.viewUrl + t.id);
                    }, 5000);//TODO
            });
    }

    protected abstract formatEntity(form: FormGroup): Entity;

    protected abstract makeForm(): FormGroup;


}
