import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';



const DropdownDocs = ({ filters, defaultLabel }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setshow] = useState(false);
    const router = useRouter();



    return (
        <>
            {' '}
            <div
                class="country-dropdown"

            >
                <div
                    className={classnames('selected::after', {
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
                            ? 'options-container acc-options-container active'
                            : 'options-container acc-options-container'
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <div class="option acc-option"
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
                            </div>

                        ))}
                </div>
            </div>
        </>
    );
};
export default DropdownDocs;
