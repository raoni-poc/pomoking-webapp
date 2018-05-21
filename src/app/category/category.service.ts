import {Injectable} from '@angular/core';
import {BaseService} from '../abstract-component/base.service';
import {MessageService} from '../message/message.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {catchError, tap} from 'rxjs/operators';
import {Entity} from '../abstract-component/entity';
import {Container} from '../interfaces/Container';
import {Category} from './category';

@Injectable()
export class CategoryService extends BaseService {

    constructor(http: HttpClient,
                messageService: MessageService) {
        super(http, messageService);
        this.url = this.url + 'categories';
    }

    // getAll(pageNumber = 1, perPage = 10): Observable<Container> {
    //     return super.getAll(pageNumber, perPage);
    // }
    //
    getOne(id: number): Observable<Category> {
        return super.getOne(id);
    }
    //
    // destroy(id: number): Observable<Entity> {
    //     return super.destroy(id);
    // }
    //
    // update(entity: Category): Observable<Entity> {
    //    return super.update(entity);
    // }
    //
    // addNew(entity: Category): Observable<Entity> {
    //     return super.addNew(entity);
    // }
}
