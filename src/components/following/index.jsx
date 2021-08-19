import { context } from '../../context'
import { useContext, useState, useEffect } from 'react';

import DatasNetworkUser from '../DataNetwork';
import { getDataGithubFollowersFollowing } from '../../services/Git';

function Following() {

    const [following, setFollowing] = useState([])

    const ctx = useContext(context)

    useEffect(() => {
        async function getFollowersAndFollowins() {

            const responseFollwing = await getDataGithubFollowersFollowing(ctx.dataUser.login, "following")

            setFollowing(responseFollwing)
        }
        getFollowersAndFollowins()
    }, [ctx.dataUser.login])

    return (
        <DatasNetworkUser title={"Seguindo"} data={following} />
    );
}

export default Following;