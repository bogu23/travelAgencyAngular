import { Injectable } from '@angular/core';
import {DestinationModel} from "../../models/destination-model";

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  destinations: Array<DestinationModel> = [];
  id: number = 1;

  constructor() {
    for (let i = 0; i < 5; i++) {
      let destination: DestinationModel = {
        id: 0,
        description: 'aaaaaaaabbbbbbbbbbdddddddd',
        name: `name${i + 1}`,
        country: {
          id: i,
          name: `country${i}`,
          continent: {
            id: i,
            name: `continent${i}`
          }
        }
      };
      this.create(destination);
    }
  }

  public create(data: DestinationModel) {
    data.id = this.id;
    this.id++;
    this.destinations.push(data);
  }

  public update(data: DestinationModel) {
    this.destinations.forEach((destination: DestinationModel, index) => {
      if (destination.id == data.id) {
        this.destinations[index] = data;
      }
    })
  }

  public delete(destinationId: number) {
    this.destinations = this.destinations.filter((destination: DestinationModel) => destination.id != destinationId);
  }

  public get(): Array<DestinationModel> {
    return this.destinations;
  }

  public getById(destinationId: number): DestinationModel | undefined {

    // return this.destinations.filter((destination: DestinationModel) => destination.id == destinationId)[0];

    let result: any = undefined;
    this.destinations.forEach((destination: DestinationModel) => {
      if (destination.id == destinationId) {
        result = destination;
      }
    })
    return result;
  }



}
