import {expect, test} from '@playwright/test'
var userid;

test.describe('REST API Tests with ReqRes', () => {

test('Get',async ({request}) => {
    const response = await request.get('https://reqres.in/api/users?page=2')
    console.log(await response.json())
    expect(response.status()).toBe(200)
});


test('Post',async ({request}) => {
    const response = await request.post('https://reqres.in/api/users',

                                         {
                                            data:{"name":"Rohit","job":"Senior test Engineer" },
                                            headers:{"Accept":"application/json "}
                                        });
    console.log(await response.json())
    expect(response.status()).toBe(201)   
    
    var ser = await response.json();
    userid=ser.id
})

test('Put',async ({request}) => {
    const response = await request.put('https://reqres.in/api/users/'+userid,

        {
            data:{"name":"Rohit","job":"Engineer" },
            headers:{"Accept":"application/json "}
        });

    console.log(await response.json())
    expect(response.status()).toBe(200)   

})

    test('Delete',async ({request}) => {
     await request.delete('https://reqres.in/api/users/'+userid)

    })

});
