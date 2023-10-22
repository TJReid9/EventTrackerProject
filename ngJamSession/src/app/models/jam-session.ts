export class JamSession {

  id: number;
  title: string;
  startDate: string;
  finishDate: string;
  songLink: string;
  siteLink: string;
  gear: string;
  bpm: number;
  description: string;
  imgUrl: string;

  constructor(
  id: number = 0,
  title: string = '',
  startDate: string = '',
  finishDate: string = '',
  songLink: string = '',
  siteLink: string = '',
  gear: string = '',
  bpm: number = 0,
  description: string = '',
  imgUrl: string = ''

  ){
    this.id = id;
    this.title = title;
    this.startDate = startDate;
    this.finishDate = finishDate;
    this.songLink = songLink;
    this.siteLink = siteLink;
    this.gear = gear;
    this.bpm = bpm;
    this.description = description;
    this.imgUrl = imgUrl;
  }


}
