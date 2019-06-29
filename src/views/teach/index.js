import React, { Component } from 'react'
import { Table, Button, Card } from 'antd';
import {connect} from 'react-redux'
import XLSX from 'xlsx'
import {teachAction, teachDataAction, teachDelAction} from 'action/teachAction/actionCreator'
import ModalCom from 'components/modal'


class Teach extends Component {
    constructor(){
        super()
        this.state = {
            flag:true,
            modalStatus:false
        }
    }
    render() {
        let {flag,modalStatus} = this.state
        let data = this.props.dataSource.list;
        let columns = this.setList(data)
        return (
            <Card title="师资列表" bordered={false} extra={<Button onClick={this.exportFile.bind(this,data)}>导出excel</Button>}>
                <Table
                    dataSource={data}
                    columns={columns}
                    rowKey={(record) => record.id}
                    loading={flag}
                    pagination={{
                        pageSize: 5,
                        total: 100,
                        hideOnSinglePage: true,
                    }} />
                <ModalCom modalStatus={modalStatus}/>
            </Card>
        )
    }
    async componentDidMount(){
        await this.props.getData()
        this.setState({
            flag: false
        })
    }
    handleDel(record){
        this.props.delData(record.id)
    }
    handleModify(record){
        this.setState({
            modalStatus:true
        })
        this.props.saveData(record)
    }
    setList = (data) => {
        if(data){
            let keys = Object.keys(data[0]);
            let mapKeys = {
                id:"id",
                name:"名字",
                post:"职称",
                level:"级别",
            }
            let  columns = keys.map((item)=>{
                return {
                    title: mapKeys[item],
                    dataIndex: item
                }
            })
            columns.push({
                title: "操作",
                key:"operation",
                render:(record)=> <div>
                         <Button size="small" type="primary" onClick={this.handleModify.bind(this,record)}>编辑</Button>
                         <Button size="small" onClick={this.handleDel.bind(this,record)}>删除</Button>
                </div>
            })
            return columns;
        }
    }

    exportFile(val) {
        let data = [Object.keys(val[0])]

        for(var i=0;i<val.length;i++){
            data.push(Object.values(val[i]));
        }
        const ws = XLSX.utils.aoa_to_sheet(data);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, "SheetJS");
        XLSX.writeFile(wb, "sheetjs.xlsx")
    }
}


const mapStateToprops = (state)=>({
    dataSource: state.teach.data
})

const mapDispatchToprops = (dispatch)=>({
    getData(){
        dispatch(teachAction())
    },
    saveData(data){
        dispatch(teachDataAction(data))
    },
    delData(id){
        dispatch(teachDelAction(id))
    }
})

export default connect(mapStateToprops,mapDispatchToprops)(Teach)