import { useContext, useState, useEffect } from 'react';

import { context } from '../../context'

import DatasNetworkUser from '../DataNetwork';
import { getDataGithubFollowersFollowing } from '../../services/Git';

function Followers() {

    const [followers, setFollowers] = useState([])

    const ctx = useContext(context)

    useEffect(() => {
        async function getFollowersAndFollowins() {

            const responseFollowers = await getDataGithubFollowersFollowing(ctx.dataUser.login, "followers")

            setFollowers(responseFollowers)
        }
        getFollowersAndFollowins()
    }, [ctx.dataUser.login])

    return (
        <DatasNetworkUser title={"Seguidores"} data={followers} />
    );
}

export default Followers;