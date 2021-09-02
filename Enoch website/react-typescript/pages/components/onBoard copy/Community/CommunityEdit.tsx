import React, { useState } from 'react'
import classnames from 'classnames'

const CommunityEdit = () => {
  const [toggleTable, setToggleTable] = useState<boolean>(false)
  return (
    <div className="enoch-community-manage-block-right">
      <div 
        className={classnames('enoch-community-editable-form', {
          'form-enable': toggleTable == true
        })}
      >
        <div className="enoch-community-editable-form-hd">
          <h3>Community Setting</h3>
          <span onClick={() => {
            setToggleTable(true)
          }}>
            <button className="comm-set-edit-btn">Edit</button>
          </span>
        </div>
        <form>
          <div className="editable-form-input-grp">
            <div className="editable-form-input-label">Date</div>
            <div className="editable-form-dateinput-field">
              <input
                type="text"
                placeholder="date"
                value="25/07/2021"
                disabled
              />{" "}
              <span>
                <img
                  src="/images/dApp-DoB-Calendar.png"
                  className="img-fluid"
                  alt="calender"
                />
              </span>
            </div>
          </div>
          <div className="editable-form-input-grp">
            <div className="editable-form-input-label">Community name</div>
            <div className="editable-form-txtinput-field">
              <input
                type="text"
                placeholder="Community name"
                value="DeFi-Signal"
              />{" "}
            </div>
            <p>@defisignal</p>
          </div>
          <div className="editable-form-input-grp">
            <div className="editable-form-input-label">
              Description (max 5000 letters)
            </div>
            <div className="editable-form-input-field">
              <textarea placeholder="Community name">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur.
              </textarea>
            </div>
          </div>
          <div className="community-cat">
            <input id="community-select" name="b-plan" type="radio" checked />
            <label htmlFor="community-select"></label>
            <div className="community-select-txt">
              <p className="community-event-txt1">Public</p>
              <p className="community-event-txt2">
                Shared on Eventbrite and search engines
              </p>
            </div>
          </div>
          <div className="community-cat">
            <input id="community-select1" name="b-plan" type="radio" disabled />
            <label htmlFor="community-select1"></label>
            <div className="community-select-txt txt-disabled">
              <p className="community-event-txt1">Restricted</p>
              <p className="community-event-txt2">
                Only available to a selected audience
              </p>
            </div>
          </div>
          <div className="community-cat">
            <input id="community-select2" name="b-plan" type="radio" disabled />
            <label htmlFor="community-select2"></label>
            <div className="community-select-txt txt-disabled">
              <p className="community-event-txt1">Restricted</p>
              <p className="community-event-txt2">
                Only available to a selected audience
              </p>
            </div>
          </div>
          <div className="community-cat">
            <input
              id="community-select4"
              name="b-plan"
              type="checkbox"
              checked
            />
            <label htmlFor="community-select4"></label>
            <div className="community-select-txt">
              <p className="community-event-txt1">Adult Content</p>
              <p className="bttm-txt-disabled">
                When your community is marked as adult content, users must be
                flagged as 18+ in their user settings
              </p>
            </div>
          </div>
          <div className="editable-form-buttn-grp">
            <span className="comm-mr-16">
              <button type="button" className="editable-cancel-btn">
                Cancel
              </button>
            </span>
            <span>
              <button type="submit" className="editable-update-btn">
                Update
              </button>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CommunityEdit;
