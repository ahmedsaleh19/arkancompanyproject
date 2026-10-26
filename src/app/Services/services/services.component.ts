import { Component } from '@angular/core';
import { IServices } from '../../models/iservices';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from '../../Directives/highlight.directive';
import { FontColorDirective } from '../../Directives/font-color.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, HighlightDirective,FontColorDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
[x: string]: any;
  services: IServices[];
  constructor() {
    this.services = [
      {
        id: 1,
        imgUrl: 'assets/images/internal-disgin.jpg',
        iconUrl:'' ,
        title: 'Interior Design',
        subtitle: 'A sophisticated contemporary living room ',
        description:
          'featuring carefully balanced furniture, elegant color coordination, decorative wall treatments, refined materials, layered lighting, and a cohesive interior design concept.',
      },
      {
        id: 2,
        imgUrl: 'assets/images/3D.jpg',
        iconUrl:'' ,
        title: '3D Visualization',
        subtitle: 'A professional architectural visualization workstation ',
        description:
          'showing a realistic 3D-rendered luxury interior on a large computer monitor, with subtle architectural wireframe or floor-plan elements visible on a screen. ',
      },
      {
        id: 3,
        imgUrl: 'assets/images/Turnkey-Finishing.jpg',
        iconUrl:'' ,
        title: 'Turnkey Finishing',
        subtitle: 'A realistic interior finishing project in progress',
        description:
          'showing a clean, spacious apartment with professionally finished walls, flooring installation, organized tools, and skilled workers performing finishing work safely.',
      },
      {
        id: 4,
        imgUrl: 'assets/images/Gypsum.jpg',
        iconUrl:'' ,
        title: 'Gypsum & False Ceilings',
        subtitle: 'A premium contemporary interior ',
        description:
          'featuring a detailed gypsum-board suspended ceiling, clean geometric ceiling levels, concealed cove lighting, recessed spotlights, and precise finishing',
      },
      {
        id: 5,
        imgUrl: 'assets/images/Electrical.jpg ',
        iconUrl:'' ,
        title: 'Electrical & Lighting',
        subtitle: 'A professional electrician',
        description:
          ' installing architectural lighting in a modern interior, with recessed spotlights, pendant lights, organized electrical components, and realistic technical details.',
      },
      {
        id: 6,
        imgUrl: 'assets/images/Kitchens.jpg',
        iconUrl:'' ,
        title: 'Custom Joinery & Kitchens',
        subtitle: 'A luxurious modern kitchen',
        description:
          ' featuring custom wood cabinetry, integrated appliances, a marble island, precise joinery details, elegant hardware, and warm architectural lighting.',
      },
      {
        id: 7,
        imgUrl: 'assets/images/Flooring.jpg ',
        iconUrl:'' ,
        title: 'Flooring & Wall Finishes',
        subtitle: 'A premium interior',
        description:
          'showcasing beautifully installed large-format porcelain or marble flooring, refined wall cladding, precise tile alignment, realistic stone textures, ',
      },
      {
        id: 8,
        imgUrl: 'assets/images/Renovation.jpg ',
        iconUrl:'' ,
        title: 'Renovation & Remodeling',
        subtitle: 'A realistic before-and-after ',
        description:
        'renovation concept within a single continuous architectural scene: one side shows an older unfinished interior, while the other shows the same space',
      },
      {
        id: 9,
        imgUrl: 'assets/images/Supervision.jpg ',
        iconUrl:'' ,
        title: 'Project Supervision',
        subtitle: 'A professional site engineer',
        description:
        ' or project supervisor wearing appropriate PPE and reviewing architectural drawings on a finishing site, with workers and interior finishing details ',
      },
    ];
  }
}
