export interface IUser {
    id: number;
    name: string;
    avatar: string;
    profession: string;
    schedulesCreated: number;
}

export interface ISchedule {
    id: number;
    title: string;
    description: string;
    timeStart: Date;
    timeEnd: Date;
    location: string;
    status: string;
    dateCreated: Date;
    dateUpdate: Date;
    creator: string;
    creatorId: number;
    attendees: number[];
}

export interface IScheduleDetails {
    id: string;
    title: string;
    description: string;
    timeStart: Date;
    timeEnd: Date;
    location: string;
    type: string;
    status: string;
    dataCreated: Date;
    dateUpdated: Date;
    creator: string;
    creatorId: number;
    attendess: IUser[];
    statuses: string;
    types: string[];
}

export interface Pagination {
    CurrentPage: number;
    itemPerPage: number;
    TotalItems: number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}

export interface Predicate<T> {
    (item: T): boolean;
}