import { Injectable } from '@angular/core';
import { BuildSetModel } from './models/build-set-model';

@Injectable({
  providedIn: 'root'
})
export class BuildSetService {
  private buildSets: BuildSetModel[] = [
    {
      id: 1,
      name: '4x4 Terreinambulance redding',
      setNumber: 40582,
      age: '8+',
      amountBricks: 150,
      description: 'Kinderen kunnen de gebaande paden verlaten voor heldhaftige reddingsavonturen met deze Lego City 4x4 Terreinambulance redding (40582) speelset, die bestaat uit een stoere speelgoedambulance, een mountainbike en een omgeving met een onverharde ondergrond.',
      photoUrl: 'https://picsum.photos/id/1011/200/300',
      builderUrl: 'https://www.lego.com/nl-be/service/building-instructions/40582'
    },
    {
      id: 2,
      name: 'Nintendo Entertainment System™',
      setNumber: 71374,
      age: '18+',
      amountBricks: 2646,
      description: 'Herbeleef nostalgische videogameherinneringen met deze bouwbare NES-console inclusief retro-tv, controller en een Super Mario Bros.-gamecartridge.',
      photoUrl: 'https://picsum.photos/id/1025/200/300',
      builderUrl: 'https://www.lego.com/nl-be/service/building-instructions/71374'
    },
    {
      id: 3,
      name: 'Hogwarts™ Kasteel',
      setNumber: 71043,
      age: '16+',
      amountBricks: 6020,
      description: 'Dit gedetailleerde LEGO® Harry Potter™ Hogwarts™ kasteel zit boordevol torens, kamers, klaslokalen en nog veel meer iconische details uit de films.',
      photoUrl: 'https://picsum.photos/id/1043/200/300',
      builderUrl: 'https://www.lego.com/nl-be/service/building-instructions/71043'
    },
    {
      id: 4,
      name: 'NASA Apollo Saturn V',
      setNumber: 92176,
      age: '14+',
      amountBricks: 1969,
      description: 'Bouw en ontdek de iconische NASA Apollo Saturn V raket. Deze indrukwekkende replica is bijna 1 meter hoog en bevat 3 afneembare rakettrappen en een maanlander.',
      photoUrl: 'https://picsum.photos/id/1062/200/300',
      builderUrl: 'https://www.lego.com/nl-be/service/building-instructions/92176'
    }
  ];

  getBuildSets(): BuildSetModel[] {
    return this.buildSets;
  }
}
