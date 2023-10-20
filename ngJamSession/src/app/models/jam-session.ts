export class JamSession {

  id: number;
  title: string;
  date: string;
  startTime: string;
  endTime: string;
  location: string;
  genre: string;
  description: string;
  imageUrl: string;

  constructor(
  id: number = 0,
  title: string = '',
  date: string = '',
  startTime: string = '',
  endTime: string = '',
  location: string = '',
  genre: string = '',
  description: string = '',
  imageUrl: string = ''

  ){
    this.id = id;
    this.title = title;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
    this.genre = genre;
    this.description = description;
    this.imageUrl = imageUrl;
  }


}
