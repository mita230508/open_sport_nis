import React from 'react';
import './home.scss';

export default function Home() {
  return (
    <React.Fragment>
      <h2 className={'content-block'}>Home</h2>
      <div className={'content-block'}>
        <div className={'dx-card responsive-paddings'}>

          <p>Thanks for using the  DevExtreme React App Template.</p>
          <p>
            <span>This application was built using </span>
            <a href={'https://create-react-app.dev/'} target={'_blank'} rel={'noopener noreferrer'}>Create React App</a>
            <span> and </span>
            <a href={'https://js.devexpress.com/Documentation/Guide/Common/DevExtreme_CLI/'} target={'_blank'} rel={'noopener noreferrer'}>DevExtreme CLI</a>
            <span> and includes the following DevExtreme components:</span>
          </p>
          <ul>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/UI_Components/DataGrid/Getting_Started_with_DataGrid/'} target={'_blank'} rel={'noopener noreferrer'}>DataGrid</a></li>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/Widgets/Form/Overview/'} target={'_blank'} rel={'noopener noreferrer'}>Form</a></li>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/Widgets/Drawer/Getting_Started_with_Navigation_Drawer/'} target={'_blank'} rel={'noopener noreferrer'}>Drawer</a></li>
          </ul>

          <p>To customize your DevExtreme React application further, please refer to the following help topics:</p>

          <ul>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Layouts'} target={'_blank'} rel={'noopener noreferrer'}>Layouts</a></li>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Add_a_New_View'} target={'_blank'} rel={'noopener noreferrer'}>Add a New View</a></li>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Configure_the_Navigation_Menu'} target={'_blank'} rel={'noopener noreferrer'}>Configure the Navigation Menu</a></li>
            <li><a href={'https://js.devexpress.com/Documentation/Guide/React_Components/Application_Template/#Configure_Themes'} target={'_blank'} rel={'noopener noreferrer'}>Configure Themes</a></li>
          </ul>

          <p>
            <span>For technical content related to DevExtreme React components, feel free to explore our </span>
            <a href="https://js.devexpress.com/documentation/" target="_blank" rel="noopener noreferrer">online documentation</a>
            <span> and </span>
            <a href="https://js.devexpress.com/Demos/Widgetsgallery/" target="_blank" rel="noopener noreferrer">technical demos</a>.
          </p>
        </div>
      </div>
      <address className='content-block'> 
      <p> Pri potrebi kontakta možete koristiti naredno (napisano po redu brzine odgovora):
        <ul>
          <li>opensportsnis@gmail.com</li>
          <li>dimitrije.a.atanaskovic@gmail.com</li>
        </ul>
      </p>
      </address>
    </React.Fragment>
)}
