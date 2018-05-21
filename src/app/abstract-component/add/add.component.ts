import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Entity} from '../entity';
import {BaseService} from '../base.service';

export abstract class AddComponent {

    protected entity: Entity;
    protected service: BaseService;

    constructor(service: BaseService) {
        this.service = service;
    }

}
