import {createClient} from 'contentful'

const config = {
    space: 'w591jyzdi2py',
    accessToken: 'DXG7DohnxRncpcxSPtLGr5fR4_fzjyzRzVZAiP9Ussk'
};

export default defineNuxtPlugin(() => {
    return {
        provide: {
            client :createClient({
                space: 'w591jyzdi2py',
                accessToken: 'DXG7DohnxRncpcxSPtLGr5fR4_fzjyzRzVZAiP9Ussk'
            })
            }
        }

})

