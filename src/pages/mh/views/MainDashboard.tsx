import { ContentWrapper } from '@/layouts/components';

import { InteractiveMap } from '../components/InteractiveMap';
// import chinaGeoJson from '../data/geo/china/china.json';

function MainDashboard() {
  // console.log('chinaGeoJson', chinaGeoJson);

  // useEffect(() => {
  //   let str = [];
  //   for (let feature of chinaGeoJson.features) {
  //     if (!feature.properties.filename) {
  //       console.log('feature', feature, feature.properties.filename);
  //       continue;
  //     }
  //     str.push(feature.properties.filename);
  //   }
  //   const all = str.map((item) => {
  //     // console.log('item', `https://geojson.cn/api/china/${item}.json`)
  //     return `wget https://geojson.cn/api/china/${item}.json`;
  //   });

  //   console.log(all.length, chinaGeoJson.features.length, all.join(' && '));
  // }, []);

  return (
    <ContentWrapper header={false} footer={false}>
      <InteractiveMap data="/geo/china/china.json" width={1260} height={500} />
    </ContentWrapper>
  );
}

export default MainDashboard;
