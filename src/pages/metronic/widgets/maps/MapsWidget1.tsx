import type { CSSProperties } from 'react';
import React, { useEffect, useRef } from 'react';

import * as am5 from '@amcharts/amcharts5';
import am5geodata_worldLow from '@amcharts/amcharts5-geodata/worldLow';
import * as am5map from '@amcharts/amcharts5/map';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';
import { Icon } from '@asany/icons';
import { useBlock } from '@asany/sunmao';
import useMergedRef from '@react-hook/merged-ref';

import { Button, Card, Dropdown, Input, Menu, Switch } from '@/metronic';
import * as KTUtil from '@/metronic/utils/KTUtil';

import type { GridItemActions, IGridItem } from '../../GridLayout/typings';

type MapsWidget1Props = {
  id?: string;
  data: IGridItem;
  animated: any;
  className: string;
  actions: GridItemActions;
  style: CSSProperties;
  onRefReady: (ref: any) => void;
};

function MapsWidget1(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  { data, actions, onRefReady, animated, ...otherProps }: MapsWidget1Props,
  ref: any,
) {
  const chartRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = chartRef.current!;

    am5.ready(function () {
      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      const root = am5.Root.new(element);

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([am5themes_Animated.new(root)]);

      // Create the map chart
      // https://www.amcharts.com/docs/v5/charts/map-chart/
      const chart = root.container.children.push(
        am5map.MapChart.new(root, {
          panX: 'translateX',
          panY: 'translateY',
          projection: am5map.geoMercator(),
          paddingLeft: 0,
          paddingRight: 0,
          paddingBottom: 0,
        }),
      );

      // Create main polygon series for countries
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
      const polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          geoJSON: am5geodata_worldLow,
          exclude: ['AQ'],
        }),
      );

      polygonSeries.mapPolygons.template.setAll({
        tooltipText: '{name}',
        toggleKey: 'active',
        interactive: true,
        fill: am5.color(KTUtil.getCssVariableValue('--bs-gray-300')),
      });

      polygonSeries.mapPolygons.template.states.create('hover', {
        fill: am5.color(KTUtil.getCssVariableValue('--bs-success')),
      });

      polygonSeries.mapPolygons.template.states.create('active', {
        fill: am5.color(KTUtil.getCssVariableValue('--bs-success')),
      });

      // Highlighted Series
      // Create main polygon series for countries
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-polygon-series/
      const polygonSeriesHighlighted = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
          //geoJSON: am5geodata_usaLow,
          geoJSON: am5geodata_worldLow,
          include: ['US', 'BR', 'RU'],
        }),
      );

      polygonSeriesHighlighted.mapPolygons.template.setAll({
        tooltipText: '{name}',
        toggleKey: 'active',
        interactive: true,
      });

      // const colors = am5.ColorSet.new(root, {});

      polygonSeriesHighlighted.mapPolygons.template.set(
        'fill',
        am5.color(KTUtil.getCssVariableValue('--bs-primary')),
      );

      polygonSeriesHighlighted.mapPolygons.template.states.create('hover', {
        fill: root.interfaceColors.get('primaryButtonHover'),
      });

      polygonSeriesHighlighted.mapPolygons.template.states.create('active', {
        fill: root.interfaceColors.get('primaryButtonHover'),
      });

      // Add zoom control
      // https://www.amcharts.com/docs/v5/charts/map-chart/map-pan-zoom/#Zoom_control
      //chart.set("zoomControl", am5map.ZoomControl.new(root, {}));

      // Set clicking on "water" to zoom out
      chart.chartContainer.get('background')!.events.on('click', function () {
        chart.goHome();
      });

      // Make stuff animate on load
      chart.appear(1000, 100);
    });
  }, []);

  const { Provider } = useBlock({
    key: otherProps.id || 'MapsWidget1',
    icon: '',
    title: '地图小部件1',
    customizer: {
      fields: [
        {
          name: 'title',
          type: 'String',
          label: '标题',
          renderer: {
            component: Input,
          },
        },
      ],
    },
  });

  const multiRef = useMergedRef(containerRef, ref, onRefReady);

  return (
    <Provider as={Card} {...otherProps} {...animated} flush ref={multiRef}>
      <Card.Header className="pt-7">
        <Card.Title className="align-items-start flex-column">
          <span className="card-label fw-bolder text-dark">World Sales</span>
          <span className="text-gray-400 pt-2 fw-bold fs-6">
            Top Selling Countries
          </span>
        </Card.Title>
        <Card.Toolbar>
          <Dropdown
            placement="bottomRight"
            getPopupContainer={() => document.body}
            overlay={
              <Menu
                dropdown
                rounded
                mode="vertical"
                color="gray-800"
                backgroundColor="light-primary"
                className="fw-bold w-200px fs-7 py-3"
              >
                <Menu.Content
                  className="px-3"
                  contentClassName="text-muted pb-2 px-3 fs-7 text-uppercase"
                >
                  Payments
                </Menu.Content>
                <Menu.Separator className="mb-3 opacity-75" />
                <Menu.Item className="px-3" linkClassName="px-3">
                  Create Invoice
                </Menu.Item>
                <Menu.Item className="px-3" linkClassName="flex-stack px-3">
                  Create Payment
                  <i
                    className="fas fa-exclamation-circle ms-2 fs-7"
                    // data-bs-original-title="Specify a target name for future usage and reference"
                    // aria-label="Specify a target name for future usage and reference"
                  />
                </Menu.Item>
                <Menu.Item className="px-3" linkClassName="px-3">
                  Generate Bill
                </Menu.Item>
                <Menu.SubMenu
                  className="px-3"
                  title="Subscription"
                  linkClassName="px-3"
                  bodyClassName="w-175px py-4"
                >
                  <Menu.Item className="px-3" linkClassName="px-3">
                    Plans
                  </Menu.Item>
                  <Menu.Item className="px-3" linkClassName="px-3">
                    Billing
                  </Menu.Item>
                  <Menu.Item className="px-3" linkClassName="px-3">
                    Statements
                  </Menu.Item>
                  <Menu.Separator className=" my-2" />
                  <Menu.Content className="px-3" contentClassName="py-0">
                    <Switch
                      value="1"
                      checked
                      label="Recuring"
                      solid
                      style={{ marginLeft: -2 }}
                      className="w-30px h-20px"
                      labelClassName="fs-6"
                    />
                  </Menu.Content>
                </Menu.SubMenu>
                <Menu.Item className="px-3" linkClassName="px-3">
                  Settings
                </Menu.Item>
              </Menu>
            }
          >
            <Button
              className="btn-clean btn-icon-primary"
              variant={false}
              activeColor="light-primary"
              icon={
                <Icon
                  name="Duotune/gen024"
                  className="svg-icon-3 svg-icon-primary"
                />
              }
            />
          </Dropdown>
        </Card.Toolbar>
      </Card.Header>
      <Card.Body className="d-flex flex-center">
        <div ref={chartRef} className="w-100 h-350px" />
      </Card.Body>
    </Provider>
  );
}

export default React.forwardRef(MapsWidget1);
