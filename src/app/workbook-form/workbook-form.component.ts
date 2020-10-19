import { Component, ViewChild, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

import { Section00Component } from './section00/section00.component';
import { Section01Component } from './section01/section01.component';
import { Section02Component } from './section02/section02.component';
import { Section03Component } from './section03/section03.component';
import { Section04Component } from './section04/section04.component';
import { Section05Component } from './section05/section05.component';
import { Section06Component } from './section06/section06.component';
import { Section07Component } from './section07/section07.component';
import { Section08Component } from './section08/section08.component';
import { Section09Component } from './section09/section09.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';

import { DefinitionsService } from './services/definitions.service';
import { MindMapImagesBase64Service } from './services/mind-map-images-base64.service';

// Fetch Data Service
import { HttpClient } from '@angular/common/http';
import { FetchDataService } from './services/fetch-data.service';

// PDF Generator
import pdfMake from '../../../node_modules/pdfmake/build/pdfmake';
import pdfFonts from '../../../node_modules/pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

// Converts Markdown to HTML content
import { MarkdownService } from 'ngx-markdown';

// HTML to PDFMake Plugin Module
import htmlToPdfmake from "html-to-pdfmake";


@Component({
  selector: 'app-workbook-form',
  templateUrl: './workbook-form.component.html',
  styleUrls: ['./workbook-form.component.scss']
})

export class WorkbookFormComponent implements OnInit {

  b1_intro: string;
  sectionHeading: any[];
  blockHeading: any[];
  blockText: any[];
  cardImageBase64: string = "test";
  docName: string = 'Autism & Me: Workbook';

  // Regular expression for stripping <br> tags in the PDF output
  regex = /\<br>/gi;

  //Fetch data from nested child components & assign to member variable
  section00StaticContent: any[];
  section01StaticContent: any[];
  section02StaticContent: any[];
  section03StaticContent: any[];
  section04StaticContent: any[];
  section05StaticContent: any[];
  section06StaticContent: any[];
  section07StaticContent: any[];
  section08StaticContent: any[];
  section09StaticContent: any[];

  httpObject: any[];

  @ViewChild(Section00Component) s00: Section00Component;
  @ViewChild(Section01Component) s01: Section01Component;
  @ViewChild(Section02Component) s02: Section02Component;
  @ViewChild(Section03Component) s03: Section03Component;
  @ViewChild(Section04Component) s04: Section04Component;
  @ViewChild(Section05Component) s05: Section05Component;
  @ViewChild(Section06Component) s06: Section06Component;
  @ViewChild(Section07Component) s07: Section07Component;
  @ViewChild(Section08Component) s08: Section08Component;
  @ViewChild(Section09Component) s09: Section09Component;
  @ViewChild(ImageUploadComponent) iu: ImageUploadComponent;


  // Empty variables for DefinitionsService
  logo: string = '';
  imgUnchecked: string = '';
  imgChecked: string = '';

  section00Title: string = '';
  section01Title: string = '';
  section02Title: string = '';
  section03Title: string = '';
  section04Title: string = '';
  section05Title: string = '';
  section06Title: string = '';
  section07Title: string = '';
  section08Title: string = '';
  section09Title: string = '';

  // Empty variables for MindMapImagesBase64 service
  mindMap001: string = '';
  mindMap002: string = '';
  mindMap003: string = '';
  mindMap004: string = '';

  // Initialise objects for Markdown content retrieval
  dataStore: any;
  mdStore: string[] = [];

  constructor(
    private ds: DefinitionsService,
    private mm: MindMapImagesBase64Service,
    private markdownService: MarkdownService,
    private http: HttpClient,
    private fetchDataService: FetchDataService
  ) {
    this.logo = ds.logo;
    this.imgChecked = ds.imgChecked;
    this.imgUnchecked = ds.imgUnchecked;
    this.section00Title = ds.section00Title;
    this.section01Title = ds.section01Title;
    this.section02Title = ds.section02Title;
    this.section03Title = ds.section03Title;
    this.section04Title = ds.section04Title;
    this.section05Title = ds.section05Title;
    this.section06Title = ds.section06Title;
    this.section07Title = ds.section07Title;
    this.section08Title = ds.section08Title;
    this.section09Title = ds.section09Title;
    this.mindMap001 = mm.mindMap001;
    this.mindMap002 = mm.mindMap002;
    this.mindMap003 = mm.mindMap003;
    this.mindMap004 = mm.mindMap004;
  }

  ngOnInit(): void {
    // Fetch Markdown Content for display in the PDF
    this.fetchMarkDownContent();

    console.info("PARAGRAPHS");
    console.debug(this.mdStore);
    console.info("--- END PARAGRAPHS");
  }

  fetchMarkDownContent() {
    // Retrieve data from FetchDataService
    this.fetchDataService.dataStream.subscribe(jsonData => this.dataStore = jsonData);

    let that = this; // https://stackoverflow.com/a/49892384

    // Set variables
    let paragraphs = this.dataStore["paragraphs"];

    // On each dataString, do the following
    Object.keys(paragraphs).forEach(function (value) {

      let fileName = paragraphs[value];
      let filePath = environment.filePath + fileName;

      // Retrieve the markdown data
      that.http.get(filePath, { responseType: 'text' })
        .subscribe((data) => {
          // Store the returned markdown data
          that.mdStore.push(data);
        },
          error => {
            // Trigger a communication error if the file can't be retrieved for some reason
            error = "Communication error: File " + filePath + " could not be fetched! Please contact the website administrator.";
            console.error(error);
          });
    });
  }

  // PDF Generator
  generatePdf() {
    const documentDefinition = {
      pageSize: 'A4',
      pageMargins: [40, 40, 40, 40],
      footer: {
        columns: [
          { text: this.docName, alignment: 'center' }
        ]
      },
      content: [
        {
          //Autism SA Logo
          image: this.logo,
          width: 75,
          style: 'imageMargin'
        },
        { text: this.docName, style: 'headingSection' },

        // Section 00
        htmlToPdfmake(this.markdownService.compile(this.mdStore[0])),

        // Section 01
        htmlToPdfmake(this.markdownService.compile(this.mdStore[1])),
        htmlToPdfmake(this.markdownService.compile(this.mdStore[2])),
        { image: (this.iu.cardImageBase64 ? this.iu.cardImageBase64 : this.iu.blankImage), width: 100, style: 'imageMargin' }, // No image uploaded? Show blank image
        { text: 'My name is: ' + this.s01.q1.value, style: 'textAnswer' },
        { text: 'My age is: ' + this.s01.q2.value, style: 'textAnswer' },
        { text: 'I live with: ' + this.s01.q3.value, style: 'textAnswer' },
        { text: 'My school / kindergarten / childcare details are: ' + this.s01.q4.value, style: 'textAnswer' },
        htmlToPdfmake(this.markdownService.compile(this.mdStore[3])),
        { text: 'I like (e.g.people, places, objects, activities): ' + this.s01.q5.value, style: 'textAnswer' },
        { text: 'I am good at (strengths): ' + this.s01.q6.value, style: 'textAnswer' },
        { text: 'I have trouble with (challenges): ' + this.s01.q7.value, style: 'textAnswer' },
        { text: 'I need (supports and strategies): ' + this.s01.q8.value, style: 'textAnswer' },
        // Section 02
        htmlToPdfmake(this.markdownService.compile(this.mdStore[4])),
        htmlToPdfmake(this.markdownService.compile(this.mdStore[5])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s02.cbl1[0].name }, { image: (this.s02.cbl1[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[1].name }, { image: (this.s02.cbl1[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[2].name }, { image: (this.s02.cbl1[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[3].name }, { image: (this.s02.cbl1[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[4].name }, { image: (this.s02.cbl1[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[5].name }, { image: (this.s02.cbl1[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[6].name }, { image: (this.s02.cbl1[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[7].name }, { image: (this.s02.cbl1[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[8].name }, { image: (this.s02.cbl1[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[9].name }, { image: (this.s02.cbl1[9].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[10].name }, { image: (this.s02.cbl1[10].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[11].name }, { image: (this.s02.cbl1[11].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[12].name }, { image: (this.s02.cbl1[12].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[13].name }, { image: (this.s02.cbl1[13].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[14].name }, { image: (this.s02.cbl1[14].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[15].name }, { image: (this.s02.cbl1[15].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[16].name }, { image: (this.s02.cbl1[16].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[17].name }, { image: (this.s02.cbl1[17].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[18].name }, { image: (this.s02.cbl1[18].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[19].name }, { image: (this.s02.cbl1[19].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl1[20].name }, { image: (this.s02.cbl1[20].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s02.other1.value, style: 'textAnswer' },
        // END Checkbox Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[6])),
        // Radio Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s02.cbl2[0].name }, { image: (this.s02.cbl2[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[1].name }, { image: (this.s02.cbl2[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[2].name }, { image: (this.s02.cbl2[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[3].name }, { image: (this.s02.cbl2[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[4].name }, { image: (this.s02.cbl2[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[5].name }, { image: (this.s02.cbl2[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[6].name }, { image: (this.s02.cbl2[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[7].name }, { image: (this.s02.cbl2[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl2[8].name }, { image: (this.s02.cbl2[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s02.other2.value, style: 'textAnswer' },
        // END Checkbox Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[7])),
        // NOTE: Radio Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto'],
            body: [
              [{ text: "Strategy" }, { text: "Currently use" }, { text: "Have not tried yet" }],
              [
                { text: this.s02.rad1[0].name },
                { image: (this.s02.rad1[0].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[0].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[1].name },
                { image: (this.s02.rad1[1].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[1].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[2].name },
                { image: (this.s02.rad1[2].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[2].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[3].name },
                { image: (this.s02.rad1[3].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[3].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[4].name },
                { image: (this.s02.rad1[4].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[4].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[5].name },
                { image: (this.s02.rad1[5].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[5].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[6].name },
                { image: (this.s02.rad1[6].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[6].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[7].name },
                { image: (this.s02.rad1[7].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[7].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[8].name },
                { image: (this.s02.rad1[8].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[8].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s02.rad1[9].name },
                { image: (this.s02.rad1[9].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s02.rad1[9].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s02.other3.value, style: 'textAnswer' },
        // NOTE: END Radio Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[8])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s02.cbl4[0].name }, { image: (this.s02.cbl4[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[1].name }, { image: (this.s02.cbl4[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[2].name }, { image: (this.s02.cbl4[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[3].name }, { image: (this.s02.cbl4[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[4].name }, { image: (this.s02.cbl4[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[5].name }, { image: (this.s02.cbl4[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[6].name }, { image: (this.s02.cbl4[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[7].name }, { image: (this.s02.cbl4[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[8].name }, { image: (this.s02.cbl4[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s02.cbl4[9].name }, { image: (this.s02.cbl4[9].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s02.other4.value, style: 'textAnswer' },
        // END Checkbox Group
        // Section 03
        htmlToPdfmake(this.markdownService.compile(this.mdStore[9])),
        htmlToPdfmake(this.markdownService.compile(this.mdStore[10])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s03.cbl1[0].name }, { image: (this.s03.cbl1[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[1].name }, { image: (this.s03.cbl1[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[2].name }, { image: (this.s03.cbl1[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[3].name }, { image: (this.s03.cbl1[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[4].name }, { image: (this.s03.cbl1[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[5].name }, { image: (this.s03.cbl1[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[6].name }, { image: (this.s03.cbl1[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[7].name }, { image: (this.s03.cbl1[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[8].name }, { image: (this.s03.cbl1[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[9].name }, { image: (this.s03.cbl1[9].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[10].name }, { image: (this.s03.cbl1[10].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl1[11].name }, { image: (this.s03.cbl1[11].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s03.other1.value, style: 'textAnswer' },
        // END Checkbox Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[11])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s03.cbl2[0].name }, { image: (this.s03.cbl2[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl2[1].name }, { image: (this.s03.cbl2[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl2[2].name }, { image: (this.s03.cbl2[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl2[3].name }, { image: (this.s03.cbl2[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl2[4].name }, { image: (this.s03.cbl2[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl2[5].name }, { image: (this.s03.cbl2[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl2[6].name }, { image: (this.s03.cbl2[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s03.other2.value, style: 'textAnswer' },
        // END Checkbox Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[12])),
        // NOTE: Radio Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto'],
            body: [
              [{ text: "Strategy" }, { text: "Currently use" }, { text: "Have not tried yet" }],
              [
                { text: this.s03.rad1[0].name },
                { image: (this.s03.rad1[0].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[0].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[1].name },
                { image: (this.s03.rad1[1].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[1].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[2].name },
                { image: (this.s03.rad1[2].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[2].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[3].name },
                { image: (this.s03.rad1[3].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[3].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[4].name },
                { image: (this.s03.rad1[4].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[4].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[5].name },
                { image: (this.s03.rad1[5].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[5].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[6].name },
                { image: (this.s03.rad1[6].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[6].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[7].name },
                { image: (this.s03.rad1[7].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[7].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[8].name },
                { image: (this.s03.rad1[8].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[8].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[9].name },
                { image: (this.s03.rad1[9].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[9].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[10].name },
                { image: (this.s03.rad1[9].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[9].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s03.rad1[11].name },
                { image: (this.s03.rad1[9].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s03.rad1[9].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s03.other3.value, style: 'textAnswer' },
        // NOTE: END Radio Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[13])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s03.cbl4[0].name }, { image: (this.s03.cbl4[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[1].name }, { image: (this.s03.cbl4[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[2].name }, { image: (this.s03.cbl4[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[3].name }, { image: (this.s03.cbl4[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[4].name }, { image: (this.s03.cbl4[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[5].name }, { image: (this.s03.cbl4[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[6].name }, { image: (this.s03.cbl4[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[7].name }, { image: (this.s03.cbl4[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[8].name }, { image: (this.s03.cbl4[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s03.cbl4[9].name }, { image: (this.s03.cbl4[9].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s03.other4.value, style: 'textAnswer' },
        // END Checkbox Group
        // Section 04
        htmlToPdfmake(this.markdownService.compile(this.mdStore[14])),
        htmlToPdfmake(this.markdownService.compile(this.mdStore[15])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s04.cbl1[0].name }, { image: (this.s04.cbl1[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[1].name }, { image: (this.s04.cbl1[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[2].name }, { image: (this.s04.cbl1[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[3].name }, { image: (this.s04.cbl1[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[4].name }, { image: (this.s04.cbl1[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[5].name }, { image: (this.s04.cbl1[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[6].name }, { image: (this.s04.cbl1[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[7].name }, { image: (this.s04.cbl1[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl1[8].name }, { image: (this.s04.cbl1[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s04.other1.value, style: 'textAnswer' },
        // END Checkbox Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[16])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s04.cbl2[0].name }, { image: (this.s04.cbl2[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl2[1].name }, { image: (this.s04.cbl2[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl2[2].name }, { image: (this.s04.cbl2[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl2[3].name }, { image: (this.s04.cbl2[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl2[4].name }, { image: (this.s04.cbl2[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl2[5].name }, { image: (this.s04.cbl2[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s04.other2.value, style: 'textAnswer' },
        // END Checkbox Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[17])),
        // NOTE: Radio Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto', 'auto'],
            body: [
              [{ text: "Strategy" }, { text: "Currently use" }, { text: "Have not tried yet" }],
              [
                { text: this.s04.rad1[0].name },
                { image: (this.s04.rad1[0].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s04.rad1[0].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s04.rad1[1].name },
                { image: (this.s04.rad1[1].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s04.rad1[1].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s04.rad1[2].name },
                { image: (this.s04.rad1[2].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s04.rad1[2].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s04.rad1[3].name },
                { image: (this.s04.rad1[3].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s04.rad1[3].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s04.rad1[4].name },
                { image: (this.s04.rad1[4].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s04.rad1[4].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
              [
                { text: this.s04.rad1[5].name },
                { image: (this.s04.rad1[5].selected == "Currently use" ? this.imgChecked : this.imgUnchecked), width: 16 },
                { image: (this.s04.rad1[5].selected == "Have not tried yet" ? this.imgChecked : this.imgUnchecked), width: 16 },
              ],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s04.other3.value, style: 'textAnswer' },
        // NOTE: END Radio Group
        htmlToPdfmake(this.markdownService.compile(this.mdStore[18])),
        // Checkbox Group
        {
          table: {
            headerRows: 1,
            widths: ['*', 'auto'],
            body: [
              [{ text: this.s04.cbl4[0].name }, { image: (this.s04.cbl4[0].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[1].name }, { image: (this.s04.cbl4[1].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[2].name }, { image: (this.s04.cbl4[2].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[3].name }, { image: (this.s04.cbl4[3].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[4].name }, { image: (this.s04.cbl4[4].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[5].name }, { image: (this.s04.cbl4[5].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[6].name }, { image: (this.s04.cbl4[6].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[7].name }, { image: (this.s04.cbl4[7].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[8].name }, { image: (this.s04.cbl4[8].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[9].name }, { image: (this.s04.cbl4[9].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
              [{ text: this.s04.cbl4[10].name }, { image: (this.s04.cbl4[10].checked ? this.imgChecked : this.imgUnchecked), width: 16 }],
            ]
          }
        },
        { text: 'Other (please add...) :' + this.s04.other4.value, style: 'textAnswer' },
        // END Checkbox Group

        // Section 05
        htmlToPdfmake(this.markdownService.compile(this.mdStore[19])),
        htmlToPdfmake(this.markdownService.compile(this.mdStore[20])),

        { text: 'Formal: ' + this.s05.q1.value, style: 'textAnswer' },
        { text: 'Informal: ' + this.s05.q2.value, style: 'textAnswer' },
        { text: 'Community: ' + this.s05.q3.value, style: 'textAnswer' },

        htmlToPdfmake(this.markdownService.compile(this.mdStore[21])),
        { text: 'Formal: ' + this.s05.q4.value, style: 'textAnswer' },
        { text: 'Informal: ' + this.s05.q5.value, style: 'textAnswer' },
        { text: 'Community: ' + this.s05.q6.value, style: 'textAnswer' },

        htmlToPdfmake(this.markdownService.compile(this.mdStore[22])),
        { text: 'Formal: ' + this.s05.q7.value, style: 'textAnswer' },
        { text: 'Informal: ' + this.s05.q8.value, style: 'textAnswer' },
        { text: 'Community: ' + this.s05.q9.value, style: 'textAnswer' },

        htmlToPdfmake(this.markdownService.compile(this.mdStore[23])),
        { text: 'Formal: ' + this.s05.q10.value, style: 'textAnswer' },
        { text: 'Informal: ' + this.s05.q11.value, style: 'textAnswer' },
        { text: 'Community: ' + this.s05.q12.value, style: 'textAnswer' },

        // Section 06
        htmlToPdfmake(this.markdownService.compile(this.mdStore[24])),
        { image: this.mindMap001, width: 500, style: 'imageMargin' },
        { image: this.mindMap002, width: 500, style: 'imageMargin' },
        { image: this.mindMap003, width: 500, style: 'imageMargin' },
        { image: this.mindMap004, width: 500, style: 'imageMargin' },
        // Section 07
        htmlToPdfmake(this.markdownService.compile(this.mdStore[25])),
        { text: 'A month: ' + this.s07.q1.value, style: 'textAnswer' },
        { text: '3 months: ' + this.s07.q2.value, style: 'textAnswer' },
        { text: 'A year: ' + this.s07.q3.value, style: 'textAnswer' },
        { text: 'Who will help? (Informal, formal and community supports): ' + this.s07.q4.value, style: 'textAnswer' },
        { text: 'How e.g. what strategies?: ' + this.s07.q5.value, style: 'textAnswer' },
        { text: 'Monitor progress: ' + this.s07.q6.value, style: 'textAnswer' },
        // Section 08
        htmlToPdfmake(this.markdownService.compile(this.mdStore[27])),
        // Section 09
        htmlToPdfmake(this.markdownService.compile(this.mdStore[28])),
      ],
      styles: {
        // margin & padding notation = [left, top, right, bottom]
        headingSection: {
          fontSize: 36,
          bold: true,
          margin: [0, 36, 0, 8]
        },
        heading: {
          fontSize: 24,
          bold: true,
          margin: [0, 8, 0, 8]
        },
        body: {
          margin: [0, 8, 0, 8],
          color: 'gray'
        },
        textAnswer: {
          margin: [0, 8, 0, 8],
        },
        subheading: {
          fontSize: 16,
          bold: true,
          margin: [0, 8, 0, 8]
        },
        imageMargin: {
          margin: [0, 24, 0, 24]
        }
      },
    };
    pdfMake.createPdf(documentDefinition).open();
  }
}
