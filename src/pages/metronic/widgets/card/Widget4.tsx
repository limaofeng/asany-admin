import React, { useEffect, useRef } from 'react';

import { Icon } from '@asany/icons';
import { useBlock } from '@asany/sunmao';
import useMergedRef from '@react-hook/merged-ref';

import { Card } from '@/metronic';
import * as KTUtil from '@/metronic/utils/KTUtil';

function Widget4({ onRefReady, animated, ...otherProps }: any, ref: any) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      size: 70,
      lineWidth: 11,
      rotate: 45,
    };
    const canvas = document.createElement('canvas');
    const span = document.createElement('span');

    const el = chartRef.current!;

    const ctx = canvas.getContext('2d')!;
    canvas.width = canvas.height = options.size;

    el.appendChild(span);
    el.appendChild(canvas);

    ctx.translate(options.size / 2, options.size / 2); // change center
    ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

    //imd = ctx.getImageData(0, 0, 240, 240);
    const radius = (options.size - options.lineWidth) / 2;

    const drawCircle = function (
      color: string,
      lineWidth: number,
      percent: number,
    ) {
      const _percent = Math.min(Math.max(0, percent || 1), 1);
      ctx.beginPath();
      ctx.arc(0, 0, radius, 0, Math.PI * 2 * _percent, false);
      ctx.strokeStyle = color;
      ctx.lineCap = 'round'; // butt, round or square
      ctx.lineWidth = lineWidth;
      ctx.stroke();
    };

    // Init
    drawCircle('#E4E6EF', options.lineWidth, 100 / 100);
    drawCircle(
      KTUtil.getCssVariableValue('--bs-danger'),
      options.lineWidth,
      100 / 150,
    );
    drawCircle(
      KTUtil.getCssVariableValue('--bs-primary'),
      options.lineWidth,
      100 / 250,
    );
  }, []);

  const { props, Provider } = useBlock({
    key: otherProps.id || 'CardWidget4',
    icon: '',
    title: '卡片小部件1',
    props: {
      subtitle: 'Expected Earnings',
    },
    customizer: {
      fields: [
        {
          name: 'subtitle',
          type: 'String',
          label: '标题',
        },
      ],
    },
  });

  const multiRef = useMergedRef(ref, onRefReady);

  return (
    <Provider as={Card} {...otherProps} {...animated} flush ref={multiRef}>
      <Card.Header className="pt-5">
        <Card.Title className=" d-flex flex-column">
          <div className="d-flex align-items-center">
            {/*begin::Currency*/}
            <span className="fs-4 fw-bold text-gray-400 me-1 align-self-start">
              $
            </span>
            {/*end::Currency*/}
            {/*begin::Amount*/}
            <span className="fs-2hx fw-bolder text-dark me-2 lh-1">69,700</span>
            {/*end::Amount*/}
            {/*begin::Badge*/}
            <span
              className="badge badge-success fs-6 lh-1 py-1 px-2 d-flex flex-center"
              style={{ height: 22 }}
            >
              <Icon
                name="Duotune/arr067"
                className="svg-icon-7 svg-icon-white ms-n1"
              />{' '}
              2.2%
            </span>
            {/*end::Badge*/}
          </div>
          {/*end::Info*/}
          {/*begin::Subtitle*/}
          <span className="text-gray-400 pt-1 fw-bold fs-6">
            {props.subtitle}
          </span>
          {/*end::Subtitle*/}
        </Card.Title>
      </Card.Header>
      <Card.Body className="pt-2 pb-4 d-flex align-items-center">
        {/*begin::Chart*/}
        <div className="d-flex flex-center me-5 pt-2">
          <div
            ref={chartRef}
            id="kt_card_widget_4_chart"
            style={{ minWidth: '70px', minHeight: '70px' }}
            data-kt-size="70"
            data-kt-line="11"
          />
          {/* <Chart options={state.options} width="100%"  series={state.series} type="bar" /> */}
        </div>
        {/*end::Chart*/}
        {/*begin::Labels*/}
        <div className="d-flex flex-column content-justify-center w-100">
          {/*begin::Label*/}
          <div className="d-flex fs-6 fw-bold align-items-center">
            {/*begin::Bullet*/}
            <div className="bullet w-8px h-6px rounded-2 bg-danger me-3" />
            {/*end::Bullet*/}
            {/*begin::Label*/}
            <div className="text-gray-500 flex-grow-1 me-4">Shoes</div>
            {/*end::Label*/}
            {/*begin::Stats*/}
            <div className="fw-boldest text-gray-700 text-xxl-end">$7,660</div>
            {/*end::Stats*/}
          </div>
          {/*end::Label*/}
          {/*begin::Label*/}
          <div className="d-flex fs-6 fw-bold align-items-center my-3">
            {/*begin::Bullet*/}
            <div className="bullet w-8px h-6px rounded-2 bg-primary me-3" />
            {/*end::Bullet*/}
            {/*begin::Label*/}
            <div className="text-gray-500 flex-grow-1 me-4">Gaming</div>
            {/*end::Label*/}
            {/*begin::Stats*/}
            <div className="fw-boldest text-gray-700 text-xxl-end">$2,820</div>
            {/*end::Stats*/}
          </div>
          {/*end::Label*/}
          {/*begin::Label*/}
          <div className="d-flex fs-6 fw-bold align-items-center">
            {/*begin::Bullet*/}
            <div
              className="bullet w-8px h-6px rounded-2 me-3"
              style={{ backgroundColor: '#E4E6EF' }}
            />
            {/*end::Bullet*/}
            {/*begin::Label*/}
            <div className="text-gray-500 flex-grow-1 me-4">Others</div>
            {/*end::Label*/}
            {/*begin::Stats*/}
            <div className="fw-boldest text-gray-700 text-xxl-end">$45,257</div>
            {/*end::Stats*/}
          </div>
          {/*end::Label*/}
        </div>
        {/*end::Labels*/}
      </Card.Body>
    </Provider>
  );
}

export default React.forwardRef(Widget4);
