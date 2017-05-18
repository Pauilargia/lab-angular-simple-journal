import { Routes } from '@angular/router';

import { JournalEntriesComponent } from './journal-entries/journal-entries.component';


export const routes: Routes = [
    { path: 'api/journal-entries', component: JournalEntriesComponent },
    { path: '**', redirectTo: '' }
];
