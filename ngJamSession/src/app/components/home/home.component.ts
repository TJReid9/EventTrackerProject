import { Component, OnInit } from '@angular/core';
import { JamSession } from 'src/app/models/jam-session';
import { JamSessionService } from 'src/app/services/jam-session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  jams: JamSession[] = [];
  selected: JamSession | null = null;
  newJam: JamSession = new JamSession();
  editJam: JamSession | null = null;

  constructor(private jamService: JamSessionService) {}

  play(): void {
    // AudioContext  {{"'assets/media/BoogieMonsta.mp3'"}}
  }



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
        console.log(nojoy);
      },
    });
  }

  displayJam(jam: JamSession): void {
    this.selected = jam;
  }

  displayTable(): void {
    this.selected = null;
  }

  displayAddForm() {

  }

  addJam(jam: JamSession): void {
    this.jamService.create(jam).subscribe({
      next: (newTodo) => {
        this.newJam = new JamSession();
        this.loadJams();
      },
      error: (nojoy) => {
        console.error('HomeHttpComponent.addJam(): error creating JamSession:');
        console.error(nojoy);
      },
    });
  }

  setEditJam() {
    this.editJam = Object.assign({}, this.selected);
  }

  updateJam(jam: JamSession, setSelected: boolean = true) {
    this.jamService.update(jam).subscribe({
      next: (updatedJam) => {
        if (setSelected) {
          this.selected = updatedJam;
        }
        this.editJam = null;
        this.loadJams();
      },
      error: (nojoy) => {
        console.error('HomeComponent.updateJam(): error updating Jam Session:');
        console.error(nojoy);
      },
    });
  }


  deleteJam(id: number)  {
    this.jamService.destroy(id).subscribe(
      {
        next: () => {
          this.loadJams();
        },
        error: (nojoy) => {
          console.error('HomeHttpComponent.deleteJam(): error deleting Jam Session:');
          console.error(nojoy);
        },
      });
    }
}
