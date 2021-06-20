// import ReactTooltip from "react-tooltip";
import React from "react";
export default function formtoGetStart(props) {

  return (
    <div className="row mb-2">
      <div className="col-lg-6">
        <div
          className="modal fade"
          id="formtoGetStart"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="formtoGetStart"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-dialog-centered"
            role="document"
            style={{ maxWidth: "80%" }}
          >
            <div className="modal-content">
              <div className="modal-header">
              <div className="modal-body p-5 pt-4 pb-3">
                <form
                  action="forms/contact.php"
                  method="post"
                  role="form"
                  className="php-email-form"
                >





                  
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="email">Email</label>
                      <input
                        
                        type="text"
                        name="email"
                        className={!props.isRequired ? "form-control" : props.email ? "form-control" : "form-control border border-danger"}
                        id="email"
                        data-rule="minlen:4"
                        data-msg="Please enter at least 4 chars"
                        value={props.email}
                        onChange={(e) => {
                        e.preventDefault();
                        props.handleChange(e);
                      }}
                      />
                      <div className="validate" />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="phone">Phone No.</label>
                      <input
                        type="number"
                        className={!props.isRequired ? "form-control" : props.phone ? "form-control" : "form-control border border-danger"}
                        name="phone"
                        id="phone"
                        data-rule="phone"
                        data-msg="Please enter a valid phone"
                        value={props.phone}
                        onChange={(e) => {
                        e.preventDefault();
                        props.handleChange(e);
                      }}
                      />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="subjectForm">Subject</label>
                    <input
                      type="text"
                      className={!props.isRequired ? "form-control" : props.subjectForm ? "form-control" : "form-control border border-danger"}
                      name="subjectForm"
                      id="subjectForm"
                      data-rule="minlen:4"
                      data-msg="Please enter at least 8 chars of subject"
                      value={props.subjectForm}
                        onChange={(e) => {
                        e.preventDefault();
                        props.handleChange(e);
                      }}
                    />
                    <div className="validate" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="messageForm">Message</label>
                    <textarea
                      className={!props.isRequired ? "form-control" : props.messageForm ? "form-control" : "form-control border border-danger"}
                      name="messageForm"
                      rows={10}
                      data-rule="required"
                      data-msg="Please write something for us"
                      defaultValue={""}
                      value={props.messageForm}
                        onChange={(e) => {
                        e.preventDefault();
                        props.handleChange(e);
                      }}
                    />
                    <div className="validate" />
                  </div>
                </form>
              </div>
              
              </div>
              <div className="modal-footer">
                <div className="row text-end">
                  <div className="col-md-12">
                    <button
                      style={{ width: 100, margin: 10 }}
                      className="btn btn-primary"
                      onClick={(e) => {
                        e.preventDefault();
                          props.handleSubmit();
                      
                      }}
                    >
                      Get Started
                    </button>
                    <button
                      id="clickButton"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      style={{ width: 100, margin: 10 }}
                      className="btn btn-outline-secondary waves-effect waves-light"
                      onClick={(e) => {
                        e.preventDefault();
                          props.handleCancel();
                      
                      }}
                      
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
