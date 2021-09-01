import React from "react";
import AdvertisingDataItemOption from "./AdvertisingDataItemOption";

interface Props {
  title: string;
  description: string;
  id: string;
  items: {
    title: string;
    description: string;
    defaultValue: string;
  }[];
}

const AdvertisingDataItem: React.FC<Props> = ({
  id,
  title,
  description,
  items,
}) => {
  return (
    <div className="enoch-setting-right-block" id={id}>
      <h3>{title}</h3>
      <h4>{description}</h4>

      {items.map((item, key) => {
        return (
          <AdvertisingDataItemOption
            key={key}
            title={item.title}
            description={item.description}
            defaultValue={item.defaultValue}
            id={id}
          />
        );
      })}

      {/* <div className="enoch-acount-detail mb-0">
        <div className="enoch-acount-detail-lft">
          <h5>Interest categories</h5>
          <p>
            See more relevant ads, such as job ads, based on your and similar
            members’ activities on Enoch and Bing
          </p>
        </div>
        <div className="enoch-acount-detail-right">
          <div className="enoch-acount-detail-bk">
            <span className="enoch-acount-view-btn">
              <a
                href="javascript:void(0)"
                className="enoch-acount-view-cls enochaccordion-block"
              >
                Change
              </a>
              <a
                href="javascript:void(0)"
                className="enoch-acount-view-cls accordion-block-close"
              >
                close
              </a>
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default AdvertisingDataItem;
