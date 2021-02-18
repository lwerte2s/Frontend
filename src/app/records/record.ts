import {Goal} from './goal'

export interface Record {
    salesmanId: number,
    evaluationId: number,
    year: number,
    goals: Goal[]
}