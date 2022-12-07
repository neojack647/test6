import { NgModule } from '@angular/core';
// import { CovalentCommonModule } from '@covalent/core/common';
import { CovalentLoadingModule } from '@covalent/core/loading';
import { CovalentDialogsModule } from '@covalent/core/dialogs';
import { CovalentSearchModule } from '@covalent/core/search';
// import { CovalentChipsModule } from '@covalent/core/chips';
// import { CovalentStepsModule } from '@covalent/core/steps';
// import { CovalentMediaModule } from '@covalent/core/media';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
            // CovalentCommonModule,
            CovalentLoadingModule,
            CovalentDialogsModule,
            CovalentSearchModule,
            // CovalentChipsModule,
            // CovalentStepsModule,
            // CovalentMediaModule,
            MatCardModule,
            MatCheckboxModule,
            MatInputModule,
            MatSelectModule,
            MatAutocompleteModule,
            MatButtonModule,
            MatRadioModule,
            MatMenuModule,
            MatIconModule,
            MatChipsModule,
            MatTabsModule,
            MatDialogModule,
            MatGridListModule,
            MatPaginatorModule,
            MatDatepickerModule,
            MatProgressSpinnerModule,
            MatProgressBarModule,
            MatTooltipModule,
            MatMomentDateModule,
            MatDividerModule,
            MatButtonToggleModule,
            MatStepperModule
    ],
    exports: [
        // CovalentCommonModule,
        CovalentLoadingModule,
        CovalentDialogsModule,
        CovalentSearchModule,
        // CovalentChipsModule,
        // CovalentStepsModule,
        // CovalentMediaModule,
        MatCardModule,
        MatCheckboxModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        MatButtonModule,
        MatRadioModule,
        MatMenuModule,
        MatIconModule,
        MatChipsModule,
        MatTabsModule,
        MatDialogModule,
        MatGridListModule,
        MatPaginatorModule,
        MatDatepickerModule,
        MatProgressSpinnerModule,
        MatProgressBarModule,
        MatTooltipModule,
        MatMomentDateModule,
        MatDividerModule,
        MatButtonToggleModule,
        MatStepperModule
    ]
})
export class MaterialCovalentModule {}

