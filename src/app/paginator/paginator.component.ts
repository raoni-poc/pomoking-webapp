import {Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Meta} from '../interfaces/Meta';
import {ActivatedRoute, Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Component({
    selector: 'app-paginator',
    templateUrl: './paginator.component.html',
    styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements OnInit{

    @Input() linkBase = '../';
    @Input() meta: Meta;
    @Output() isLoading = new EventEmitter();
    protected perPage: number;
    protected page: number;

    constructor(private activatedRoute: ActivatedRoute, private router: Router, private platformLocation: PlatformLocation) {
    }

    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.page = parseInt(params['page'], 10);
            this.perPage = parseInt(params['perPage'], 10);
        });
    }

    goToPage(pageNumber: number) {
        this.isLoading.emit(true);
        const url = this.linkBase + this.perPage + '/' + pageNumber;
        this.router.navigate([url]);
    }

    nextPage() {
        this.isLoading.emit(true);
        const url = this.linkBase + this.perPage + '/' + ++this.page;
        this.router.navigate([url]);
    }

    previousPage() {
        this.isLoading.emit(true);
        const url = this.linkBase + this.perPage + '/' + --this.page;
        this.router.navigate([url]);
    }
}
