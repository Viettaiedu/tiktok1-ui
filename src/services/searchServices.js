import * as request from '~/utils/request';
// xử lí api
export const handle = async (q , type = "less") => {
    try {
        const res = await request.get(`users/search`, {
            params: {
                q,
                type
            },
        });
       return res;
    } catch (error) {
        console.log(error)
    }
};