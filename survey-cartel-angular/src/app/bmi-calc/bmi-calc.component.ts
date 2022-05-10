import { Component, OnInit } from '@angular/core';
import { BmicalcservService } from 'src/Services/bmicalcserv.service';

@Component({
  selector: 'app-bmi-calc',
  templateUrl: './bmi-calc.component.html',
  styleUrls: ['./bmi-calc.component.css']
})
export class BmiCalcComponent implements OnInit {

  public BmiRecivedResponse=[] as any;


  public bmiDetails = {
    height: '',
    weight: ''
  } 
  constructor(private bmicalcservService: BmicalcservService) { }

  ngOnInit(): void {
  }

  formSubmit()
  {

    this.bmicalcservService.calculateBmi(this.bmiDetails.height, this.bmiDetails.weight).subscribe((bmiresponse: any) => {

      this.BmiRecivedResponse = bmiresponse;
      console.log(this.BmiRecivedResponse);
      // console.log(this.BmiRecivedResponse.info.bmi);
    },
    (error) => {
      console.log(error);
    }
  )

  }

}
