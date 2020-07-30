import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import pdfMake from '../../../node_modules/pdfmake/build/pdfmake';
import pdfFonts from '../../../node_modules/pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-workbook-form',
  templateUrl: './workbook-form.component.html',
  styleUrls: ['./workbook-form.component.scss']
})

export class WorkbookFormComponent {

  b1_intro: string;
  blockHeading: any[];
  blockText: any[];

  // Initialise Form Data Fields
  b1_q1 = new FormControl('');
  b1_q2 = new FormControl('');
  b1_q3 = new FormControl('');
  b1_q4 = new FormControl('');

  // Regular expression for stripping <br> tags in the PDF output
  regex = /\<br>/gi;

  formComplete() {
    console.table(this);
  }

  // PDF Generator
  generatePdf() {
    const documentDefinition = {
      content: [
        {
          stack: [
            {
              //Autism SA Logo
              image: 'data:image/png;base64,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',
              width: 150,
              style: 'imageMargin'
            },
            // Block 0
            { text: this.blockHeading[0], style: 'heading' },
            { text: this.blockText[0].replace(this.regex, '\n'), style: 'body' },
            'My name is: ' + this.b1_q1.value,
            'My age is: ' + this.b1_q2.value,
            'I live with: ' + this.b1_q3.value,
            'My school / kindergarten / childcare details are: ' + this.b1_q4.value,
          ],
        },
      ],
      styles: {
        heading: {
          fontSize: 36,
          bold: true,
          margin: [0, 0, 0, 16]
        },
        body: {
          margin: [0, 16, 0, 16],
          color: 'gray'
        },
        subheading: {
          fontSize: 18,
          bold: true,
          margin: [0, 0, 0, 8]
        },
        imageMargin: {
          margin: [0, 24, 0, 24]
        }
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }

  constructor() {
    /*
    * Static content (intro paragraphs, body text, footer text, etc)
    */
    this.blockHeading = [
      `Your information`,
    ]
    this.blockText = [
      `My Autism and Me: Planning Booklet includes important information about me! It is a document that will change and develop as I do. It's purpose is to help everyone in my life understand my autism and what it means for me and my family on a day to day basis. <br><br>
      My Autism and Me: Planning Booklet includes information about: <br><br>
      • The characteristics of my autism <br>
      • The impact of those characteristics on me and my family <br>
      • Strategies that can support me and my family <br>
      • Information about supports and services <br>
      • My short term and long term goals`,
    ]
  }
}
