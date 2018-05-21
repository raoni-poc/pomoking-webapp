import {Component, OnInit} from '@angular/core';
import {TaskService} from '../task-service/task.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Task} from '../task-interface/task';

@Component({
    selector: 'app-task-view',
    templateUrl: './task-view.component.html',
    styleUrls: ['./task-view.component.css']
})
export class TaskViewComponent implements OnInit {

    public task: Task;

    constructor(private taskService: TaskService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.getTask();
    }

    getTask(): void {
        this.activatedRoute.params.subscribe(params => {
            this.taskService.getTask(parseInt(params['id'], 10))
                .subscribe(task => {
                    this.task = task;
                });
        });
    }

    editTask(id: number) {
        this.router.navigate(['./task/edit/' + id]);
    }

    goToTimer(id: number) {
        this.router.navigate(['./timer/' + id]);
    }

    deleteTask(id: number) {
        this.router.navigate(['./task/delete/' + id]);
    }

}
