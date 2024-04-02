import { Chart } from 'react-chartjs-2';

import {
  ArcElement,
  Chart as ChartJS,
  DoughnutController,
  LinearScale,
  LineElement,
  PointElement,
  Title,
} from 'chart.js';

import { Card } from '@/metronic';

ChartJS.register(
  DoughnutController,
  LineElement,
  ArcElement,
  PointElement,
  LinearScale,
  Title,
);

function CurrentProjects() {
  const chartData = {
    datasets: [
      {
        data: [30, 45, 25],
        backgroundColor: ['#00A3FF', '#50CD89', '#E4E6EF'],
      },
    ],
    labels: ['Active', 'Completed', 'Yet to start'],
  };

  const chartOptions = {
    chart: {
      fontFamily: 'inherit',
    },
    cutout: '75%',
    cutoutPercentage: 65,
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: false,
    },
    animation: {
      animateScale: true,
      animateRotate: true,
    },
    tooltips: {
      enabled: true,
      intersect: false,
      mode: 'nearest',
      bodySpacing: 5,
      yPadding: 10,
      xPadding: 10,
      caretPadding: 0,
      displayColors: false,
      backgroundColor: '#20D489',
      titleFontColor: '#ffffff',
      cornerRadius: 4,
      footerSpacing: 0,
      titleSpacing: 0,
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <Card className="h-100" bodyClassName="p-9">
      {/*--begin::Heading--*/}
      <div className="fs-2hx fw-bolder">237</div>
      <div className="fs-4 fw-bold text-gray-400 mb-7">Current Projects</div>
      {/*--end::Heading--*/}
      {/*--begin::Wrapper--*/}
      <div className="d-flex flex-wrap">
        {/*--begin::Chart--*/}
        <div className="d-flex flex-center h-100px w-100px me-9 mb-5">
          <Chart type="doughnut" data={chartData} options={chartOptions} />
        </div>
        {/*--end::Chart--*/}
        {/*--begin::Labels--*/}
        <div className="d-flex flex-column justify-content-center flex-row-fluid pe-11 mb-5">
          {/*--begin::Label--*/}
          <div className="d-flex fs-6 fw-bold align-items-center mb-3">
            <div className="bullet bg-primary me-3" />
            <div className="text-gray-400">Active</div>
            <div className="ms-auto fw-bolder text-gray-700">30</div>
          </div>
          {/*--end::Label--*/}
          {/*--begin::Label--*/}
          <div className="d-flex fs-6 fw-bold align-items-center mb-3">
            <div className="bullet bg-success me-3" />
            <div className="text-gray-400">Completed</div>
            <div className="ms-auto fw-bolder text-gray-700">45</div>
          </div>
          {/*--end::Label--*/}
          {/*--begin::Label--*/}
          <div className="d-flex fs-6 fw-bold align-items-center">
            <div className="bullet bg-gray-300 me-3" />
            <div className="text-gray-400">Yet to start</div>
            <div className="ms-auto fw-bolder text-gray-700">25</div>
          </div>
          {/*--end::Label--*/}
        </div>
        {/*--end::Labels--*/}
      </div>
    </Card>
  );
}

export default CurrentProjects;
