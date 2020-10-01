import {
  Component,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { TableConfig } from '@shared/models';
@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
})
export class ResultadoComponent implements OnChanges {
  @Input() isPaginated = true;

  @Input() nome: string;

  @Input() pageIndex = 0;

  @Input() pageSize = 10;

  @Input() length;

  @Input() pageSizeOptions = [5, 10, 15, 30, 50];

  @Input() result: any[] = [];

  @Input() tableConfig: TableConfig[] = [];

  @Input() filters: any;

  @Input() sortId: string;

  @Input() sortDirection: string;

  @Input() isLoadingResults = false;

  @Output() handlePageChanged = new EventEmitter();

  @Output() handleSortChanged = new EventEmitter();

  dataSource: MatTableDataSource<any>;

  displayedColumns: string[] = [];

  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    Object.keys(changes).map((prop) => {
      switch (prop) {
        case 'result':
          if (!this.isLoadingResults) {
            this.dataSource = new MatTableDataSource(this.result);

            if (!this.length) {
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            }
          }
          break;

        case 'tableConfig':
          this.displayedColumns = [];
          this.tableConfig.forEach((val) => {
            this.displayedColumns.push(val.campo);
          });
          break;

        case 'length':
          this.pageIndex = 0;
          if (this.length === 0) this.dataSource = new MatTableDataSource();
          break;

        default:
      }
    });
  }

  onPageChanged(event) {
    event.filters = this.filters;
    event.active = this.sort.active;
    event.direction = this.sort.direction;

    this.handlePageChanged.emit(event);
  }

  onSortChanged(event) {
    event.filters = this.filters;
    event.pageIndex = this.paginator.pageIndex;
    event.pageSize = this.paginator.pageSize;
    event.active = this.sort.active;
    event.direction = this.sort.direction;

    this.handleSortChanged.emit(event);
  }
}
