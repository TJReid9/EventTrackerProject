export class JamSession {

  id: number;
  title: string;
  sessionDate: string;
  startTime: string;
  endTime: string;
  location: string;
  musicGenre: string;
  description: string;
  imageUrl: string;

  constructor(
  id: number = 0,
  title: string = '',
  sessionDate: string = '',
  startTime: string = '',
  endTime: string = '',
  location: string = '',
  musicGenre: string = '',
  description: string = '',
  imageUrl: string = ''

  ){
    this.id = id;
    this.title = title;
    this.sessionDate = sessionDate;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.musicGenre = musicGenre;
    this.description = description;
    this.imageUrl = imageUrl;
  }


}
