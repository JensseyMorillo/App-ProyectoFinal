import { AfterContentChecked, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import SwiperCore, {EffectCoverflow, SwiperOptions } from 'swiper';
import { SwiperComponent } from 'swiper/angular';

// install Swiper modules
SwiperCore.use([EffectCoverflow]);

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InicioPage implements AfterContentChecked{

  @ViewChild('swiper') swiper!: SwiperComponent;

  config: SwiperOptions ={
    slidesPerView: 1,
    effect: 'coverflow'
  }

  slides: {img: string, titulo: string, desc: string}[] = [
    {
      img: 'assets/img/sliders/cap1.PNG',
      titulo: 'Defensa civil capacito al personal de la direccion general de aduanas',
      desc: 'Esta capacitación fue impartida por el instructor Kelvinson Cáceres, encargado de la División de Brigadas del Departamento de Operaciones.'
    },
    {
      img: 'assets/img/sliders/cap2.PNG',
      titulo: 'Pedro Álvarez, asesor de (vomade.vincit) visito la defensa civil',
      desc: 'El director ejecutivo de la Defensa Civil y presidente de la Comisión Nacional de Emergencias (CNE) recibió Pedro Álvarez.'
    },
    {
      img: 'assets/img/sliders/cap3.PNG',
      titulo: 'Autoridades de San Juan reciben "agenda temática para la gestión de riesgos"',
      desc: 'Esta actividad contó con el apoyo de la Unión Europea y fue encabezada por Juan Salas.'
    },
    {
      img: 'assets/img/sliders/cap4.PNG',
      titulo: 'Visita a pedernales',
      desc: 'en la Primera Vista Pública del proyecto de desarrollo turístico de esta provincia, que promete elevar el nombre del país a nivel internacional y al mismo tiempo, mejorar la calidad de vida de su gente.'
    },
    {
      img: 'assets/img/sliders/cap5.PNG',
      titulo: 'Personal de la defensa civil refrescan conocimiento en primeros auxilio y rescate',
      desc: 'Los entrenamientos los ofrecieron técnicos de la Escuela Nacional.'
    },
    {
      img: 'assets/img/sliders/cap6.PNG',
      titulo: 'Defensa civil, gobernadora de el seibo y fundación Fernández coordinan acogia de ucranianos',
      desc: 'Se trata de una acción preventiva que busca garantizar un espacio.'
    },
    {
      img: 'assets/img/sliders/cap7.PNG',
      titulo: 'Defensa civil conformó la asociación de servidor público',
      desc: 'El pasado 7 de marzo del presente año, fue conformada la Asociación de Servidores Públicos de la Defensa Civil.'
    },
    {
      img: 'assets/img/sliders/cap8.PNG',
      titulo: 'La defensa civil conmemoró el día de la mujer por todo lo alto',
      desc: 'Esta incluyó rifas, sorpresas y una charla, "La Mujer en Gestión de Riesgos”.'
    },
    {
      img: 'assets/img/sliders/cap9.PNG',
      titulo: 'Personal de la defensa civil rcuperaron cuerpo de hombre en la provincia duarte',
      desc: 'Localizaron el cadáver de un hombre que había sido reportado como desaparecido al caer en agua del rio Cuaba, el pasado 7 de marzo.'
    },
    {
      img: 'assets/img/sliders/cap10.PNG',
      titulo: 'Comité técnico nacional se reúne en ministerio de agricultura',
      desc: 'Para sensibilizar a los miembros del Comité.'
    },
    {
      img: 'assets/img/sliders/cap11.PNG',
      titulo: 'Embajador de República Dominicana en Cuba visitó la defensa civil',
      desc: 'El diplomático estuvo acompañado por el Primer secretario de Asuntos Económicos y Comerciales de la Embajada de Hungría en Cuba, Dénes Bodnár.'
    },
    {
      img: 'assets/img/sliders/cap12.PNG',
      titulo: 'La defensa civil coodina acciones con miras a semana santa',
      desc: 'Rodríguez, aprovecho la vista y realizó un recorrido por los puntos de la playa, donde se instalarán puestos de Socorro de la Defensa Civil.'
    },
    {
      img: 'assets/img/sliders/cap13.PNG',
      titulo: 'Director ejecutivo de la defensa civil visita la regional ozama',
      desc: 'El encuentro tuvo por finalidad, hacer un levantamiento de necesitades de cara a las labores preventivas y de asistencia que brindará el organismo.'
    },
    {
      img: 'assets/img/sliders/cap14.PNG',
      titulo: 'Defensa civil participó en taller para mejorar la toma de decisiones ante inundaciones',
      desc: 'Con la finalidad de profundizar en los procesos de toma de decisiones para la alerta de inundaciones.'
    },
    {
      img: 'assets/img/sliders/cap15.PNG',
      titulo: 'Personal de la defensa civil participó en simulacro de accidente aéreo',
      desc: 'La cual golpea el suelo al piloto perder en control de la nave.'
    },
    {
      img: 'assets/img/sliders/cap16.PNG',
      titulo: 'CNE firma acuerdo de cooperción con organización internacional para las migraciones',
      desc: 'El acuerdo fue suscrito por el presidente de la CNE y director ejecutivo de la Defensa Civil, Juan Salas y el jefe de misión de la OIM.'
    },
    {
      img: 'assets/img/sliders/cap17.PNG',
      titulo: 'De cara a semana santa, defensa civil realiza jornada de reforzamiento en primeros auxilios y rescate acuático',
      desc: 'Con la finalidad de estar mejor preparados para atender a la población durante la Semana Santa.'
    },
    {
      img: 'assets/img/sliders/cap18.PNG',
      titulo: 'CNE y OIM capacitaron instituciones gestoras de alojamientos temporales en el país',
      desc: 'Para reforzar las labores humanitarias que ambas instituciones realizan.'
    },
    {
      img: 'assets/img/sliders/cap19.PNG',
      titulo: 'Defensa civil brindó apoyo a crucero encallado en Puerto Plata',
      desc: 'Las acciones de lugar fueron coordinadas por nuestro director provincial Whascar De Jesús García y contó con el apoyo de la gobernadora.'
    },
    {
      img: 'assets/img/sliders/cap20.PNG',
      titulo: 'Ministerio de la mujer reconoció voluntaria de la defensa civil',
      desc: 'La Defensa Civil se enorgullece del reconocimiento que le otorgo el Ministerio de la Mujer a Iris Anabel voluntaria estrella de la institución.'
    },
    {
      img: 'assets/img/sliders/cap21.PNG',
      titulo: 'Defensa civil y el ministerio de turismo capacitó a personal hotelero',
      desc: 'Que busca preparar a todo el personal que opera en playas y balnearios a nivel nacional.'
    },
    {
      img: 'assets/img/sliders/cap22.PNG',
      titulo: 'Comisión nacional de emergencias realizó su 3ra reunión ordinaria',
      desc: 'El pasado 16 de marzo, se realizó la 3ra reunión ordinaria de la Comisión Nacional de Emergencias, encabezada por su presidente y director.'
    },
    {
      img: 'assets/img/sliders/cap23.PNG',
      titulo: 'Miembros del comité tecnico provincial de Puerto Plata recibe capacitación',
      desc: 'Se impartió con la finalidad de reforzar las políticas gestoras de los centros colectivos en el país.'
    },
    {
      img: 'assets/img/sliders/cap24.PNG',
      titulo: 'Personal de la defensa ivil realizó levantamiento de balnearios en Valverde',
      desc: 'Realizaron supervisión y levantamiento de información, de los balnearios mas utilizados por las personas durante el asueto de Semana Santa.'
    },
    {
      img: 'assets/img/sliders/cap25.PNG',
      titulo: 'Defensa civil lanzó campaña "aprendiendo a salvar vidas" previo a semana santa',
      desc: 'La misma se realizó a través de la Escuela Nacional de Gestión de Riesgos (ESNAGERI).'
    },
    {
      img: 'assets/img/sliders/cap26.PNG',
      titulo: 'Defensa civil participo en actividades por la "semana del agua Pedernales 2022"',
      desc: 'Las actividades, buscaban sobre todo preservar los recursos hídricos del país.'
    },
    
  ];


  constructor() { }

  ngAfterContentChecked() {
    if(this.swiper) {
      this.swiper.updateSwiper({});
    }
  }

  swiperSlideChanged() {
    console.log('changed: ');
  }

  touchAllowed = false;

  next() {
    this.swiper.swiperRef.slideNext(500);
  }

  prev() {
    this.swiper.swiperRef.slidePrev(500);
  }

  toggleTouch() {
    this.touchAllowed = !this.touchAllowed;
    this.swiper.swiperRef.allowTouchMove = this.touchAllowed;
  }

}
