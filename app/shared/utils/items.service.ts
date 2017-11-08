import { Injectable } from "@angular/core";
import { Predicate } from "../interfaces";
import * as _ from "lodash";

@Injectable()
export class ItemsService {
    constructor() {}

    // Remove an item from an array using the lodash library
    removeItemFromArray<T>(array: Array<T>, item: any) {
        _.remove(array, function(current) {
            return JSON.stringify(current) === JSON.stringify(item);
        });
    }
    removeItems<T>(array: Array<T>, predicate: Predicate<T>) {
        _.remove(array, predicate);
    }

    setItem<T>(array: Array<T>, predicate: Predicate<T>, item: T) {
        let _oldItem = _.find(array, predicate);
        if (_oldItem) {
            let index = _.indexOf(array, _oldItem);
            array.splice(index, 1, item);
        } else {
            array.push(item);
        }
    }

    addItemToStart<T>(array: Array<T>, item: any) {
        array.splice(0, 0, item);
    }

    getPropertyValues<T, R>(array: Array<T>, property: string): R {
        let result = _.map(array, property);
        return <R><any>result;
    }
    getSerialized<T>(arg: any): T {
        return <T>JSON.parse(JSON.stringify(arg));
    }
}