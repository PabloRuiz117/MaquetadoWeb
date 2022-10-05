import { Component, OnInit } from '@angular/core';
import { INewsletter } from 'src/app/interfaces/INewsletter.interface';

@Component({
  selector: 'app-newsletters',
  templateUrl: './newsletters.component.html',
  styleUrls: ['./newsletters.component.css'],
})
export class NewslettersComponent implements OnInit {
  newsletters: INewsletter[] = [
    {
      descriptionImg: 'Image 1',
      descriptions: [
        { description: 'Description 1' },
        { description: 'Description 2' },
        { description: 'Description 3' },
      ],
    },

    {
      descriptionImg: 'Image 2',
      descriptions: [
        { description: 'Description 1' },
        { description: 'Description 2' },
        { description: 'Description 3' },
      ],
    },

    {
      descriptionImg: 'Image 3',
      descriptions: [
        { description: 'Description 1' },
        { description: 'Description 2' },
        { description: 'Description 3' },
      ],
    },

    {
      descriptionImg: 'Image 4',
      descriptions: [
        { description: 'Description 1' },
        { description: 'Description 2' },
        { description: 'Description 3' },
      ],
    },
  ];
  constructor() { }

  ngOnInit(): void { }
}
