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
                class="position-relative signup-phn"

            >
                <div
                    className={classnames('sign-form-drop-box2 ', {
                        ' ': showDropdown,
                    })}
                    onClick={() => {
                        setShowDropdown(true);
                        setshow(true);
                    }}
                >
                    {selectedTag ? selectedTag.code : defaultLabel}
                </div>

                <div
                    className={
                        show == true
                            ? 'sign-form-content country-droplist signup-poohe-content rupes-droplist show '
                            : 'sign-form-content country-droplist signup-poohe-content '
                    }
                >
                    {showDropdown &&
                        filters.map((filter) => (
                            <ul class="sign-form-drop-scrollable"> <li
                                onClick={() => {
                                    setSelectedTag(filter);
                                    setShowDropdown(false);
                                    setshow(false);
                                    if (filter.url) {
                                        router.push(filter.url);
                                    }
                                }}
                            >  <div class="country-name-and-flag">
                                    <div class="country-flag"><img src={filter.Image} class="img-fluid" /></div></div>  <div class="country-name rup-label"><p>{filter.label}</p></div>
                                <div class="contact-inner">{filter.code}</div>
                            </li></ul>

                        ))}
                </div>
            </div>
        </>
    );
};
export default Dropdown;
