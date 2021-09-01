import React, { useState } from 'react'
import classnames from 'classnames'
import BoardingPost from '../post'
import BoardingReplies from '../replies'
import BoardingMedia from '../media'
import BoardingLink from '../link'
import BoardingPostView from '../post-view'
import BoardingRepliesView from '../replies-view'
import BoardingMediaView from '../media-view'
import BoardingLinkView from '../link-view'

const BoardingPostMenu: React.FC = () => {
    const [activeMenu, setActiveMenu] = useState('post')

    return (
        <>
            <div className='dApp-Posts-tab-sect'>
                <div className='dApp-Posts-tabs'>
                    <div className='dApp-Posts-tab-heading tab'>
                        <button
                            className={classnames('tablinks dApp-Posts-tablinks', {
                                active: activeMenu == 'post'
                            })}
                            id='defaultOpen'
                            onClick={() => setActiveMenu('post')}
                        >
                            Posts<div className='dApp-Posts-tab-underline'></div>
                        </button>

                        <button
                            className={classnames('tablinks dApp-Posts-tablinks', {
                                active: activeMenu == 'post_replies'
                            })}
                            onClick={() => setActiveMenu('post_replies')}
                        >
                            Post and replies <div className='dApp-Posts-tab-underline'></div>
                        </button>

                        <button
                            className={classnames('tablinks dApp-Posts-tablinks', {
                                active: activeMenu == 'media'
                            })}
                            onClick={() => setActiveMenu('media')}
                        >
                            Media<div className='dApp-Posts-tab-underline'></div>
                        </button>

                        <button
                            className={classnames('tablinks dApp-Posts-tablinks', {
                                active: activeMenu == 'link'
                            })}
                            onClick={() => setActiveMenu('link')}
                        >
                            Links<div className='dApp-Posts-tab-underline'></div>
                        </button>
                    </div>
                    {activeMenu == 'post' ? (
                        <BoardingPostView />
                    ) : activeMenu == 'post_replies' ? (
                        <BoardingRepliesView />
                    ) : activeMenu == 'media' ? (
                        <BoardingMediaView />
                    ) : activeMenu == 'link' ? (
                        <BoardingLinkView />
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </>
    )
}

export default BoardingPostMenu
