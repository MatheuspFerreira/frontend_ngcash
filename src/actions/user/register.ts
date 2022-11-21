export default async function register(username:string, password:string) {

    try {
        const token = localStorage.getItem('token');

        const response = await fetch(`http://localhost:3333/create`,{
        method:'post',
        body:JSON.stringify({
            username:username,
            password:password

        }),
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            Accept: 'application/json',
            
        }   
        })
        const res:any =  await response.json();
        return res;

    }catch(error){
        console.log(error);
        return({
            error:true,
            message:error
        });

    };

};