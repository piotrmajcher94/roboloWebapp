import { TaskItemEntity } from './task-item.to';
import { WorkerTO } from './worker.to';
export class TaskTO {
    id: number;
    description: string;
    estimatedTaskDurationHours: number;
    workers: WorkerTO[];
    creationDate: Date;
    startDate: Date;
    status: string;
    taskItems: TaskItemEntity[];
}
