import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {Container} from '../interfaces/Container';
import {Entity} from './entity';
import {MessageService} from '../message/message.service';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export abstract class BaseService {

    protected url = 'http://localhost:8000/api/v1/';
    http: HttpClient;
    messageService: MessageService;

    constructor(http: HttpClient,
                messageService: MessageService) {
        this.http = http;
        this.messageService = messageService;
    }

    getAll(pageNumber = 1, perPage = 10): Observable<Container> {
        const url = this.url + '?page=' + pageNumber + '&&per_page=' + perPage;
        return this.http.get<any>(url)
            .pipe(
                tap(tasks => this.log(`fetched`)),
                catchError(this.handleError('getAll', []))
            );
    }

    getOne(id: number): Observable<any> {
        const url = this.url + '/' + id;
        return this.http.get<any>(url)
            .pipe(
                tap(entity => this.log(`fetched`)),
                catchError(this.handleError('get', []))
            );
    }

    destroy(id: number): Observable<Entity> {
        const url = this.url + '/' + id;
        return this.http.delete<any>(url)
            .pipe(
                tap(entities => this.log(`fetched`)),
                catchError(this.handleError('destroy', []))
            );
    }

    update(entity: Entity): Observable<Entity> {
        return this.http.put(this.url, entity, httpOptions)
            .pipe(
                tap(entities => this.log(`updated entity id=${entity.id}`)),
                catchError(this.handleError<any>('update'))
            );
    }

    addNew(entity: Entity): Observable<any> {
        return this.http.post<any>(this.url, entity, httpOptions)
            .pipe(
                tap(entities => this.log(`added entity w/ id=${entity.id}`)),
                catchError(this.handleError<any>('addNew'))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** Log a ervice message with the MessageService */
    private log(message: string) {
        this.messageService.add('service: ' + message);
    }

}
