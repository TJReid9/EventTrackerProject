import { Component, OnInit } from '@angular/core';
import { JamSession } from 'src/app/models/jam-session';
import { JamSessionService } from 'src/app/services/jam-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  jams: JamSession[] = [];
  selected: JamSession | null = null;

  constructor(
    private jamService: JamSessionService
  ){}

  ngOnInit(): void {
    this.loadJams();
  }

  loadJams() {
    this.jamService.index().subscribe({
      next: (jamLog) => {
        this.jams = jamLog;
      },
      error: (nojoy) => {
        console.error('HomeCompnent.loadJams - error getting jams');
        console.log(nojoy)
      }
    })
  }

}

