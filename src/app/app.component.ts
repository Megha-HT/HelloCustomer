import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

interface language {
  value: string;
  label: string;
}

interface role {
  roleName: string;
  desc: string
}

interface access{
  name: string,
  value: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-project-hello-customer';
  roleSelected = false;
  panelOpenState = false;
  PersonalInformationForm: FormGroup;
  languages: language[] = [
    { value: 'en', label: 'English' },
    { value: 'fr', label: 'French' },
    { value: 'nl', label: 'Netherlands' },
    { value: 'de', label: 'Deustch' },
  ];

  accesses : access[] = [
      { name: 'ded', value: 'Default' },
      { name: 'dec', value: 'Custom NPS Dashboard' },
      { name: 'de2d', value: 'Default' },
      { name: 'red', value: 'Default' },
      { name: 're2d', value: 'Default' }
    ];


  roles: role[] = [
    { roleName: 'Admin', desc: 'Can edit and view everything in the application' },
    { roleName: 'Manager', desc: 'Can view TPs, analysis, reports, dashboards, conversations' },
    { roleName: 'Employee', desc: 'Has access only to personally assigned data' }
  ]
  constructor(private formBuilder: FormBuilder) {

  }

  languagea: string;
  ngOnInit() {
    this.PersonalInformationForm = this.formBuilder.group({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      languagea: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      confirmEmail: new FormControl('', Validators.compose([
        Validators.required,
        Validators.maxLength(80),
        Validators.pattern("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$")
      ])),
      role: new FormControl(''),
      access: new FormControl('')
    })
  }


  selectedRole: any;
  selectRole(role: string) {
    this.roleSelected = true;
    this.selectedRole = role;
  }

  onSubmit() {
    console.log(this.PersonalInformationForm.value);
  }

  reset()
  {
    this.PersonalInformationForm.reset();
  }
}
