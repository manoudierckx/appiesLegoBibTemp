import { Component, inject, OnInit } from '@angular/core';
import { BuildSetService } from '../build-set-service';
import { BuildSetModel } from '../build-set-model';

@Component({
  selector: 'app-build-set-component',
  imports: [],
  templateUrl: './build-set-component.html',
  styleUrl: './build-set-component.css'
})
export class BuildSetComponent implements OnInit {
  private buildSetService = inject(BuildSetService);

  buildSetList: BuildSetModel[] = [];

  ngOnInit(): void {
      this.buildSetList = this.buildSetService.getBuildSets();
  }
}
