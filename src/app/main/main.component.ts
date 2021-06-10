import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;

  search_main: string = '';
  selected_subject: string = 'Inbox';
  selected_contact: string = '';
  text_compose: string = 'Compose';

  displayedColumns: string[] = ['User', 'Subject', 'Date'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  public silent(nombre: string) {
    event.stopPropagation();
    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].sender === nombre)
        if (this.dataSource[i].noti === 'notifications_none')
          this.dataSource[i].noti = 'notifications_off';
        else this.dataSource[i].noti = 'notifications_none';
    }
  }

  public change_subject(subject_name: string) {
    this.selected_subject = subject_name;
    this.router.navigate(['main/' + subject_name]);
  }

  public isSubject(subject_name: string) {
    if (
      this.selected_subject == 'Inbox' &&
      subject_name != 'Trash' &&
      subject_name != 'Sent'
    )
      return true;

    if (subject_name == this.selected_subject) return true;

    return false;
  }
  public delete_mail(mail: email) {
    mail.subject = 'Trash';
  }

  public log_out() {
    this.router.navigate(['login/']);
  }

  subject: string = '';
  message: string = '';

  public send_mail() {
    const d: Date = new Date();

    this.dataSource.push({
      sender: 'Yo',
      topic: this.subject,
      date: d.toLocaleString(),
      noti: 'notifications_none',
      subject: 'Sent',
      message: this.message,
    });
    this.selected_contact = '';
    this.subject = '';
    this.message = '';
    document.getElementById('send-mail').style.display = 'none';
  }

  public close(id: string) {
    this.selected_contact = '';
    document.getElementById(id).style.display = 'none';
    this.selected_contact = '';
    this.subject = '';
    this.message = '';
  }

  public open(id: string) {
    document.getElementById(id).style.display = 'block';
  }

  public answer(id: string, contact: string, subject: string) {
    event.stopPropagation();
    this.open(id);
    this.selected_contact = contact;
    var str = new String('RE: ');
    this.subject = str.concat(subject);
  }

  public resend(id: string, subject: string, message: string) {
    event.stopPropagation();
    this.open(id);
    var str = new String('FWD: ');
    this.subject = str.concat(subject);
    this.message = message;
  }

  public choose_contact(contact_name: string) {
    this.selected_contact = contact_name;
    this.open('send-mail');
  }

  CONTACT_DATA: contact[] = [
    {
      name: 'JORGE RODRIGUEZ FRAILE',
      mail: 'JRodriguez@alumnos.uc3m.es',
    },
    {
      name: 'CARLOS RUBIO OLIVARES',
      mail: 'CROlivares@alumnos.uc3m.es',
    },
    {
      name: 'RAUL GIMENEZ DE DIOS',
      mail: 'raulGDDios@alumnos.uc3m.es',
    },
    {
      name: 'CARLOS LINARES LOPEZ',
      mail: 'CLLopez@profesores.uc3m.es',
    },
    {
      name: 'ISRAEL GONZALEZ CARRASCO',
      mail: 'IGCarrasco@profesores.uc3m.es',
    },
  ];
}

export interface contact {
  name: string;
  mail: string;
}
export interface email {
  sender: string;
  topic: string;
  date: string;
  noti: string;
  subject: string;
  message: string;
}

const ELEMENT_DATA: email[] = [
  {
    sender: 'JORGE RODRIGUEZ FRAILE',
    topic: 'Meeting of 05/15',
    date: '07/05/2021 10:48PM',
    noti: 'notifications_none',
    subject: 'ML',
    message:
      'Hi, I have been talking with the other colleagues and I think it would be good for us to leave the meeting for the 16th. This way we will be able to bring the points clearer and I am waiting for your answer',
  },
  {
    sender: 'CARLOS RUBIO OLIVARES',
    topic: 'Exercises for tomorrow\'s exam',
    date: '04/29/2021 09:03AM',
    noti: 'notifications_none',
    subject: 'C',
    message:
      'Hi, do you have the review exercises for tomorrow\'s exam? I have formatted the computer and lost the documents. Pass them to me when you can, please.',
  },
  {
    sender: 'JORGE RODRIGUEZ FRAILE',
    topic: 'Practice delivery',
    date: '28/03/2021 17:53PM',
    noti: 'notifications_none',
    subject: 'ML',
    message:
      'Practice 2 I\'ve submitted it, but it doesn\'t show up as submitted, only as a draft. can you try submitting it yourself? If not, I will have to send an email to the teacher.',
  },
  {
    sender: 'RAUL GIMENEZ DE DIOS',
    topic: 'Documents to deliver',
    date: '04/25/2021 12:11AM',
    noti: 'notifications_none',
    subject: 'SDPM',
    message:
      'I have been looking at the SDPM documents left to send and there are only the last 2 left.I am going to take care of generating a draft and send them to you to fill in what is left and format it.'
  },
  {
    sender: 'RAUL GIMENEZ DE DIOS',
    topic: 'Angular Doubt',
    date: '20/04/2021 19:35PM',
    noti: 'notifications_none',
    subject: 'DIS',
    message:
      'I\'m writing to let you know if it takes too long to start a website in angular, as it takes me about 5 minutes. If you have the same problem we can post a message in the forum.',
  },
];
