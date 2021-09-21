import Menu from './Menu';

function MenuPane() {
  return (
    <Menu defaultSelectedKeys={['1']}>
      <Menu.Section title="Dashboard" />
      <Menu.Item key="1" icon="Duotune/gen025" title="Default" />
      <Menu.Item key="2" icon="Duotune/com001" title="Landing Page" />
      <Menu.Section title="Crafted" />
      <Menu.SubMenu key="3" icon="Duotune/ecm007" title="Pages">
        <Menu.SubMenu key="3-1" title="Profile">
          <Menu.Item key="3-1-1">Profile</Menu.Item>
          <Menu.Item key="3-1-2">Profile</Menu.Item>
          <Menu.Item key="3-1-3">Profile</Menu.Item>
          <Menu.Item key="3-1-4">Profile</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="3-2" title="Search">
          <Menu.Item key="3-2-1">Profile</Menu.Item>
          <Menu.Item key="3-2-2">Profile</Menu.Item>
          <Menu.Item key="3-2-3">Profile</Menu.Item>
          <Menu.Item key="3-2-4">Profile</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.SubMenu key="4" icon="Duotune/ecm007" title="Account">
        <Menu.Item key="4-1">Profile</Menu.Item>
        <Menu.SubMenu key="4-2" title="Search">
          <Menu.Item key="4-2-1">Profile</Menu.Item>
          <Menu.Item key="4-2-2">Profile</Menu.Item>
          <Menu.Item key="4-2-3">Profile</Menu.Item>
          <Menu.Item key="4-2-4">Profile</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/ecommerce/ecm007.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 9V11C21 11.6 20.6 12 20 12H14V8H20C20.6 8 21 8.4 21 9ZM10 8H4C3.4 8 3 8.4 3 9V11C3 11.6 3.4 12 4 12H10V8Z"
                  fill="black"
                />
                <path
                  d="M15 2C13.3 2 12 3.3 12 5V8H15C16.7 8 18 6.7 18 5C18 3.3 16.7 2 15 2Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M9 2C10.7 2 12 3.3 12 5V8H9C7.3 8 6 6.7 6 5C6 3.3 7.3 2 9 2ZM4 12V21C4 21.6 4.4 22 5 22H10V12H4ZM20 12V21C20 21.6 19.6 22 19 22H14V12H20Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Pages</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Profile</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/profile/overview.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Overview</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/profile/projects.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Projects</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/profile/campaigns.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Campaigns</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/profile/documents.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Documents</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/profile/connections.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Connections</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/profile/activity.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Activity</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Projects</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/list.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">My Projects</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/project.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">View Project</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/targets.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Targets</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/budget.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Budget</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/users.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Users</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/files.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Files</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/activity.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Activity</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/projects/settings.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Settings</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Wizards</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/wizards/horizontal.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Horizontal</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/wizards/vertical.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Vertical</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Search</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/search/horizontal.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Horizontal</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/search/vertical.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Vertical</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Blog</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/blog/home.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Blog Home</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/blog/post.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Blog Post</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Company</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/company/about.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">About Us</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/company/pricing.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Pricing</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/company/contact.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Contact Us</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/company/team.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Our Team</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/company/licenses.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Licenses</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/company/sitemap.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sitemap</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Careers</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/careers/list.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Careers List</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/careers/apply.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Careers Apply</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">FAQ</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/faq/classic.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Classic</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/pages/faq/extended.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Extended</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/communication/com013.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z"
                  fill="black"
                />
                <rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black" />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Account</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/overview.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Overview</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/settings.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Settings</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/security.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Security</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/billing.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Billing</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/statements.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Statements</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/referrals.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Referrals</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/account/api-keys.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">API Keys</span>
            </a>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/technology/teh004.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M21 10.7192H3C2.4 10.7192 2 11.1192 2 11.7192C2 12.3192 2.4 12.7192 3 12.7192H6V14.7192C6 18.0192 8.7 20.7192 12 20.7192C15.3 20.7192 18 18.0192 18 14.7192V12.7192H21C21.6 12.7192 22 12.3192 22 11.7192C22 11.1192 21.6 10.7192 21 10.7192Z"
                  fill="black"
                />
                <path
                  d="M11.6 21.9192C11.4 21.9192 11.2 21.8192 11 21.7192C10.6 21.4192 10.5 20.7191 10.8 20.3191C11.7 19.1191 12.3 17.8191 12.7 16.3191C12.8 15.8191 13.4 15.4192 13.9 15.6192C14.4 15.7192 14.8 16.3191 14.6 16.8191C14.2 18.5191 13.4 20.1192 12.4 21.5192C12.2 21.7192 11.9 21.9192 11.6 21.9192ZM8.7 19.7192C10.2 18.1192 11 15.9192 11 13.7192V8.71917C11 8.11917 11.4 7.71917 12 7.71917C12.6 7.71917 13 8.11917 13 8.71917V13.0192C13 13.6192 13.4 14.0192 14 14.0192C14.6 14.0192 15 13.6192 15 13.0192V8.71917C15 7.01917 13.7 5.71917 12 5.71917C10.3 5.71917 9 7.01917 9 8.71917V13.7192C9 15.4192 8.4 17.1191 7.2 18.3191C6.8 18.7191 6.9 19.3192 7.3 19.7192C7.5 19.9192 7.7 20.0192 8 20.0192C8.3 20.0192 8.5 19.9192 8.7 19.7192ZM6 16.7192C6.5 16.7192 7 16.2192 7 15.7192V8.71917C7 8.11917 7.1 7.51918 7.3 6.91918C7.5 6.41918 7.2 5.8192 6.7 5.6192C6.2 5.4192 5.59999 5.71917 5.39999 6.21917C5.09999 7.01917 5 7.81917 5 8.71917V15.7192V15.8191C5 16.3191 5.5 16.7192 6 16.7192ZM9 4.71917C9.5 4.31917 10.1 4.11918 10.7 3.91918C11.2 3.81918 11.5 3.21917 11.4 2.71917C11.3 2.21917 10.7 1.91916 10.2 2.01916C9.4 2.21916 8.59999 2.6192 7.89999 3.1192C7.49999 3.4192 7.4 4.11916 7.7 4.51916C7.9 4.81916 8.2 4.91918 8.5 4.91918C8.6 4.91918 8.8 4.81917 9 4.71917ZM18.2 18.9192C18.7 17.2192 19 15.5192 19 13.7192V8.71917C19 5.71917 17.1 3.1192 14.3 2.1192C13.8 1.9192 13.2 2.21917 13 2.71917C12.8 3.21917 13.1 3.81916 13.6 4.01916C15.6 4.71916 17 6.61917 17 8.71917V13.7192C17 15.3192 16.8 16.8191 16.3 18.3191C16.1 18.8191 16.4 19.4192 16.9 19.6192C17 19.6192 17.1 19.6192 17.2 19.6192C17.7 19.6192 18 19.3192 18.2 18.9192Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Authentication</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Basic Flow</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/basic/sign-in.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sign-in</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/basic/sign-up.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sign-up</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/basic/two-steps.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Two-steps</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/basic/password-reset.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Password Reset</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/basic/new-password.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">New Password</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Aside Flow</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/aside/sign-in.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sign-in</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/aside/sign-up.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sign-up</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/aside/two-steps.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Two-steps</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/aside/password-reset.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Password Reset</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/aside/new-password.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">New Password</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Dark Flow</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/dark/sign-in.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sign-in</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/dark/sign-up.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Sign-up</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/dark/two-steps.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Two-steps</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/dark/password-reset.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Password Reset</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/flows/dark/new-password.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">New Password</span>
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/authentication/extended/multi-steps-sign-up.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Multi-steps Sign-up</span>
            </a>
          </div>
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/authentication/extended/free-trial-sign-up.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Free Trial Sign-up</span>
            </a>
          </div>
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/authentication/extended/coming-soon.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Coming Soon</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/authentication/general/welcome.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Welcome Message</span>
            </a>
          </div>
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/authentication/general/verify-email.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Verify Email</span>
            </a>
          </div>
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/authentication/general/password-confirmation.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Password Confirmation</span>
            </a>
          </div>
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/authentication/general/deactivation.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Account Deactivation</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/authentication/general/error-404.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Error 404</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/authentication/general/error-500.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Error 500</span>
            </a>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Email Templates</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/email/verify-email.html"
                  target="blank"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Verify Email</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/email/invitation.html"
                  target="blank"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Account Invitation</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/email/password-reset.html"
                  target="blank"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Password Reset</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/authentication/email/password-change.html"
                  target="blank"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Password Changed</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/art/art009.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M21 18.3V4H20H5C4.4 4 4 4.4 4 5V20C10.9 20 16.7 15.6 19 9.5V18.3C18.4 18.6 18 19.3 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 19.3 21.6 18.6 21 18.3Z"
                  fill="black"
                />
                <path
                  d="M22 4C22 2.9 21.1 2 20 2C18.9 2 18 2.9 18 4C18 4.7 18.4 5.29995 18.9 5.69995C18.1 12.6 12.6 18.2 5.70001 18.9C5.30001 18.4 4.7 18 4 18C2.9 18 2 18.9 2 20C2 21.1 2.9 22 4 22C4.8 22 5.39999 21.6 5.79999 20.9C13.8 20.1 20.1 13.7 20.9 5.80005C21.6 5.40005 22 4.8 22 4Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Modals</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">General</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/general/invite-friends.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Invite Friends</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/general/view-users.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">View Users</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/general/upgrade-plan.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Upgrade Plan</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/general/share-earn.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Share &amp; Earn</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Forms</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/forms/new-target.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">New Target</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/forms/new-card.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">New Card</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/forms/new-address.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">New Address</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/forms/create-api-key.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Create API Key</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Wizards</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/modals/wizards/two-factor-authentication.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Two Factor Auth</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/wizards/create-app.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Create App</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/wizards/create-account.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Create Account</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/wizards/create-project.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Create Project</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/wizards/offer-a-deal.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Offer a Deal</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Search</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/search/users.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Users</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/modals/search/select-location.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Select Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/general/gen022.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M11.2929 2.70711C11.6834 2.31658 12.3166 2.31658 12.7071 2.70711L15.2929 5.29289C15.6834 5.68342 15.6834 6.31658 15.2929 6.70711L12.7071 9.29289C12.3166 9.68342 11.6834 9.68342 11.2929 9.29289L8.70711 6.70711C8.31658 6.31658 8.31658 5.68342 8.70711 5.29289L11.2929 2.70711Z"
                  fill="black"
                />
                <path
                  d="M11.2929 14.7071C11.6834 14.3166 12.3166 14.3166 12.7071 14.7071L15.2929 17.2929C15.6834 17.6834 15.6834 18.3166 15.2929 18.7071L12.7071 21.2929C12.3166 21.6834 11.6834 21.6834 11.2929 21.2929L8.70711 18.7071C8.31658 18.3166 8.31658 17.6834 8.70711 17.2929L11.2929 14.7071Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M5.29289 8.70711C5.68342 8.31658 6.31658 8.31658 6.70711 8.70711L9.29289 11.2929C9.68342 11.6834 9.68342 12.3166 9.29289 12.7071L6.70711 15.2929C6.31658 15.6834 5.68342 15.6834 5.29289 15.2929L2.70711 12.7071C2.31658 12.3166 2.31658 11.6834 2.70711 11.2929L5.29289 8.70711Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M17.2929 8.70711C17.6834 8.31658 18.3166 8.31658 18.7071 8.70711L21.2929 11.2929C21.6834 11.6834 21.6834 12.3166 21.2929 12.7071L18.7071 15.2929C18.3166 15.6834 17.6834 15.6834 17.2929 15.2929L14.7071 12.7071C14.3166 12.3166 14.3166 11.6834 14.7071 11.2929L17.2929 8.70711Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Widgets</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion menu-active-bg">
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/widgets/lists.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Lists</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/widgets/statistics.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Statistics</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/widgets/charts.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Charts</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/widgets/mixed.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Mixed</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/widgets/tables.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Tables</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/widgets/feeds.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Feeds</span>
            </a>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Apps</span>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/finance/fin006.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z"
                  fill="black"
                />
                <path
                  d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Customers</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion">
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/customers/getting-started.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Getting Started</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/customers/list.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Customer Listing</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/customers/view.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Customer Details</span>
            </a>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/ecommerce/ecm002.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Subscriptions</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion">
          <div className="menu-item">
            <a
              className="menu-link"
              href="../../demo7/dist/apps/subscriptions/getting-started.html"
            >
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Getting Started</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/subscriptions/list.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Subscription List</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/subscriptions/add.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Add Subscription</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/subscriptions/view.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">View Subscription</span>
            </a>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/finance/fin002.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path d="M22 7H2V11H22V7Z" fill="black" />
                <path
                  opacity="0.3"
                  d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Invoice Manager</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion">
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">View Invoices</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion menu-active-bg">
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/apps/invoices/view/invoice-1.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Invoice 1</span>
                </a>
              </div>
              <div className="menu-item">
                <a className="menu-link" href="../../demo7/dist/apps/invoices/view/invoice-2.html">
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Invoice 2</span>
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/invoices/create.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Create Invoice</span>
            </a>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/general/gen051.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
                  fill="black"
                />
                <path
                  d="M14.854 11.321C14.7568 11.2282 14.6388 11.1818 14.4998 11.1818H14.3333V10.2272C14.3333 9.61741 14.1041 9.09378 13.6458 8.65628C13.1875 8.21876 12.639 8 12 8C11.361 8 10.8124 8.21876 10.3541 8.65626C9.89574 9.09378 9.66663 9.61739 9.66663 10.2272V11.1818H9.49999C9.36115 11.1818 9.24306 11.2282 9.14583 11.321C9.0486 11.4138 9 11.5265 9 11.6591V14.5227C9 14.6553 9.04862 14.768 9.14583 14.8609C9.24306 14.9536 9.36115 15 9.49999 15H14.5C14.6389 15 14.7569 14.9536 14.8542 14.8609C14.9513 14.768 15 14.6553 15 14.5227V11.6591C15.0001 11.5265 14.9513 11.4138 14.854 11.321ZM13.3333 11.1818H10.6666V10.2272C10.6666 9.87594 10.7969 9.57597 11.0573 9.32743C11.3177 9.07886 11.6319 8.9546 12 8.9546C12.3681 8.9546 12.6823 9.07884 12.9427 9.32743C13.2031 9.57595 13.3333 9.87594 13.3333 10.2272V11.1818Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">User Management</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion">
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Users</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/user-management/users/list.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Users List</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/user-management/users/view.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">View User</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Roles</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/user-management/roles/list.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Roles List</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/user-management/roles/view.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">View Role</span>
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/user-management/permissions.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Permissions</span>
            </a>
          </div>
        </div>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/graphs/gra006.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Support Center</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion">
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/support-center/overview.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Overview</span>
            </a>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Tickets</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/support-center/tickets/list.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Tickets List</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/support-center/tickets/view.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">View Ticket</span>
                </a>
              </div>
            </div>
          </div>
          <div data-kt-menu-trigger="click" className="menu-item menu-accordion mb-1">
            <span className="menu-link">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Tutorials</span>
              <span className="menu-arrow" />
            </span>
            <div className="menu-sub menu-sub-accordion">
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/support-center/tutorials/list.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Tutorials List</span>
                </a>
              </div>
              <div className="menu-item">
                <a
                  className="menu-link"
                  href="../../demo7/dist/apps/support-center/tutorials/post.html"
                >
                  <span className="menu-bullet">
                    <span className="bullet bullet-dot" />
                  </span>
                  <span className="menu-title">Tutorial Post</span>
                </a>
              </div>
            </div>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/support-center/faq.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">FAQ</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/support-center/licenses.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Licenses</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/support-center/contact.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Contact Us</span>
            </a>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <a className="menu-link" href="../../demo7/dist/apps/calendar.html">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/general/gen014.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z"
                  fill="black"
                />
                <path
                  d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z"
                  fill="black"
                />
                <path
                  d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Calendar</span>
        </a>
      </div>
      <div data-kt-menu-trigger="click" className="menu-item menu-accordion">
        <span className="menu-link">
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/communication/com012.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  opacity="0.3"
                  d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z"
                  fill="black"
                />
                <rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
                <rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Chat</span>
          <span className="menu-arrow" />
        </span>
        <div className="menu-sub menu-sub-accordion">
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/chat/private.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Private Chat</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/chat/group.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Group Chat</span>
            </a>
          </div>
          <div className="menu-item">
            <a className="menu-link" href="../../demo7/dist/apps/chat/drawer.html">
              <span className="menu-bullet">
                <span className="bullet bullet-dot" />
              </span>
              <span className="menu-title">Drawer Chat</span>
            </a>
          </div>
        </div>
      </div>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-0">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Layout</span>
        </div>
      </div>
      <div className="menu-item">
        <a
          className="menu-link"
          href="https://preview.keenthemes.com/metronic8/demo7/layout-builder.html"
          data-bs-toggle="tooltip"
          data-bs-trigger="hover"
          data-bs-dismiss="click"
          data-bs-placement="right"
        >
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/general/gen019.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Layout Builder</span>
        </a>
      </div>
      <div className="menu-item">
        <div className="menu-content">
          <div className="separator mx-1 my-4" />
        </div>
      </div>
      <div className="menu-item">
        <a
          className="menu-link"
          href="../../demo7/dist/documentation/getting-started/changelog.html"
        >
          <span className="menu-icon">
            {/* --begin::Svg Icon | path: icons/duotune/coding/cod003.svg--*/}
            <span className="svg-icon svg-icon-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M16.95 18.9688C16.75 18.9688 16.55 18.8688 16.35 18.7688C15.85 18.4688 15.75 17.8688 16.05 17.3688L19.65 11.9688L16.05 6.56876C15.75 6.06876 15.85 5.46873 16.35 5.16873C16.85 4.86873 17.45 4.96878 17.75 5.46878L21.75 11.4688C21.95 11.7688 21.95 12.2688 21.75 12.5688L17.75 18.5688C17.55 18.7688 17.25 18.9688 16.95 18.9688ZM7.55001 18.7688C8.05001 18.4688 8.15 17.8688 7.85 17.3688L4.25001 11.9688L7.85 6.56876C8.15 6.06876 8.05001 5.46873 7.55001 5.16873C7.05001 4.86873 6.45 4.96878 6.15 5.46878L2.15 11.4688C1.95 11.7688 1.95 12.2688 2.15 12.5688L6.15 18.5688C6.35 18.8688 6.65 18.9688 6.95 18.9688C7.15 18.9688 7.35001 18.8688 7.55001 18.7688Z"
                  fill="black"
                />
                <path
                  opacity="0.3"
                  d="M10.45 18.9687C10.35 18.9687 10.25 18.9687 10.25 18.9687C9.75 18.8687 9.35 18.2688 9.55 17.7688L12.55 5.76878C12.65 5.26878 13.25 4.8687 13.75 5.0687C14.25 5.1687 14.65 5.76878 14.45 6.26878L11.45 18.2688C11.35 18.6688 10.85 18.9687 10.45 18.9687Z"
                  fill="black"
                />
              </svg>
            </span>
            {/* --end::Svg Icon--*/}
          </span>
          <span className="menu-title">Changelog v8.0.24</span>
        </a>
      </div>
    </Menu>
  );
}

export default MenuPane;
