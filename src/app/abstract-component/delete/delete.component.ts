import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {BaseService} from '../base.service';
import {Entity} from '../entity';

export abstract class DeleteComponent implements OnInit {
    protected entity: Entity;
    abstract entityTitle = '';
    abstract deleteConfirmation = '';
    protected service: BaseService;
    protected activatedRoute: ActivatedRoute;
    protected router: Router;
    protected location: Location;
    protected abstract goBackUrl = '';

    constructor(service: BaseService,
                activatedRoute: ActivatedRoute,
                router: Router,
                location: Location) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.location = location;
    }

    ngOnInit() {
        this.getOne();
    }

    goBack(): void {
        this.location.back();
    }

    getOne(): void {
        this.activatedRoute.params.subscribe(params => {
            this.service.getOne(parseInt(params['id'], 10))
                .subscribe(entity => {
                    this.entity = entity;
                    console.log(this.entity);
                });
        });
    }

    deleteEntity(): void {
        this.activatedRoute.params.subscribe(params => {
            this.service.destroy(parseInt(params['id'], 10))
                .subscribe(result => {
                    this.router.navigateByUrl(this.goBackUrl);
                });
        });
    }

}
