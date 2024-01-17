import { User } from "./User.model";

export interface Response {
    info: object;
    results: User[];
}