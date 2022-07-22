import {createClient} from 'contentful'

export default defineNuxtPlugin(() => {
    return {
        provide: {
            ContentfulClient:   createClient({
                space:'w591jyzdi2py',
                accessToken:'DXG7DohnxRncpcxSPtLGr5fR4_fzjyzRzVZAiP9Ussk'
            })
        }
    }
})
