import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';



const Dropdown = ({ filters, defaultLabel }) => {
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
                    className={classnames('sign-form-drop-box ', {
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
                            ? 'sign-form-content show'
                            : 'sign-form-DropdownList '
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <ul class="sign-form-drop-scrollable"
                                onClick={() => {
                                    setSelectedTag(filter);
                                    setShowDropdown(false);
                                    setshow(false);
                                    if (filter.url) {
                                        router.push(filter.url);
                                    }
                                }}
                            >
                                <li>{filter.label}</li>
                            </ul>

                        ))}
                </div>
            </div>
        </>
    );
};
export default Dropdown;
