import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  search_main: string = '';
  selected_subject: string = '';

  displayedColumns: string[] = ['Usuario', 'Asunto', 'Fecha'];
  dataSource = ELEMENT_DATA;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  public silent(nombre: string) {
    for (let i = 0; i < this.dataSource.length; i++) {
      if (this.dataSource[i].sender === nombre)
        if (this.dataSource[i].noti === 'notifications_none')
          this.dataSource[i].noti = 'notifications_off';
        else this.dataSource[i].noti = 'notifications_none';
    }
  }

  public change_subject(nombre_subject: string) {
    this.selected_subject = nombre_subject;
    this.router.navigate(['main/' + nombre_subject]);
  }

  public isSubject(nombre_subject: string) {
    if (this.selected_subject == '' && nombre_subject !== 'Papelera')
      return true;

    if (nombre_subject == this.selected_subject) return true;

    return false;
  }
  public borrar_mail(mail: email) {
    mail.subject = 'Papelera';
  }
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
    topic: 'Reunión del día 15/05',
    date: '07-05-2021 10:48PM',
    noti: 'notifications_none',
    subject: 'AA',
    message: 'Hola',
  },
  {
    sender: 'CARLOS RUBIO OLIVARES',
    topic: 'Examen mañana',
    date: '07-05-2021 10:48PM',
    noti: 'notifications_none',
    subject: 'PL',
    message: 'Luego reviso lo que me has mandado',
  },
  {
    sender: 'JORGE RODRIGUEZ FRAILE',
    topic: 'Entrega',
    date: '07-05-2021 10:48PM',
    noti: 'notifications_none',
    subject: 'AA',
    message:
      'El ejecicio 12 lo he enviado, pero no aparece como entregado, solo como borrador.',
  },
  {
    sender: 'RAUL GIMENEZ DE DIOS',
    topic: 'Duda Angular',
    date: '07-05-2021 10:48PM',
    noti: 'notifications_none',
    subject: 'DPDS',
    message: 'Adios',
  },
  {
    sender: 'RAUL GIMENEZ DE DIOS',
    topic: 'Duda Angular',
    date: '07-05-2021 10:48PM',
    noti: 'notifications_none',
    subject: 'off-topic',
    message: 'Adios',
  },
];

