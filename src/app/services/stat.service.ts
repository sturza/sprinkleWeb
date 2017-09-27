import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { DatabaseService } from './database.service';
import { Stat } from '../models/stat.model';

@Injectable()
export class StatService {

  private stats: Stat[] = [];

  public statsSubject = new Subject<Stat[]>();

  constructor(private databaseService: DatabaseService) {}

  retrieveStats() {
    this.databaseService.getStats().subscribe(
      (tabs) => {
        this.stats = tabs;
        this.statsSubject.next(this.stats.slice());
      },
      (error) => console.log(error)
    );
  }

  getStats() {
    return this.stats.slice();
  }

  getStat(id: number) {
    return this.stats.find(stat => stat.ID === id);
  }

  createStat(stat: any) {
    this.databaseService.postStat(stat).subscribe(
      response => {
        console.log(response);
        this.retrieveStats();
      }
    );
  }

  removeStat(id: number) {
    this.databaseService.deleteStat(id).subscribe(
      response => {
        console.log(response);
        this.retrieveStats();
      }
    );
  }

}
