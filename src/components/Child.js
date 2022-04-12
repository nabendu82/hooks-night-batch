import React from 'react'
import { UserContext, ChannelContext } from '../App'

const Child = () => {
    return (
        <>
            <UserContext.Consumer>
                {user => {
                    return (
                        <ChannelContext.Consumer>
                            {channel => {
                                return (
                                    <div>
                                        <h3>{user} is speaking in {channel}</h3>
                                    </div>
                                )
                            }}
                        </ChannelContext.Consumer>
                    )
                }}
            </UserContext.Consumer>
        </>
    )
}

export default Child