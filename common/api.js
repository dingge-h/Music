import { baseUrl } from './config.js';

export function topList(){
    var listIds = ['3' , '0' , '2' , '1' ];
    return new Promise((resolve,reject)=>{
        uni.request({
        	url: `${baseUrl}/toplist/detail`,
        	method: 'GET',
        	data: {},
        	success: res => {
                let result = res.data.list
                result.length = 4
                resolve(result)
        	},
        	fail: (err) => {
        		reject(err);
        	},
            complete: () => {}
        });
    })
}