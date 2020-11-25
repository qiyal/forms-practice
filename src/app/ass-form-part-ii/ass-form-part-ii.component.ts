import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ass-form-part-ii',
  templateUrl: './ass-form-part-ii.component.html',
  styleUrls: ['./ass-form-part-ii.component.scss']
})
export class AssFormPartIiComponent implements OnInit {
  form1: Form1;

  constructor() { }

  ngOnInit(): void {
    this.form1 = {
      form2: {
        form2Line: '',
        form21: {
          form21Line: ''
        },
        form22: {
          form22ine: ''
        }
      },
      form3: {
        form3Line: '',
        form31: {
          form31Line: ''
        }
      },
      form4: {
        form4Line: '',
        form41: {
          form41Line: ''
        }
      }
    };
  }

  submitForm() {
    console.log(this.form1);
  }
}

export class Form1 {
  form2: Form2;
  form3: Form3;
  form4: Form4;
}

export class Form2 {
  form2Line: string;
  form21: Form21;
  form22: Form22;
}

export class Form21 {
  form21Line: string;
}

export class Form22 {
  form22ine: string;
}

export class Form3 {
  form3Line: string;
  form31: Form31;
}

export class Form31 {
  form31Line: string;
}

export class Form4 {
  form4Line: string;
  form41: Form41;
}

export class Form41 {
  form41Line: string;
}


