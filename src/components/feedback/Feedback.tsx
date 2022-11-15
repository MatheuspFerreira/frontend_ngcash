import { Button, Result } from 'antd';


type Props = {
    status:any
    title:string
    subTitle:string
    btnName:string
    click:Function

}

export function Feedback (
    {
        status, 
        title, 
        subTitle, 
        btnName,
        click

    }:Props) {

    return(
        <Result
            status={status}
            title={title}
            subTitle={subTitle}
            extra={[
                <Button type="primary" key="console" onClick={()=>click()}>
                    {btnName}
                </Button>,
               
            ]}
        />
    );
}   