import {Component, OnChanges, OnInit} from '@angular/core';
import {Links} from '../../interfaces/Links';
import {Meta} from '../../interfaces/Meta';
import {ActivatedRoute} from '@angular/router';
import {Entity} from '../entity';
import {BaseService} from '../base.service';

export abstract class AllComponent implements OnInit {

    public entities: Entity[];
    public links: Links;
    public meta: Meta;
    public isLoading = true;
    abstract title: string;
    abstract linkBase: string;
    activatedRoute: ActivatedRoute;
    service: BaseService;

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
            this.service.getAll(parseInt(params['page'], 10), parseInt(params['perPage'], 10))
                .subscribe(container => {
                    this.entities = container.data;
                    this.links = container.links;
                    this.meta = container.meta;
                    this.isLoading = false;
                });
        });

    }

    isLoadingChange(isLoading) {
        this.isLoading = isLoading;
    }

    changeIsLoading() {
        this.isLoading = !this.isLoading;
    }

}
