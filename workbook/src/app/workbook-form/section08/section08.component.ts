import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section08',
  templateUrl: './section08.component.html',
  styleUrls: ['./section08.component.scss']
})
export class Section08Component implements OnInit {

  staticContent: any = [
    {
      // Section Title
      sectionTitle: `Section 8`,
      // Titles
      title0: `To do list`,
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

Activate Medicare plans: Medicare plans provide financial support to make services and assessments more financially accessible, if you are interested in knowing more about the different Medicare plans and which professionals they can be used with:
Click here  https://thespectrum.org.au/autism-support-services/finance/ <br>
 <br><br>
Access Family training: If you are interested in knowing more about autism in general and specific topics related to autism there are many training options available for families:
Click here for more Early Days training options  https://www.earlydays.com.au/schedule-of-workshops  <br>
Visit the autism association in your state for more options.   <br>
 <br><br>
Apply for NDIS: Request a NDIS plan or review for my child:  <br>
Click here for information about requesting a NDIS plan https://www.ndis.gov.au/applying-access-ndis/how-apply <br>
Click here for information about requesting a plan review https://www.ndis.gov.au/participants/reviewing-your-plan-and-goals <br>
 <br><br>
Join a family support group: Family support groups can be a source of information and friendship and support: <br>
Click here for information about my time support groups  https://www.mytime.net.au/  <br>
Visit the autism association in your state for more options. <br>
 <br><br>
Access recreational activities for my child: Recreational activities play a part in providing for opportunities to increase physical health and well-being as well as socialisation:   <br>
Click here for information about autism specific playgroups https://www.playconnect.com.au/  <br>
Click here to find out more about recreation activities https://www.reclink.org/our-programs/national-program  <br>
 <br><br>
Understand more about therapies, the professionals who deliver them and how they can help: There are many therapy types and knowing what how they help is important in helping you make a decision.  <br>
Click here information about service and therapy types  https://thespectrum.org.au/autism-support-services/professionals/  <br>
 <br><br>
Choosing and being prepared for childcare/kindergarten/school: This can be a daunting process, but there are many supports for choosing placements and supports within educational settings:  <br>
Click here for information about choosing schools and links to state and territory education https://raisingchildren.net.au/autism/school-play-work/autism-spectrum-disorder-primary-school/primary-schools-asd <br>
Click here for information on Early Days progression to school training  https://www.earlydays.com.au/skills-workshops https://thespectrum.org.au/autism-support-services/early-childhood/#childcare-and-kindergarten <br>
Click here for information on childcare and kindergarten  <br>
https://thespectrum.org.au/autism-support-services/early-childhood/#childcare-and-kindergarten <br>
Click here for information on inclusion support in childcare and out of hours school care setting  https://www.education.gov.au/inclusion-support-program-isp <br>
 <br><br>
Much more information on a wide range of topics is available at  <br>
thespectrum.org.au/ <br>
 <br><br>
https://raisingchildren.net.au/  <br>
      `,
      body1: ``,

    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
