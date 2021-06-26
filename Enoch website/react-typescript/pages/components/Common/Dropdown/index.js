import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
import { array } from 'yup';



const Dropdown = ({ filters, defaultLabel }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setshow] = useState(false);
    const router = useRouter();



    return (
        <>
            {' '}
            <div
                class="position-relative custom-zindex"

            >
                <div
                    className={classnames(' explore-select-drop-box', {
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
                            ? 'explore-select-dropdown-content'
                            : 'explore-select-Project-DropdownList'
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <ul class="explore-select-drop-scrollable contact-custom-wd"> <li><div class="explore-select-inner"
                                onClick={() => {
                                    setSelectedTag(filter);
                                    setShowDropdown(false);
                                    setshow(false);
                                    if (filter.url) {
                                        router.push(filter.url);
                                    }
                                }}
                            >
                                {filter.label}
                            </div></li></ul>

                        ))}
                </div>
            </div>
        </>
    );
};
export default Dropdown;
