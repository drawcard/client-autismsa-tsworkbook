import { Component, OnInit } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { FetchDataService } from '../services/fetch-data.service';

@Component({
  selector: 'app-section08',
  templateUrl: './section08.component.html',
  styleUrls: ['./section08.component.scss']
})
export class Section08Component implements OnInit {

  dataStore: any;
  mdStore: string[] = [];

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `To do list`,
      // Titles
      title0: ``,
      title1: `Links to further information`,
      title2: `Learn more about Autism`,
      // Body
      body0: `
      To do list<br><br>
Links to further information. <br><br>
Now that you have completed this training and your Autism and Me: Planning Booklet here are some of the next steps you may wish to take in developing your knowledge and support systems:
<br><br>
Learn more about autism (including how to get a diagnosis): there are many great information resources available:
General: <br><br>
https://thespectrum.org.au/resources/ <br>
www.thespectrumofautismresources.com<br>
https://raisingchildren.net.au/autism<br>
https://silvereye.com.au/AutismSA/index.php<br>
State and Territory specific: <br>
South Australia:  https://autismsa.org.au<br>
Victoria: https://www.amaze.com.au<br>
Northern Territory: https://autismnt.org.au <br>
New South Wales: https://www.autismspectrum.org.au <br>
Tasmania: https://www.autismtas.org.au <br>
Queensland: https://autismqld.com.au <br>
Western Australia: https://www.autism.org.au <br>
Australian Capital Territory: www.marymead.org.au/services/marymead-autism-centre <br>
 <br><br>

Activate Medicare plans: <br>
Medicare plans provide financial support to make services and assessments more financially accessible, if you are interested in knowing more about the different Medicare plans and which professionals they can be used with:
https://thespectrum.org.au/autism-support-services/finance/ <br>
 <br><br>
Access Family training: <br>
If you are interested in knowing more about autism in general and specific topics related to autism there are many training options available for families:
For more Early Days training options:  https://www.earlydays.com.au/schedule-of-workshops  <br>
Visit the autism association in your state for more options.   <br>
 <br><br>
Apply for NDIS: <br>
Request a NDIS plan or review for my child:  <br>
For information about requesting a NDIS plan: https://www.ndis.gov.au/applying-access-ndis/how-apply <br>
For information about requesting a plan review: https://www.ndis.gov.au/participants/reviewing-your-plan-and-goals <br>
 <br><br>
Join a family support group: <br>
Family support groups can be a source of information and friendship and support: <br>
For information about my time support groups:  https://www.mytime.net.au/  <br>
Visit the autism association in your state for more options. <br>
 <br><br>
Access recreational activities for my child: <br>
Recreational activities play a part in providing for opportunities to increase physical health and well-being as well as socialisation:   <br>
For information about autism specific playgroups: https://www.playconnect.com.au/  <br>
Find out more about recreation activities: https://www.reclink.org/our-programs/national-program  <br>
 <br><br>
Understand more about therapies, the professionals who deliver them and how they can help: <br>
There are many therapy types and knowing what how they help is important in helping you make a decision.  <br>
For information about service and therapy types:  https://thespectrum.org.au/autism-support-services/professionals/  <br>
 <br><br>
Choosing and being prepared for childcare/kindergarten/school: <br>
This can be a daunting process, but there are many supports for choosing placements and supports within educational settings:  <br>
For information about choosing schools and links to state and territory education: https://raisingchildren.net.au/autism/school-play-work/autism-spectrum-disorder-primary-school/primary-schools-asd <br>
For information on Early Days progression to school training:  https://www.earlydays.com.au/skills-workshops https://thespectrum.org.au/autism-support-services/early-childhood/#childcare-and-kindergarten <br>
For information on childcare and kindergarten: https://thespectrum.org.au/autism-support-services/early-childhood/#childcare-and-kindergarten <br>
For information on inclusion support in childcare and out of hours school care setting:  https://www.education.gov.au/inclusion-support-program-isp <br>
 <br><br>
Much more information on a wide range of topics is available at: https://thespectrum.org.au/ <br>https://raisingchildren.net.au/  <br>
      `,
      body1: ``,

    }
  ];

  constructor(private http: HttpClient, private fetchDataService: FetchDataService) {

  }

  ngOnInit(): void {
    this.fetchMarkDownContent();
  }

  fetchMarkDownContent() {
    // Retrieve data from FetchDataService
    this.fetchDataService.dataStream.subscribe(jsonData => this.dataStore = jsonData);

    let that = this; // https://stackoverflow.com/a/49892384

    // Set variables
    let dataStrings = this.dataStore["dataStrings"];

    // On each dataString, do the following
    Object.keys(dataStrings).forEach(function (value) {

      let fileName = dataStrings[value];
      let filePath = '../../../assets/content/' + fileName;

      // Retrieve the markdown data
      that.http.get(filePath, { responseType: 'text' })
        .subscribe((data) => {
          // Store the returned markdown data
          that.mdStore.push(data);
        },
          error => {
            // Trigger a communication error if the file can't be retrieved for some reason
            error = "Communication error: File " + filePath + " could not be fetched! Please contact the website administrator.";
            window.alert(error);
          });
    });
  }

}
