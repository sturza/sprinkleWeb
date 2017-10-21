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
      (stats: Stat[]) => {
        this.stats = stats;
        console.log(this.stats);
        this.statsSubject.next(this.stats.slice());
      },
      (error) => console.log(error)
    );
  }

  getStats() {
    return this.stats.slice();
  }

  createStat(stat: any) {
    this.databaseService.createStat(stat).subscribe(
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
