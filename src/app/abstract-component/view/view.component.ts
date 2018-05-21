import {OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseService} from '../base.service';
import {Entity} from '../entity';

export abstract class ViewComponent implements OnInit {

    public entity: Entity;
    protected abstract urlBase: string;
    abstract viewTitle: string;
    protected service: BaseService;
    protected activatedRoute: ActivatedRoute;
    protected router: Router;

    constructor(service: BaseService,
                activatedRoute: ActivatedRoute,
                router: Router) {
        this.service = service;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.entity = this.instanceEmptyEntity();
    }

    ngOnInit() {
        this.get();
    }

    get(): void {
        this.activatedRoute.params.subscribe(params => {
            this.service.getOne(parseInt(params['id'], 10))
                .subscribe(entity => {
                    this.entity = entity;
                });
        });
    }

    addButton() {
        this.router.navigate([this.urlBase + 'new/']);
    }

    editButton(id: number) {
        this.router.navigate([this.urlBase + 'edit/' + id]);
    }

    deleteButton(id: number) {
        this.router.navigate([this.urlBase + 'delete/' + id]);
    }
    
    abstract viewTemplateData(): any[];

    abstract instanceEmptyEntity(): Entity;
}
