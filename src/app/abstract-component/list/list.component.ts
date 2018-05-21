import {Component, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {Entity} from '../entity';

export abstract class ListComponent {
    @Input() entities: Entity[];
    @Input() loading = true;
    abstract urlBase: string;
    abstract field: string;
    router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    viewButton(id: number) {
        this.router.navigate([this.urlBase + 'view/' + id]);
    }

    addButton() {
        this.router.navigate(['./category/new/']);
        // this.router.navigate([this.urlBase + 'new/']);
    }

    editButton(id: number) {
        this.router.navigate([this.urlBase + 'edit/' + id]);
    }

    deleteButton(id: number) {
        this.router.navigate([this.urlBase + 'delete/' + id]);
    }

}
