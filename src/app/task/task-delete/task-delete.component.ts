import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task-service/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-task-delete',
    templateUrl: './task-delete.component.html',
    styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {
    private task;

    constructor(private taskService: TaskService,
                private activatedRoute: ActivatedRoute,
                private router: Router,
                private location: Location) {
    }

    ngOnInit() {
        this.getTask();
    }

    goBack(): void {
        this.location.back();
    }

    getTask(): void {
        this.activatedRoute.params.subscribe(params => {
            this.taskService.getTask(parseInt(params['id'], 10))
                .subscribe(task => {
                    this.task = task;
                });
        });
    }

    deleteTask(): void {
        this.activatedRoute.params.subscribe(params => {
            this.taskService.deleteTask(parseInt(params['id'], 10))
                .subscribe(result => {
                    this.router.navigateByUrl('task/all/5/1' );
                });
        });
    }

}
