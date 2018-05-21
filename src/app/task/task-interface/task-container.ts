import {Task} from './task';
import {Container} from '../../interfaces/Container';

export interface TaskContainer extends Container {
    data: Task[];
}
