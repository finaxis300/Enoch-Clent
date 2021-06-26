import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import classnames from 'classnames';
const Country1 = "/images/country1.png"


const Dropdown = ({ filters, defaultLabel }) => {
    const [selectedTag, setSelectedTag] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const [show, setshow] = useState(false);
    const router = useRouter();


    return (
        <>
            {' '}
            <div
                class="position-relative"

            >
                <div
                    className={classnames('contact-drop-box  ', {
                        'contact-droplist:after': showDropdown,
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
                            ? 'contact-dropdown-content skill-zindex'
                            : 'contact-skills-DropdownList'
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <ul class="contact-drop-scrollable contact-custom-wd"> <li><div class="contact-inner"
                                onClick={() => {
                                    setSelectedTag(filter);
                                    setShowDropdown(false);
                                    setshow(false);
                                    if (filter.url) {
                                        router.push(filter.url);
                                    }
                                }}
                            > <span><img src={filter.Image} class="img-fluid mr-2" /></span>{filter.label}

                            </div></li></ul>

                        ))}
                </div>
            </div>
        </>
    );
};
export default Dropdown;
