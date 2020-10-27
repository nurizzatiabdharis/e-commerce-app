import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  myHistoryList = [];
  isGiveDetails: boolean;
  showDetailsId: 0;

  constructor(private historyService: HistoryService) { }

  ngOnInit() {
    this.myHistoryList = this.historyService.getHistory();
  }
}
