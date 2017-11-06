import { AddressTO } from './address.to';
import { ClientTO } from './client.to';

export class ProjectStubTO {

    id: number;
    projectName: String;
    startDate: Date;
    addressTO: AddressTO;
    clientTO: ClientTO;
}