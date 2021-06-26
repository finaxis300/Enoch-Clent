import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { array } from 'yup';



const DropdownKyc = ({ filters, defaultLabel }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setshow] = useState(false);
    const router = useRouter();



    return (
        <>
            {' '}
            <div
                class=""

            >
                <div
                    className={classnames('', {
                        '': showDropdown,
                    })}
                    onClick={() => {
                        setShowDropdown(true);
                        setshow(true);
                    }}
                >
                    {selectedTag ? selectedTag.label : defaultLabel}
                </div>

                <div
                    className={
                        show == true
                            ? 'timeSetting-content acc-country-droplist country-droplist custm-zindex-1 rupesh-droplist  show'
                            : 'Kyc-Acc-Country-DropdownList'
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <ul class="setting-form-drop-scrollable"> <li
                                onClick={() => {
                                    setSelectedTag(filter);
                                    setShowDropdown(false);
                                    setshow(false);
                                    if (filter.url) {
                                        router.push(filter.url);
                                    }
                                }}
                            >
                                {filter.label}</li>
                            </ul>

                        ))}
                </div>
            </div>
        </>
    );
};
export default DropdownKyc;
