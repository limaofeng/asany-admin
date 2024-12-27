import { useEffect, useState } from 'react';

import * as d3 from 'd3';
import { geoMercator, geoPath } from 'd3-geo';

import './InteractiveMap.scss';

type GeoData = {
  type: string;
  features: any[];
  properties: {
    center: [number, number];
    centroid: [number, number];
  };
};

type InteractiveMapProps = {
  data: GeoData | string;
  width: number;
  height: number;
};

export function InteractiveMap(props: InteractiveMapProps) {
  const { width, height } = props;

  const [data, setData] = useState<GeoData | null>(null);

  useEffect(() => {
    if (typeof props.data === 'object') {
      setData(props.data);
    }

    fetch(props.data as string)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  if (!data) {
    return null;
  }

  // const center = data.properties.center;
  const centroid = data.properties.centroid;

  // 计算边界
  const bounds = d3.geoBounds(data as any);
  const topLeft = bounds[0];
  const bottomRight = bounds[1];

  // 计算宽高差
  // const deltaX = Math.abs(bottomRight[0] - topLeft[0]);
  // const deltaY = Math.abs(bottomRight[1] - topLeft[1]);

  const projection = geoMercator().center(data.properties.center).scale(1);
  // .translate([width/2, height/2]);
  // .scale(300)
  // .translate([width / 2, height / 2])
  // .rotate([0, 0]);

  const path = geoPath().projection(projection);

  const features = data.features;

  // 使用投影将边界转为像素坐标
  const topLeftPixel = projection(topLeft)!;
  const bottomRightPixel = projection(bottomRight)!;

  const pixelDeltaX = Math.abs(bottomRightPixel[0] - topLeftPixel[0]);
  const pixelDeltaY = Math.abs(bottomRightPixel[1] - topLeftPixel[1]);

  // 根据画布宽高与投影后像素宽高来计算缩放比例
  const scale = Math.min(width / pixelDeltaX, height / pixelDeltaY) * 0.9; // 增加一点边距

  projection
    .scale(scale)
    .translate([width / 2, height / 2])
    .center(centroid);

  // const bounds = getGeoJsonBounds(data);

  // console.log('getGeoJsonBounds',bounds );

  // console.log('calculateProjectionScale', calculateProjectionScale(width, height, bounds.minLon, bounds.maxLon, bounds.minLat, bounds.maxLat));

  return (
    <div className="w-full h-full">
      <svg
        width={width}
        height={height}
        // viewBox={`0 0 ${width} ${height}`}
      >
        <g className="features">
          {/* Background rect to handle mouse events in empty areas */}
          {/* <rect
            x="0"
            y="0"
            width={width}
            height={height}
            fill="transparent"
            // onMouseEnter={() => setTooltipData(null)}
          /> */}
          {features.map((feature, index) => {
            // const isHighlighted = countries.includes(
            //   feature.properties.iso_a2_eh,
            // );

            // const serverCount = serverCounts[feature.properties.iso_a2_eh] || 0;

            console.log(feature.properties.code, feature);

            const [cx, cy] = feature.properties.center
              ? projection(feature.properties.center)!
              : [0, 0];

            console.log('center', feature.properties.center, cx, cy);

            let pathData = path(feature) || '';

            if (pathData.includes('NaN')) {
              console.error('路径数据包含 NaN', pathData, feature);

              pathData = pathData.replace(/NaN/g, '250');

              console.log('替换后的路径数据', pathData);
            }

            return (
              <g
                key={feature.properties.code || feature.properties.name}
                className="feature multipolygon"
              >
                {feature.properties.center && (
                  <circle cx={cx} cy={cy} r="3" fill="#444"></circle>
                )}
                <path
                  key={index}
                  d={pathData}
                  // className={
                  //   // isHighlighted
                  //   // ? "fill-green-700 hover:fill-green-600    dark:fill-green-900 dark:hover:fill-green-700 transition-all cursor-pointer"
                  //   'fill-neutral-200/50 dark:fill-neutral-800 stroke-neutral-300/40 dark:stroke-neutral-700 stroke-[0.5]'
                  // }
                  // onMouseEnter={() => {
                  //   if (!isHighlighted) {
                  //     setTooltipData(null);
                  //     return;
                  //   }
                  //   if (path.centroid(feature)) {
                  //     const countryCode = feature.properties.iso_a2_eh;
                  //     const countryServers = nezhaServerList.result
                  //       .filter(
                  //         (server: any) =>
                  //           server.host.CountryCode?.toUpperCase() ===
                  //           countryCode,
                  //       )
                  //       .map((server: any) => ({
                  //         name: server.name,
                  //         status: server.online_status,
                  //       }));
                  //     setTooltipData({
                  //       centroid: path.centroid(feature),
                  //       country: feature.properties.name,
                  //       count: serverCount,
                  //       servers: countryServers,
                  //     });
                  //   }
                  // }}
                  fill="#2caffe"
                  stroke="#333"
                  strokeWidth="0.5"
                  opacity="0.5"
                />
                {/*                 <text
                  className="dataLabels"
                  text-anchor="middle"
                  // transform="translate(633.3886884234546,272.60997741097793)" 
                  style={{ fill: "rgb(51, 51, 51)", fontSize: 12 }}>内蒙古</text> */}
              </g>
            );
          })}

          {/* 渲染不在 filteredFeatures 中的国家标记点 */}
          {/* {features.map((countryCode) => {
            检查该国家是否已经在 filteredFeatures 中
            const isInFilteredFeatures = filteredFeatures.some(
              (feature) => feature.properties.iso_a2_eh === countryCode,
            );

            如果已经在 filteredFeatures 中，跳过
            if (isInFilteredFeatures) return null;

            获取国家的经纬度
            const coords = countryCoordinates[countryCode];
            if (!coords) return null;

            // 使用投影函数将经纬度转换为 SVG 坐标
            const [x, y] = projection([coords.lng, coords.lat]) || [0, 0];
            const serverCount = serverCounts[countryCode] || 0;

            return (
              <g
                key={countryCode}
                onMouseEnter={() => {
                  const countryServers = nezhaServerList.result
                    .filter(
                      (server: any) =>
                        server.host.CountryCode?.toUpperCase() === countryCode,
                    )
                    .map((server: any) => ({
                      name: server.name,
                      status: server.online_status,
                    }));
                  setTooltipData({
                    centroid: [x, y],
                    country: coords.name,
                    count: serverCount,
                    servers: countryServers,
                  });
                }}
                className="cursor-pointer"
              >
                <circle
                  cx={x}
                  cy={y}
                  r={4}
                  className="fill-sky-700 stroke-white hover:fill-sky-600 dark:fill-sky-900 dark:hover:fill-sky-700 transition-all"
                />
              </g>
            );
          })} */}
        </g>
        <g className="plot"></g>
        <rect
          className="plot-bg"
          x="0"
          y="0"
          width={width}
          height={height}
          fill="none"
        ></rect>
      </svg>
    </div>
  );
}
