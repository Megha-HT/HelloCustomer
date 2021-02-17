import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatCardModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatRadioModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatSelectModule,
        MatCardModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatRadioModule
    ]
})
export class MaterialModule { }