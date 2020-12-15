import { Component, OnInit } from '@angular/core';
import {CovidApiService} from '../../covid-api.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countires=[];
  constructor(_CovidApiService:CovidApiService) {

    //get the data from The Api
    _CovidApiService.getAffectedCountries().subscribe((data)=>{
      this.countires=data.Countries;
    },

    (err)=>{console.log(err)});
  }

  ngOnInit(): void {
  }

}
