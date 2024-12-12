import LikeModel from '../models/Like.js';
import Repository from '../models/repository.js';
import Controller from './Controller.js';

export default class LikesController extends Controller {
    constructor(HttpContext) {
        super(HttpContext, new Repository(new LikeModel()));
    }
}
