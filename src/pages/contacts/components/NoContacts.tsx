function NoContacts() {
  return (
    <div className="card card-flush h-100" id="kt_contacts_main">
      {/*--begin::Card body--*/}
      <div className="card-body p-0">
        {/*--begin::Wrapper--*/}
        <div className="card-px text-center py-20 my-10">
          {/*--begin::Title--*/}
          <h2 className="fs-2x fw-bolder mb-10">Welcome to the Contacts App</h2>
          {/*--end::Title--*/}
          {/*--begin::Description--*/}
          <p className="text-gray-400 fs-4 fw-bold mb-10">
            Its time to expand our contacts.
            <br />
            Kickstart your contacts growth by adding a your next contact.
          </p>
          {/*--end::Description--*/}
          {/*--begin::Action--*/}
          <a href="../../demo7/dist/apps/contacts/add-contact.html" className="btn btn-primary">
            Add New Contact
          </a>
          {/*--end::Action--*/}
        </div>
        {/*--end::Wrapper--*/}
        {/*--begin::Illustration--*/}
        <div className="text-center px-4">
          <img className="mw-100 mh-300px" alt="" src="/assets/media/illustrations/sigma-1/5.png" />
        </div>
        {/*--end::Illustration--*/}
      </div>
      {/*--end::Card body--*/}
    </div>
  );
}

export default NoContacts;
