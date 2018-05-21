import {Component, OnChanges, OnInit} from '@angular/core';
import {TaskService} from '../task-service/task.service';
import {TaskContainer} from '../task-interface/task-container';
import {Task} from '../task-interface/task';
import {Links} from '../../interfaces/Links';
import {Meta} from '../../interfaces/Meta';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-task-all',
    templateUrl: './task-all.component.html',
    styleUrls: ['./task-all.component.css']
})

export class TaskAllComponent implements OnInit, OnChanges {

    public tasks: Task[];
    public links: Links;
    public meta: Meta;
    public isLoading = true;

    constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getTasks();
    }

    ngOnChanges() {

    }

    getTasks(): void {
        this.activatedRoute.params.subscribe(params => {
            this.taskService.getAllTasks(parseInt(params['page'], 10), parseInt(params['perPage'], 10))
                .subscribe(taskContainer => {
                    this.tasks = taskContainer.data;
                    this.links = taskContainer.links;
                    this.meta = taskContainer.meta;
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
