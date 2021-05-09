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
  selected_subject: string = '';
  selected_contact: string = '';
  texto_redactar: string = 'Redactar';

  displayedColumns: string[] = ['Usuario', 'Asunto', 'Fecha'];
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

  public change_subject(nombre_subject: string) {
    this.selected_subject = nombre_subject;
    this.router.navigate(['main/' + nombre_subject]);
  }

  public isSubject(nombre_subject: string) {
    if (
      this.selected_subject == '' &&
      nombre_subject !== 'Papelera' &&
      nombre_subject !== 'Enviado'
    )
      return true;

    if (nombre_subject == this.selected_subject) return true;

    return false;
  }
  public borrar_mail(mail: email) {
    mail.subject = 'Papelera';
  }

  public cerrar_sesion() {
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
      subject: 'Enviado',
      message: this.message,
    });
    this.selected_contact = '';
    this.subject = '';
    this.message = '';
    document.getElementById('send-mail').style.display = 'none';
  }

  public cerrar(id: string) {
    this.selected_contact = '';
    document.getElementById(id).style.display = 'none';
    this.selected_contact = '';
    this.subject = '';
    this.message = '';
  }

  public abrir(id: string) {
    document.getElementById(id).style.display = 'block';
  }

  public responder(id: string, contacto: string, subject: string) {
    event.stopPropagation();
    this.abrir(id);
    this.selected_contact = contacto;
    var str = new String('RE: ');
    this.subject = str.concat(subject);
  }

  public reenviar(id: string, subject: string, message: string) {
    event.stopPropagation();
    this.abrir(id);
    var str = new String('FWD: ');
    this.subject = str.concat(subject);
    this.message = message;
  }

  public escoger_contacto(nombre_contacto: string) {
    this.selected_contact = nombre_contacto;
    this.abrir('send-mail');
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
    topic: 'Reunión del día 15/05',
    date: '07/05/2021 10:48PM',
    noti: 'notifications_none',
    subject: 'AA',
    message: 'Hola, he estado hablando con los demás compañeros y creo que nos vendría bien dejar la reunión para el día 16. Así podremos llevar los puntos más claros.Espero tu respuesta',
  },
  {
    sender: 'CARLOS RUBIO OLIVARES',
    topic: 'Ejercicios del examen de mañana',
    date: '29/04/2021 09:03AM',
    noti: 'notifications_none',
    subject: 'PL',
    message: 'Buenas, ¿tienes los ejercicios de repaso para el examen de mañana? He formateado el ordenador y he perdido los documentos. Pasamelos cuando puedas, por favor.',
  },
  {
    sender: 'JORGE RODRIGUEZ FRAILE',
    topic: 'Entrega de la práctica.',
    date: '28/03/2021 17:53PM',
    noti: 'notifications_none',
    subject: 'AA',
    message:
      'La práctica 2 la he enviado, pero no aparece como entregado, solo como borrador. ¿Puedes probar a enviarlo tú? Si no, tendré que enviar un correo al profesor.',
  },
  {
    sender: 'RAUL GIMENEZ DE DIOS',
    topic: 'Documentos a entregar',
    date: '25/04/2021 12:11AM',
    noti: 'notifications_none',
    subject: 'DPDS',
    message: 'He estado mirando los documentos de DPDS que quedan por mandar y sólo quedan los 2 últimos.Me voy a encargar de generar un borrador y te los enviaré para rellenar lo que queda y formatearlo.',
  },
  {
    sender: 'RAUL GIMENEZ DE DIOS',
    topic: 'Duda Angular',
    date: '20/04/2021 19:35PM',
    noti: 'notifications_none',
    subject: 'DSI',
    message: 'Te escribo para comentarte si tardas mucho en iniciar una web en angular, ya que a mi me tarda como unos 5 minutos. Si tienes el mismo problema podemos postear un mensaje en el foro.',
  },
];

