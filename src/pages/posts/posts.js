import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup,
  Editing,
  MasterDetail,
  Selection
} from 'devextreme-react/data-grid';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';
import Applies from './applies';

/*const serviceUrl = 'http://localhost:3001';
const dataSource = createStore({
  key: 'post_id',
  loadUrl: serviceUrl + '/posts',
  insertUrl: serviceUrl + '/post',
  updateUrl: serviceUrl + '/post' ,
  deleteUrl: serviceUrl + '/post'
});*/


function handleErrors(response) {
  if (!response.ok) {
      throw Error(response.statusText);
  }
  return response;
}

const dataSource = new CustomStore({
  key: 'post_id',

  load: () => {
      return fetch('http://localhost:3001/posts')
      .then(handleErrors)
      .then(response => response.json())
      .catch(() => { throw 'Network error' });
  },
  insert: (values) => {
    return fetch('http://localhost:3001/post', {
      method: 'POST',
      body: JSON.stringify(values),
      headers:{
          'Content-Type': 'application/json'
      }
    })
    .then(handleErrors)
    .catch(() => { throw 'Network error' });
  },
  update: (key, values) => {
    return fetch(`http://localhost:3001/post/${encodeURIComponent(key)}`, {
            method: 'PUT',
            body: JSON.stringify(values),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        .then(handleErrors)
        .catch(() => { throw 'Network error' });
  },
  remove: (key) => {
    return fetch(`http://localhost:3001/post/${encodeURIComponent(key)}`, {
      method: 'DELETE'
    })
    .then(handleErrors)
    .catch(() => { throw 'Network error' });
  }
});

export default function Task() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Postovi</h2>

      <DataGrid
        className={'dx-card wide-card'}
        dataSource={dataSource}
        showBorders={false}
        focusedRowEnabled={true}
        defaultFocusedRowIndex={0}
        columnAutoWidth={true}
        columnHidingEnabled={true}
        onSelectionChanged={selectionChanged}
        onContentReady={contentReady}
        keyExpr= "post_id"
      >
         <Editing
            //refreshMode='full'
            mode="popup"
            allowAdding={true}
            allowDeleting={true}
            allowUpdating={true}
          />

        <Paging defaultPageSize={10} />
        <Pager showPageSizeSelector={true} showInfo={true} />
        <FilterRow visible={true} />
        <Selection mode="single" />
        <Column
          dataField='name'
          width={190}
          caption='Ime organizacije'
          hidingPriority={8}
        />
        <Column
          dataField='datetime'
          dataType='datetime'
          format = 'dd-MM-yyyy HH-mm-ss'
          caption='Vreme'
          hidingPriority={6}
        />
        <Column
          dataField='place'
          caption='Mesto'
          hidingPriority={5}
        />
        <Column
          dataField='description'
          caption='Opis'
          hidingPriority={5}
        />
        <MasterDetail enabled={true} render={renderDetail} />
      </DataGrid>
      
      
    </React.Fragment>
)}

function contentReady(e) {
  if (!e.component.getSelectedRowKeys().length) { e.component.selectRowsByIndexes(0); }
}

function selectionChanged(e) {
  e.component.collapseAll(-1);
  e.component.expandRow(e.currentSelectedRowKeys[0]);
}

function renderDetail(props) {
  return (
    <div >
      <Applies fk = {props.data.post_id} />
    </div>
  );
}


/*
  
*/

/*const dataSource = {
  store: {
    type: 'odata',
    key: 'Task_ID',
    url: 'https://js.devexpress.com/Demos/DevAV/odata/Tasks'
  },
  expand: 'ResponsibleEmployee',
  select: [
    'Task_ID',
    'Task_Subject',
    'Task_Start_Date',
    'Task_Due_Date',
    'Task_Status',
    'Task_Priority',
    'Task_Completion',
    'ResponsibleEmployee/Employee_Full_Name'
  ]
};

 <Lookup
            dataSource={priorities}
            valueExpr={'value'}
            displayExpr={'name'}
          />
        </Column>
        <Column
          dataField={'ResponsibleEmployee.Employee_Full_Name'}
          caption={'Assigned To'}
          allowSorting={false}
          hidingPriority={7}
        />
        <Column
          dataField={'Task_Start_Date'}
          caption={'Start Date'}
          dataType={'date'}
          hidingPriority={3}
        />
        <Column
          dataField={'Task_Due_Date'}
          caption={'Due Date'}
          dataType={'date'}
          hidingPriority={4}
        />
        <Column
          dataField={'Task_Priority'}
          caption={'Priority'}
          name={'Priority'}
          hidingPriority={1}
        />
        <Column
          dataField={'Task_Completion'}
          caption={'Completion'}
          hidingPriority={0}
        />
*/

/*const priorities = [
  { name: 'High', value: 4 },
  { name: 'Urgent', value: 3 },
  { name: 'Normal', value: 2 },
  { name: 'Low', value: 1 }
];*/
