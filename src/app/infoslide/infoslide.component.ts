import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-infoslide',
  templateUrl: './infoslide.component.html',
  styleUrls: ['./infoslide.component.css']
})
export class InfoslideComponent implements OnInit {

  constructor(private el: ElementRef) { }
  ngOnInit(): void {
  }
  }
