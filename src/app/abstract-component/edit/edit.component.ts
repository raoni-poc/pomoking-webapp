import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BaseService} from '../base.service';
import {Entity} from '../entity';

export abstract class EditComponent implements OnInit {

    public entity: Entity;
    protected service: BaseService;
    protected activatedRoute: ActivatedRoute;

    constructor(service: BaseService,
                activatedRoute: ActivatedRoute) {
        this.service = service;
        this.activatedRoute = activatedRoute;
    }

    ngOnInit() {
        this.getOne();
    }

    getOne(): void {
        this.activatedRoute.params.subscribe(params => {
            this.service.getOne(parseInt(params['id'], 10))
                .subscribe(entity => {
                    this.entity = entity;
                });
        });
    }

}
