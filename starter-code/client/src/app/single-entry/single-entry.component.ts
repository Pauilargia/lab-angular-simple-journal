import { Component, OnInit } from '@angular/core';
import { JournalService } from '../service/journal.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entryId: string
  singleEntry: any

  constructor(public journalSvc: JournalService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => { this.entryId = String(params['id']) } )
    this.journalSvc.get(this.entryId).subscribe( journal => {
      this.singleEntry = journal})
  }

}
