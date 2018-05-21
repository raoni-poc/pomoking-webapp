import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, tap} from 'rxjs/operators';
import {TaskContainer} from '../task-interface/task-container';
import {Task} from '../task-interface/task';
import {MessageService} from '../../message/message.service';
import {ActivatedRoute} from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class TaskService {

    private taskUrl = 'http://localhost:8000/api/v1/tasks';

    constructor(private http: HttpClient,
                private messageService: MessageService) {
    }

    getAllTasks(pageNumber = 1, perPage = 10): Observable<TaskContainer> {
        const url = this.taskUrl + '?page=' + pageNumber + '&&per_page=' + perPage;
        return this.http.get<any>(url)
            .pipe(
                tap(tasks => this.log(`fetched tasks`)),
                catchError(this.handleError('getAllTasks', []))
            );
    }

    getTask(id: number): Observable<Task> {
        const url = this.taskUrl + '/' + id;
        return this.http.get<any>(url)
            .pipe(
                tap(tasks => this.log(`fetched tasks`)),
                catchError(this.handleError('getTask', []))
            );
    }

    deleteTask(id: number): Observable<Task> {
        const url = this.taskUrl + '/' + id;
        return this.http.delete<any>(url)
            .pipe(
                tap(tasks => this.log(`fetched tasks`)),
                catchError(this.handleError('getTask', []))
            );
    }

    updateTask(task): Observable<any> {
        return this.http.put(this.taskUrl, task, httpOptions)
            .pipe(
                tap(tasks => this.log(`updated task id=${task.id}`)),
                catchError(this.handleError<any>('updateTask'))
            );
    }

    addTask(task): Observable<Task> {
        return this.http.post<any>(this.taskUrl, task, httpOptions)
            .pipe(
                tap(tasks => this.log(`added task w/ id=${task.id}`)),
                catchError(this.handleError<any>('addTask'))
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

    /** Log a HeroService message with the MessageService */
    private log(message: string) {
        this.messageService.add('TaskService: ' + message);
    }

}
