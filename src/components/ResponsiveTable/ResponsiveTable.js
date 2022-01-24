import React from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
import countries from '../../common/utils/dummy/countries.json'
import devices from '../../common/utils/dummy/device.json'
export const ResponsiveTable = ({ data, searchField }) => {

  if (searchField !== "") { data = searchField } else { data = data.data }


  const filterDevice = (id) => {
    const isDevice = devices.data.find(i => i.id == id)
    if (isDevice) return isDevice.name
  }

  const filterCountries = (id) => {
    const isDevice = countries.data.find(i => i.id == id)
    if (isDevice) return isDevice.name
  }

  const renderState = (state) => {
    if (state === "SUCCESS") {
      return <div className='ok'>OK</div>
    } else {
      if (state === "ERROR") {
        return <div className='err'>ERR</div>
      } else {
        if (state === "WARNING") {
          <div className='wrn'>WRN</div>
        }
      }
    }
  }


  return <Table>
    <Thead>
      <Tr >
        <Th><div className='first'>Location</div></Th>
        <Th>Status</Th>
        <Th>Device</Th>
        <Th>IP Address</Th>
        <Th><div className='last'>Time</div></Th>
      </Tr>
    </Thead>
    <Tbody>
      {data?.map(item =>
        <Tr>
          <Td><div className='first'>{filterCountries(item.location_id)}</div> </Td>
          <Td>{renderState(item.status)}</Td>
          <Td>{filterDevice(item.device)}</Td>
          <Td>{item.ip}</Td>
          <Td><div className='last'>{item.created_at.slice(0, 10)}</div></Td>
        </Tr>
      )}
    </Tbody>
  </Table>;
};
