import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Pager,
  Paging,
  FilterRow,
  Lookup,
  Editing
} from 'devextreme-react/data-grid';

import CustomStore from 'devextreme/data/custom_store';
import 'whatwg-fetch';


function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
  }




  export default function Applies(props) {
    const appliesData = new CustomStore({
      key: 'apply_id',
    
      load: () => {
          return fetch(`http://localhost:3001/apply/${encodeURIComponent(props.fk)}`)
          .then(handleErrors)
          .then(response => response.json())
          .catch(() => { throw 'Network error' });
      },
      insert: (values) => {
        return fetch('http://localhost:3001/apply', {
          method: 'POST',
          body: JSON.stringify({ ...values, post_id : props.fk }),
          headers:{
              'Content-Type': 'application/json'
          }
        })
        .then(handleErrors)
        .catch(() => { throw 'Network error' });
      },
    });
    return (
      <React.Fragment>
        <h2 className={'content-block'}>Prijavljeni</h2>
  
        <DataGrid
          className={'dx-card wide-card'}
          dataSource={appliesData}
          showBorders={false}
          focusedRowEnabled={true}
          defaultFocusedRowIndex={0}
          columnAutoWidth={true}
          columnHidingEnabled={true}
        >
           <Editing
              //refreshMode='full'
              mode="form"
              allowAdding={true}
              allowDeleting={false}
              allowUpdating={false}
            />
          <Paging defaultPageSize={10} />
          <Pager showPageSizeSelector={true} showInfo={true} />
          <FilterRow visible={true} />
         
          
          <Column
            dataField='first_name'
            width={190}
            caption='First Name'
            hidingPriority={8}
          />
          <Column
            dataField='last_name'
            caption='Last Name'
            hidingPriority={6}
          />
          <Column
            dataField='email'
            caption='Email'
            hidingPriority={5}
          />
           
        </DataGrid>
      </React.Fragment>
  )}