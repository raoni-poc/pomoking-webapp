import {Container} from '../interfaces/Container';
import {Category} from './category';

export interface CategoryContainer extends Container {
    data: Category[];
}
