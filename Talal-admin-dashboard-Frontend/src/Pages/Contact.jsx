import React, { useEffect, useState } from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../Data/dummy';
import {Header} from '../Components'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';

const domain  = process.env.REACT_APP_HOST_DOMAIN;

const Contact = () => {
  const userData = (JSON.parse(localStorage.getItem("adminUser")));

  const navigate = useNavigate();

 

  const [contact , setContact] = useState([]);

  useEffect(()=>{
    if(!userData){
      navigate("/login");
  }
  else{
    const fetchData = async () => {
      try {
        
        toast.loading("Fetching....");
        const response = await axios.get(`${domain}/get-msg-user`);
        toast.dismiss();
        const data = response.data.data;
        setContact(data);
      } catch (err) {
        console.log(err.message);
        toast.error(err.message);
      }
    };

    fetchData(); 
  }// Call the async function here
  },[]);

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      Copy code
      <GridComponent
        id="gridcomp"
        dataSource={contact} // Use the 'contact' array as the dataSource
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          <ColumnDirective field="name" headerText="Name" width="150" /> {/* Add columns for 'name', 'email', and 'message' */}
          <ColumnDirective field="email" headerText="Email" width="200" />
          <ColumnDirective field="msg" headerText="Message" width="250" />
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Contact;