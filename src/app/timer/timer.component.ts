import {Component, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {TimerObservable} from 'rxjs/observable/TimerObservable';
import {Subscription} from 'rxjs/Subscription';
import {tick} from '@angular/core/testing';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskService} from '../task/task-service/task.service';

@Component({
    selector: 'app-timer',
    templateUrl: './timer.component.html',
    styleUrls: ['./timer.component.css'],
})
export class TimerComponent implements OnInit, OnDestroy {

    private tick = 0;
    private totalTime = 0;
    private subscription: Subscription;
    private play = false;
    private task;


    constructor(private taskService: TaskService,
                private activatedRoute: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.getTask();
    }

    ngOnDestroy() {
        if (this.play) {
            this.subscription.unsubscribe();
        }
    }

    playOrPause() {
        this.play = !this.play;
        if (this.play) {
            this.totalTime--;
            const timer = TimerObservable.create(0, 1000);
            this.subscription = timer.subscribe(t => {
                this.tick = t;
                this.totalTime++;
                this.saveTimerSession(this.totalTime);
            });
        } else {
            this.subscription.unsubscribe();
        }
    }

    saveTimerSession(duration: number) {
        return duration;
    }

    getTask(): void {
        this.activatedRoute.params.subscribe(params => {
            this.taskService.getTask(parseInt(params['id'], 10))
                .subscribe(task => {
                    this.task = task;
                    console.log(this.task);
                });
        });
    }

    editTask(id: number) {
        this.router.navigate(['./task/edit/' + id]);
    }

}
