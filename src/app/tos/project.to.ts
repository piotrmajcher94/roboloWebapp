import { TaskTO } from './task.to';
import { WorkerTO } from './worker.to';
import { ClientTO } from './client.to';
import { AddressTO } from './address.to';
export class ProjectTo {

    id: number;
    projectName: string;
    startDate: Date;
    addressTO: AddressTO;
    clientTO: ClientTO;
    workerTOS: WorkerTO[];
    taskTOS: TaskTO[];
    approximateEndDate: Date;
}
