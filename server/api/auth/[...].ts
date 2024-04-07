import { NuxtAuthHandler } from '#auth'
import GithubProvider from 'next-auth/providers/github'
export default NuxtAuthHandler({
    providers: [
        // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
        GithubProvider.default({
           clientId: 'Iv1.befa8732db3d56b4',
           clientSecret: 'e38b1e44d9b72249911f86852a32a0711adbfaeb'
        })
    ]
})