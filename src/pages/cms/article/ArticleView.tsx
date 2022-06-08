import Icon from '@asany/icons';
import type { RouteComponentProps } from 'react-router';

import { useArticleQuery } from '../hooks';

import { Card } from '@/metronic';
import { ContentWrapper } from '@/layouts/components';
import type { Article } from '@/types';

function ArticleShare() {
  return (
    <div className="d-flex flex-center">
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img src="assets/media/svg/brand-logos/facebook-4.svg" className="h-20px my-2" alt="" />
      </a>
      {/* --end::Icon--*/}
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img src="assets/media/svg/brand-logos/instagram-2-1.svg" className="h-20px my-2" alt="" />
      </a>
      {/* --end::Icon--*/}
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img src="assets/media/svg/brand-logos/github.svg" className="h-20px my-2" alt="" />
      </a>
      {/* --end::Icon--*/}
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img src="assets/media/svg/brand-logos/behance.svg" className="h-20px my-2" alt="" />
      </a>
      {/* --end::Icon--*/}
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img src="assets/media/svg/brand-logos/pinterest-p.svg" className="h-20px my-2" alt="" />
      </a>
      {/* --end::Icon--*/}
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img src="assets/media/svg/brand-logos/twitter.svg" className="h-20px my-2" alt="" />
      </a>
      {/* --end::Icon--*/}
      {/* --begin::Icon--*/}
      <a href="#" className="mx-4">
        <img
          src="assets/media/svg/brand-logos/dribbble-icon-1.svg"
          className="h-20px my-2"
          alt=""
        />
      </a>
      {/* --end::Icon--*/}
    </div>
  );
}

function AuthorsProfile() {
  return (
    <div className="d-flex align-items-center border-dashed card-rounded p-5 p-lg-10 mb-14">
      {/* --begin::Section--*/}
      <div className="text-center flex-shrink-0 me-7 me-lg-13">
        {/* --begin::Avatar--*/}
        <div className="symbol symbol-70px symbol-circle mb-2">
          <img src="/assets/media/avatars/150-3.jpg" className="" alt="" />
        </div>
        {/* --end::Avatar--*/}
        {/* --begin::Info--*/}
        <div className="mb-0">
          <a
            href="../../demo7/dist/pages/profile/overview.html"
            className="text-gray-700 fw-bolder text-hover-primary"
          >
            Jane Johnson
          </a>
          <span className="text-gray-400 fs-7 fw-bold d-block mt-1">Co-founder</span>
        </div>
        {/* --end::Info--*/}
      </div>
      {/* --end::Section--*/}
      {/* --begin::Text--*/}
      <div className="mb-0 fs-6">
        <div className="text-muted fw-bold lh-lg mb-2">
          First, a disclaimer – the entire process of writing a blog post often takes more than a
          couple of hours, even if you can type eighty words per minute and your writing skills are
          sharp writing a blog post often takes more than a couple.
        </div>
        <a href="../../demo7/dist/pages/profile/overview.html" className="fw-bold link-primary">
          Author’s Profile
        </a>
      </div>
      {/* --end::Text--*/}
    </div>
  );
}

function ArticleView(props: RouteComponentProps<any>) {
  const { id } = props.match.params;

  const { data, loading } = useArticleQuery({
    variables: { id },
    fetchPolicy: 'no-cache',
  });

  console.log('ArticleEdit', data, loading);

  const article = data?.article || ({} as Article);

  return (
    <ContentWrapper
      header={{
        title: '新闻动态',
      }}
    >
      <Card bodyClassName="p-lg-20 pb-lg-0">
        <div className="d-flex flex-column flex-xl-row">
          {/* --begin::Content--*/}
          <div className="flex-lg-row-fluid me-xl-15">
            {/* --begin::Post content--*/}
            <div className="mb-17">
              {/* --begin::Wrapper--*/}
              <div className="mb-8">
                <div className="d-flex flex-wrap mb-6">
                  {article.status == 'PUBLISHED' && (
                    <div className="me-9 my-1">
                      <Icon className="svg-icon-primary svg-icon-2 me-1" name="Duotune/gen014" />
                      <span className="fw-bolder text-gray-400">06 April 2021</span>
                    </div>
                  )}
                  <div className="me-9 my-1">
                    <Icon className="svg-icon-primary svg-icon-2 me-1" name="Duotune/fin006" />
                    <span className="fw-bolder text-gray-400">Announcements</span>
                  </div>
                  <div className="my-1">
                    <Icon className="svg-icon-primary svg-icon-2 me-1" name="Duotune/com003" />
                    <span className="fw-bolder text-gray-400">24 评论</span>
                  </div>
                </div>
                {/* --end::Info--*/}
                {/* --begin::Title--*/}
                <a href="#" className="text-dark text-hover-primary fs-2 fw-bolder">
                  {article.title}
                  <span className="fw-bolder text-muted fs-5 ps-1">5 mins read</span>
                </a>
                {/* --end::Title--*/}
                {/* --begin::Container--*/}
                <div className="overlay mt-8">
                  {/* --begin::Image--*/}
                  <div
                    className="bgi-no-repeat bgi-position-center bgi-size-cover card-rounded min-h-350px"
                    style={{ backgroundImage: "url('assets/media/stock/2000x800/1.jpg')" }}
                  />
                  {/* --end::Image--*/}
                  {/* --begin::Links--*/}
                  <div className="overlay-layer card-rounded bg-dark bg-opacity-25">
                    <a href="../../demo7/dist/pages/company/about.html" className="btn btn-primary">
                      About Us
                    </a>
                    <a
                      href="../../demo7/dist/pages/careers/apply.html"
                      className="btn btn-light-primary ms-3"
                    >
                      Join Us
                    </a>
                  </div>
                  {/* --end::Links--*/}
                </div>
                {/* --end::Container--*/}
              </div>
              {/* --end::Wrapper--*/}
              {/* --begin::Description--*/}
              <div
                className="fs-5 fw-bold text-gray-600"
                dangerouslySetInnerHTML={{ __html: article.content?.text || '' }}
              />
              <AuthorsProfile />
              <ArticleShare />
            </div>
            {/* --end::Post content--*/}
          </div>
          {/* --end::Content--*/}
          {/* --begin::Sidebar--*/}
          <div className="flex-column flex-lg-row-auto w-100 w-xl-300px mb-10">
            {/* --begin::Search blog--*/}
            <div className="mb-16">
              <h4 className="text-black mb-7">检索文章</h4>
              {/* --begin::Input group--*/}
              <div className="position-relative">
                {/* --begin::Svg Icon | path: icons/duotune/general/gen021.svg--*/}
                <span className="svg-icon svg-icon-3 svg-icon-gray-500 position-absolute top-50 translate-middle ms-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <rect
                      opacity="0.5"
                      x="17.0365"
                      y="15.1223"
                      width="8.15546"
                      height="2"
                      rx="1"
                      transform="rotate(45 17.0365 15.1223)"
                      fill="black"
                    />
                    <path
                      d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z"
                      fill="black"
                    />
                  </svg>
                </span>
                {/* --end::Svg Icon--*/}
                <input
                  type="text"
                  className="form-control form-control-solid ps-10"
                  name="search"
                  value=""
                  placeholder="Search"
                />
              </div>
              {/* --end::Input group--*/}
            </div>
            {/* --end::Search blog--*/}
            {/* --begin::Catigories--*/}
            <div className="mb-16">
              <h4 className="text-black mb-7">类别</h4>
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                {/* --begin::Text--*/}
                <a href="#" className="text-muted text-hover-primary pe-2">
                  SaaS Solutions
                </a>
                {/* --end::Text--*/}
                {/* --begin::Number--*/}
                <div className="m-0">24</div>
                {/* --end::Number--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                {/* --begin::Text--*/}
                <a href="#" className="text-muted text-hover-primary pe-2">
                  Company News
                </a>
                {/* --end::Text--*/}
                {/* --begin::Number--*/}
                <div className="m-0">152</div>
                {/* --end::Number--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                {/* --begin::Text--*/}
                <a href="#" className="text-muted text-hover-primary pe-2">
                  Events &amp; Activities
                </a>
                {/* --end::Text--*/}
                {/* --begin::Number--*/}
                <div className="m-0">52</div>
                {/* --end::Number--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                {/* --begin::Text--*/}
                <a href="#" className="text-muted text-hover-primary pe-2">
                  Support Related
                </a>
                {/* --end::Text--*/}
                {/* --begin::Number--*/}
                <div className="m-0">305</div>
                {/* --end::Number--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack fw-bold fs-5 text-muted mb-4">
                {/* --begin::Text--*/}
                <a href="#" className="text-muted text-hover-primary pe-2">
                  Innovations
                </a>
                {/* --end::Text--*/}
                {/* --begin::Number--*/}
                <div className="m-0">70</div>
                {/* --end::Number--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack fw-bold fs-5 text-muted">
                {/* --begin::Text--*/}
                <a href="#" className="text-muted text-hover-primary pe-2">
                  Product Updates
                </a>
                {/* --end::Text--*/}
                {/* --begin::Number--*/}
                <div className="m-0">585</div>
                {/* --end::Number--*/}
              </div>
              {/* --end::Item--*/}
            </div>
            {/* --end::Catigories--*/}
            {/* --begin::Recent posts--*/}
            <div className="m-0">
              <h4 className="text-black mb-7">最新文章</h4>
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack mb-7">
                {/* --begin::Symbol--*/}
                <div className="symbol symbol-60px symbol-2by3 me-4">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: "url('assets/media/stock/600x400/img-1.jpg')" }}
                  />
                </div>
                {/* --end::Symbol--*/}
                {/* --begin::Title--*/}
                <div className="m-0">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
                    About Bootstrap Admin
                  </a>
                  <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                    We’ve been a focused on making a the sky
                  </span>
                </div>
                {/* --end::Title--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack mb-7">
                {/* --begin::Symbol--*/}
                <div className="symbol symbol-60px symbol-2by3 me-4">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: "url('assets/media/stock/600x400/img-2.jpg')" }}
                  />
                </div>
                {/* --end::Symbol--*/}
                {/* --begin::Title--*/}
                <div className="m-0">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
                    A yellow sofa
                  </a>
                  <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                    We’ve been a focused on making a the sky
                  </span>
                </div>
                {/* --end::Title--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack mb-7">
                {/* --begin::Symbol--*/}
                <div className="symbol symbol-60px symbol-2by3 me-4">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: "url('assets/media/stock/600x400/img-3.jpg')" }}
                  />
                </div>
                {/* --end::Symbol--*/}
                {/* --begin::Title--*/}
                <div className="m-0">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
                    Our Camra Mega Set
                  </a>
                  <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                    We’ve been a focused on making a the sky
                  </span>
                </div>
                {/* --end::Title--*/}
              </div>
              {/* --end::Item--*/}
              {/* --begin::Item--*/}
              <div className="d-flex flex-stack">
                {/* --begin::Symbol--*/}
                <div className="symbol symbol-60px symbol-2by3 me-4">
                  <div
                    className="symbol-label"
                    style={{ backgroundImage: "url('assets/media/stock/600x400/img-4.jpg')" }}
                  />
                </div>
                {/* --end::Symbol--*/}
                {/* --begin::Title--*/}
                <div className="m-0">
                  <a href="#" className="text-dark fw-bolder text-hover-primary fs-6">
                    Time to cook and eat?
                  </a>
                  <span className="text-gray-600 fw-bold d-block pt-1 fs-7">
                    We’ve been a focused on making a the sky
                  </span>
                </div>
                {/* --end::Title--*/}
              </div>
              {/* --end::Item--*/}
            </div>
            {/* --end::Recent posts--*/}
          </div>
          {/* --end::Sidebar--*/}
        </div>
      </Card>
    </ContentWrapper>
  );
}

export default ArticleView;
