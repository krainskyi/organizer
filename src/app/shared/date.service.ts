import { Injectable } from "@angular/core";
import *as momemt from 'moment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class DateService{
    public date: BehaviorSubject<momemt.Moment> = new BehaviorSubject(momemt())
}