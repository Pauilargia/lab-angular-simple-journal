import { Component, OnInit } from '@angular/core';
import { JournalService } from '../service/journal.service'

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journal: Array<any>

  constructor(public journalSvc: JournalService) { }

  ngOnInit() {
    this.journalSvc.getList().subscribe((journal) => { this.journal = journal })
  }

}
