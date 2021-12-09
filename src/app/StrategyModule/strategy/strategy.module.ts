import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStrategiesComponent } from './list-strategies/list-strategies.component';
import {CardModule} from 'primeng/card';
import { HttpClientModule } from '@angular/common/http';
import {InputSwitchModule} from 'primeng/inputswitch';
import {ToggleButtonModule} from 'primeng/togglebutton';
import { FormsModule } from '@angular/forms';
import {DataViewModule} from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { AddstrategiesComponent } from './addstrategies/addstrategies.component';
import { StrategiespageComponent } from './strategiespage/strategiespage.component';
import {FieldsetModule} from 'primeng/fieldset';
import {InputTextModule} from 'primeng/inputtext';
import {CheckboxModule} from 'primeng/checkbox';
import {RadioButtonModule} from 'primeng/radiobutton';
import {RippleModule} from 'primeng/ripple';
import {DividerModule} from 'primeng/divider';
import {PickListModule} from 'primeng/picklist';
import { ChipModule } from 'primeng/chip';


@NgModule({
  declarations: [
    ListStrategiesComponent,
    AddstrategiesComponent,
    StrategiespageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    InputSwitchModule,
    ToggleButtonModule,
    DataViewModule,
    ButtonModule,
    DropdownModule,
    FieldsetModule,
    InputTextModule,
    RadioButtonModule,
    DividerModule,
    PickListModule,
    RippleModule,
    ChipModule
  ]
})
export class StrategyModule { }
