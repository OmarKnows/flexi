import { Component, ViewChild } from '@angular/core';
import { Chart, ChartConfiguration, ChartType, ChartOptions } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

import { default as Annotation } from 'chartjs-plugin-annotation';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
})
export class StatisticsComponent {
  chartOptions: ChartOptions<'doughnut'> = {
    cutout: '85%',
    plugins: {
      legend: {
        position: 'bottom', // Place the legend below the chart
        rtl: true,
        display: false,
      },
    },
  };

  public chartData = {
    labels: [
      'ارباح الإشتراكات',
      'ارباح المبيعات',
      'عدد المشتركين',
      'عدد المبيعات',
    ],
    datasets: [
      {
        data: [40, 30, 10, 20],
        backgroundColor: [
          'rgb(103, 179, 117)',
          'rgb(1, 192, 246)',
          'rgb(255, 128, 0)',
          'rgb(255, 186, 52)',
        ],
        borderRadius: 10,
        offset: 15,
      },
    ],
  };

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
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y: {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {},
        ticks: {},
      },
    },

    plugins: {
      legend: { display: true },
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

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;

  private static generateNumber(i: number): number {
    return Math.floor(Math.random() * (i < 2 ? 100 : 1000) + 1);
  }

  public randomize(): void {
    for (let i = 0; i < this.lineChartData.datasets.length; i++) {
      for (let j = 0; j < this.lineChartData.datasets[i].data.length; j++) {
        this.lineChartData.datasets[i].data[j] =
          StatisticsComponent.generateNumber(i);
      }
    }
    this.chart?.update();
  }

  public hideOne(): void {
    const isHidden = this.chart?.isDatasetHidden(1);
    this.chart?.hideDataset(1, !isHidden);
  }

  public pushOne(): void {
    this.lineChartData.datasets.forEach((x, i) => {
      const num = StatisticsComponent.generateNumber(i);
      x.data.push(num);
    });
    this.lineChartData?.labels?.push(
      `Label ${this.lineChartData.labels.length}`
    );

    this.chart?.update();
  }

  public changeColor(): void {
    this.lineChartData.datasets[2].borderColor = 'green';
    this.lineChartData.datasets[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;

    this.chart?.update();
  }
}
