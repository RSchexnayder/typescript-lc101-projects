import { Payload } from './Payload.js';

export class Cargo implements Payload{
    massKg: number;
    material: string;
    constructor(massKg: number, material: string){
        this.massKg = massKg;
        this.material = material;
    }
 }