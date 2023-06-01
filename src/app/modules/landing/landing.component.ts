import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent {
  private newLabel? = 'New label';

  constructor() {
    Chart.register(Annotation);
  }

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [65, 59, 80, 81, 56, 55, 40],
        label: '',
        backgroundColor: 'rgba(245, 255, 247, 1)',
        borderColor: 'rgba(103, 179, 117, 1)',
        pointBackgroundColor: 'rgba(148,159,177,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(148,159,177,0.8)',
        fill: 'origin',
      },
    ],
    labels: [
      '07 فبراير',
      '06 فبراير',
      '05 فبراير',
      '04 فبراير',
      '03 فبراير',
      '02 فبراير',
      '01 فبراير',
    ],
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.5,
      },
      point: {
        pointStyle: false,
      },
    },
    scales: {
      y: {
        position: 'right',

        grid: {
          display: false,
        },
        ticks: {
          callback: function (value, index, values) {
            return 'ريال' + value;
          },
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },

    plugins: {
      legend: { display: false },
      annotation: {
        annotations: [
          {
            type: 'line',
            scaleID: 'x',
            borderColor: 'white',
            borderWidth: 2,
            label: {
              display: true,
              position: 'center',
              color: 'orange',
              content: 'LineAnno',
              font: {
                weight: 'bold',
              },
            },
          },
        ],
      },
    },
  };
  public lineChartType: ChartType = 'line';
}
